import axios, { AxiosRequestConfig } from 'axios';
import {
  EmailConfirmationDTO,
  RecoveryPasswordType,
  UserAuthenticate,
  UserAuthenticateDTO,
  UserForgotPassword,
  UserProfileType,
  UserRegistration,
  UserSessionInfoResponse,
} from '../types/UserInfo';
import AUTH_API_LIST from './apiListAuth';
import requestOptions from '../constants/requestOptions';
import { RefreshTokenDTO } from '../types/RefreshTokenTypes';
import {
  ApiAuthResponseType,
  ApiAuthValidResponseType,
  ApiResponseType,
} from '../types/ApiResponseType';
import API_LIST from './apiList';
import { TutorialItemType, TutorialsListType } from '../types/TutorialTypes';
import { AchievementsTypes } from '../types/AchievementsTypes';
import { DashboardProgressTypes } from '../types/StatsTypes';
import { TutorialEnum } from '../enums/TutorialsEnum';
import { GetKeyValuesType, KeyValueType } from '../types/KeyValuesTypes';
import { KeyValueEnum } from '../enums/KeyValueEnum';
import { ApplicationTypeEnum } from '../enums/ApplicationTypeEnum';

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
    const response = await axios.post<ApiAuthResponseType<UserAuthenticateDTO>>(
      `${API_STRING}${AUTH_API_LIST.AUTH.SIGN_IN}`,
      { ...credentials, platform: ApplicationTypeEnum.SpotWeb }
    );
    return response.data;
  };

  signUp = async (credentials: UserRegistration) => {
    const response = await axios.post<ApiAuthResponseType<UserAuthenticateDTO>>(
      `${API_STRING}${AUTH_API_LIST.REGISTER.SIGN_UP}`,
      { ...credentials, platform: ApplicationTypeEnum.SpotWeb }
    );
    return response.data;
  };

  forgotPassword = async (email: string) => {
    const response = await axios.post<ApiAuthResponseType<any>>(
      `${API_STRING}${AUTH_API_LIST.REGISTER.RECOVERY_PASSWORD}`,
      { email, platform: ApplicationTypeEnum.SpotWeb }
    );
    return response.data;
  };

  recoveryPassword = async (credentials: RecoveryPasswordType) => {
    const response = await axios.post<ApiResponseType<any>>(
      `${API_STRING}${AUTH_API_LIST.REGISTER.CHANGE_PASSWORD}`,
      { ...credentials, platform: ApplicationTypeEnum.SpotWeb }
    );
    return response.data;
  };

  signOut = async (token: string) => {
    const response = await axios.post<ApiAuthResponseType<any>>(
      `${API_STRING}${AUTH_API_LIST.AUTH.SIGN_OUT}`,
      { token }
    );
    return response.data;
  };

  requestVerify = async () => {
    const response = await axios.post<ApiAuthValidResponseType<any>>(
      `${API_AUTH_VALIDATION_STRING}${API_LIST.VALIDATION.REQUST_VERIFY}`,
      {
        platform: ApplicationTypeEnum.SpotWeb,
        language: 'en',
        deviceType: 'Unknown',
      }
    );
    return response.data;
  };

  /*
  --- Background Request
  */
  getSessionInfo = async () => {
    const response = await axios.get<
      ApiAuthResponseType<UserSessionInfoResponse>
    >(`${API_STRING}${API_LIST.INFO.SESSION_INFO}`);
    return response.data;
  };

  // key values
  getKeyValuesList = async () => {
    const response = await axios.post<ApiResponseType<TutorialsListType>>(
      `${API_STRING}${API_LIST.KEY_VALUE.LIST}`
    );
    return response.data;
  };

  getKeyValues = async (keys: KeyValueEnum[]) => {
    const response = await axios.post<ApiResponseType<GetKeyValuesType>>(
      `${API_STRING}${API_LIST.KEY_VALUE.GET}`,
      { keys }
    );
    return response.data;
  };

  setKeyValues = async (items: KeyValueType[]) => {
    const response = await axios.post<ApiResponseType<TutorialsListType>>(
      `${API_STRING}${API_LIST.KEY_VALUE.UPDATE}`,
      { items }
    );
    return response.data;
  };

  deleteKeyValues = async (keys: KeyValueEnum[]) => {
    const response = await axios.post<ApiResponseType<TutorialsListType>>(
      `${API_STRING}${API_LIST.KEY_VALUE.DELETE}`,
      { keys }
    );
    return response.data;
  };
  // end key values

  registerConfirm = async (hash: string) => {
    const response = await axios.post<ApiResponseType<EmailConfirmationDTO>>(
      `${API_STRING}${AUTH_API_LIST.REGISTER.REGISTER_CONFIRM}`,
      JSON.stringify(hash),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data;
  };

  refreshToken = async (refreshToken: string) => {
    const response = await axios.post<ApiAuthResponseType<RefreshTokenDTO>>(
      `${API_STRING}${AUTH_API_LIST.AUTH.REFRESH_TOKEN}`,
      { refreshToken }
    );
    return response.data;
  };

  getUserProfile = async () => {
    const response = await axios.get<ApiResponseType<UserProfileType>>(
      `${API_STRING}${API_LIST.USER_ACCOUNT.GET}`
    );
    return response.data;
  };

  getTutorials = async () => {
    const response = await axios.post<ApiResponseType<TutorialsListType>>(
      `${API_STRING}${API_LIST.DASHBOARD.TUTORIALS_LIST}`
    );
    return response.data;
  };

  getTutorial = async (tutorial: TutorialEnum) => {
    const response = await axios.post<ApiResponseType<TutorialItemType>>(
      `${API_STRING}${API_LIST.DASHBOARD.TUTORIAL}`,
      { tutorial }
    );
    return response.data;
  };

  getAchievements = async () => {
    const response = await axios.post<ApiResponseType<AchievementsTypes>>(
      `${API_STRING}${API_LIST.USER_PROFILE.ACHIEVEMENTS}`
    );
    return response.data;
  };

  getDashboardProgress = async () => {
    const response = await axios.post<ApiResponseType<DashboardProgressTypes>>(
      `${API_STRING}${API_LIST.DASHBOARD.PROGRESS}`
    );
    return response.data;
  };

  getUserTimeToken = async () => {
    const response = await axios.post<ApiResponseType<string>>(
      `${API_STRING}${API_LIST.USER_TIMER.GET_TOKEN}`
    );
    return response.data;
  };

  postUserTimeLog = async (token: string) => {
    const response = await axios.post<ApiResponseType<any>>(
      `${API_STRING}${API_LIST.USER_TIMER.LOG}`,
      JSON.stringify(token),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data;
  };

  postCodeVerify = async (code: string) => {
    const response = await axios.post<ApiAuthValidResponseType<any>>(
      `${API_AUTH_VALIDATION_STRING}${API_LIST.VALIDATION.EMAIL_CODE_VERIFY}`,
      { code }
    );
    return response.data;
  };

  getMarketAvailableTokens = async () => {
    const response = await axios.post<ApiResponseType<{ value: number }>>(
      `${API_STRING}${API_LIST.MARKET.GET_TOKENS}`
    );
    return response.data;
  };
}

export default new API();
