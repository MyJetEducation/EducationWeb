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

      switch (error.response?.status) {
        case 401: {
          // refresh token
          logger('refresh token');
          if (mainAppStore.refreshToken) {
            return new Promise(function (resolve, reject) {
              mainAppStore
                .postRefreshToken()
                .then(() => {
                  axios.defaults.headers[RequestHeaders.AUTHORIZATION] =
                    mainAppStore.token;

                  error.config.headers[RequestHeaders.AUTHORIZATION] =
                    mainAppStore.token;
                  originalRequest._retry = false;

                  resolve(axios(originalRequest));
                })
                .catch((err) => {
                  mainAppStore.setRefreshToken('');
                  reject(err);
                });
            });
          }
          break;
        }

        case 403: {
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
