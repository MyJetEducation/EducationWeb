import axios, { AxiosRequestConfig } from 'axios';
import {UserAuthenticate, UserRegistration, UserRegistrationDTO} from '../types/UserInfo';
import AUTH_API_LIST from './apiListAuth';
import requestOptions from '../constants/requestOptions';
import { RefreshTokenDTO } from '../types/RefreshTokenTypes';

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
  authenticate = async (credentials: UserAuthenticate) => {
    const response = await axios.post<any>(
      `${API_STRING}${AUTH_API_LIST.AUTH.SIGN_IN}`,
      credentials
    );
    return response.data;
  };

  signUp = async (credentials: UserRegistration) => {
    const response = await axios.post<UserRegistrationDTO>(
      `${API_STRING}${AUTH_API_LIST.REGISTER.SIGN_UP}`,
      credentials
    );
    return response.data;
  };

  /*
  --- Background Request
  */
  registerConfirm = async (hash: string) => {
    const response = await axios.post<any>(
      `${API_STRING}${AUTH_API_LIST.REGISTER.REGISTER_CONFIRM}`,
      JSON.stringify(hash),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data;
  };

  refreshToken = async (refreshToken: string) => {
    const response = await axios.post<RefreshTokenDTO>(
      `${API_STRING}${AUTH_API_LIST.AUTH.REFRESH_TOKEN}`,
      JSON.stringify(refreshToken),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data;
  };
}

export default new API();
