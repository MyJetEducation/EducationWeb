import axios, { AxiosRequestConfig } from 'axios';
import { UserAuthenticate } from '../types/UserInfo';
import AUTH_API_LIST from './apiListAuth';
import requestOptions from '../constants/requestOptions';

class API {
  private convertParamsToFormData = (params: { [key: string]: any }) => {
    const formData = new FormData();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });
    return formData;
  };

  clientRequestOptions: AxiosRequestConfig = {
    timeoutErrorMessage: requestOptions.TIMEOUT,
    data: {
      initBy: requestOptions.CLIENT,
    },
  };
  backgroundRequestOptions: AxiosRequestConfig = {
    timeoutErrorMessage: requestOptions.TIMEOUT,
    data: {
      initBy: requestOptions.BACKGROUND,
    },
  };

  /* 
  ---  Clients Request
  */

  authenticate = async (credentials: UserAuthenticate, authUrl: string) => {
    const response = await axios.post<any>(
      `${API_AUTH_STRING || authUrl}${AUTH_API_LIST.AUTH.SIGN_IN}`,
      credentials,
      this.clientRequestOptions
    );
    return response.data;
  };
}

export default new API();
