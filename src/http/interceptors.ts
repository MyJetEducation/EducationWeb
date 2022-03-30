import axios, { AxiosResponse } from 'axios';
import { MainAppStore } from '../store/MainAppStore';
import API from '../helpers/API';
import { logger } from '../helpers/ConsoleLoggerTool';
import RequestHeaders from '../constants/headers';

const injectInerceptors = (mainAppStore: MainAppStore) => {
  let isRefreshing = false;
  let failedQueue: any[] = [];

  const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });
    failedQueue = [];
  };

  axios.interceptors.request.use((config) => {
    return config;
  });

  axios.interceptors.response.use(
    function (response: AxiosResponse) {
      return response;
    },

    async function (error) {
      const originalRequest = error.config;

      const repeatRequest = (callback: any) => {
        callback(originalRequest);
      };

      switch (error.response?.status) {
        case 401: {
          if (!mainAppStore.isAuthorized) {
            return Promise.reject(error);
          } else {
            if (mainAppStore.refreshToken && !originalRequest._retry) {
              if (isRefreshing) {
                try {
                  const token = await new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                  });
                  originalRequest.headers[RequestHeaders.AUTHORIZATION] =
                    'Bearer ' + token;
                  return await axios(originalRequest);
                } catch (err) {
                  return await Promise.reject(err);
                }
              }

              originalRequest._retry = true;
              isRefreshing = true;

              return new Promise(function (resolve, reject) {
                mainAppStore
                  .postRefreshToken()
                  .then(() => {
                    axios.defaults.headers[RequestHeaders.AUTHORIZATION] =
                      'Bearer ' + mainAppStore.token;

                    error.config.headers[RequestHeaders.AUTHORIZATION] =
                      'Bearer ' + mainAppStore.token;
                    originalRequest._retry = false;

                    processQueue(null, mainAppStore.token);
                    resolve(axios(originalRequest));
                  })
                  .catch((err) => {
                    mainAppStore.setRefreshToken('');
                    processQueue(err, null);
                    reject(err);
                  })
                  .finally(() => {
                    isRefreshing = false;
                  });
              });
            } else {
              mainAppStore.requestReconnectCounter = 0;
              mainAppStore.signOut();
            }
          }
          break;
        }

        case 403: {
          if (!mainAppStore.isAuthorized) {
            return Promise.reject(error);
          } else {
            failedQueue.forEach((prom) => {
              prom.reject();
            });
            mainAppStore.requestReconnectCounter = 0;
            mainAppStore.signOut();
          }
          break;
        }

        default:
          break;
      }

      return Promise.reject(error);
    }
  );
};
export default injectInerceptors;
