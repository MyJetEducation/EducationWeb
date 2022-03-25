import axios, { AxiosResponse } from 'axios';
import { MainAppStore } from '../store/MainAppStore';
import API from '../helpers/API';

const injectInerceptors = (mainAppStore: MainAppStore) => {
  axios.interceptors.request.use((config) => {
    return config;
  });

  axios.interceptors.response.use(
    function (response: AxiosResponse) {
      return response;
    },

    async function (error) {
      switch (error.response?.status) {
        case 401:
          // refresh token
          break;

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
