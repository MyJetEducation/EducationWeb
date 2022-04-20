import {
  LOCAL_STORAGE_DEVICE_UID,
  LOCAL_STORAGE_LANGUAGE,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
  LOCAL_STORAGE_TOKEN_KEY,
  LOCAL_STORAGE_TOKEN_USER_LOG,
} from './../constants/global';
import { HubConnection } from '@aspnet/signalr';
import { makeAutoObservable } from 'mobx';
import API from '../helpers/API';
import Axios, { AxiosRequestConfig } from 'axios';
import RequestHeaders from '../constants/headers';
import { RootStore } from './RootStore';

import { CountriesEnum } from '../enums/CountriesEnum';
import injectInerceptors from '../http/interceptors';
import { languagesList } from '../constants/languagesList';
import { logger } from '../helpers/ConsoleLoggerTool';
import {
  UserAuthenticate,
  UserForgotPassword,
  UserRegistration,
} from '../types/UserInfo';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import { v4 as uuid } from 'uuid';
import { OperationAuthApiResponseCodes } from '../enums/OperationAuthApiResponseCodes';
import { KeyValueType } from '../types/KeyValuesTypes';
import { KeyValueEnum } from '../enums/KeyValueEnum';

interface MainAppStoreProps {
  deviceUid: string;

  token: string;
  refreshToken: string;
  tokenLog: string;

  isAuthorized: boolean;
  activeSession?: HubConnection;

  isLoading: boolean;

  signalRReconnectTimeOut: string;
  lang: CountriesEnum;

  websocketConnectionTries: number;
  requestReconnectCounter: number;

  keyValues: KeyValueType[];
}
export class MainAppStore implements MainAppStoreProps {
  deviceUid = '';

  token = '';
  refreshToken = '';
  tokenLog = '';

  isAuthorized = false;
  activeSession?: HubConnection;

  isLoading = true;

  websocketConnectionTries = 0;

  rootStore: RootStore;
  signalRReconnectTimeOut = '';
  lang = CountriesEnum.EN;

  keyValues: KeyValueType[] = [];

  connectTimeOut = IS_LOCAL ? 30000 : 5000;
  requestReconnectCounter = 0;
  signalRReconectCounter = 0;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      connectTimeOut: false,
      signalRReconnectTimeOut: false,
    });
    this.rootStore = rootStore;

    this.tokenLog = localStorage.getItem(LOCAL_STORAGE_TOKEN_USER_LOG) || '';
    this.token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || '';
    this.refreshToken =
      localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY) || '';

    this.deviceUid = this.getDeviceUid();

    Axios.defaults.headers[RequestHeaders.AUTHORIZATION] =
      'Bearer ' + this.token;
    Axios.defaults.timeout = this.connectTimeOut;

    const newLang =
      localStorage.getItem(LOCAL_STORAGE_LANGUAGE) ||
      (window.navigator.language &&
      languagesList.includes(
        window.navigator.language.slice(0, 2).toLowerCase()
      )
        ? window.navigator.language.slice(0, 2).toLowerCase()
        : CountriesEnum.EN);

    // @ts-ignore
    this.lang = newLang;
    const langToHtml =
      newLang === CountriesEnum.ES &&
      window.navigator.language.slice(0, 2).toLowerCase() === CountriesEnum.ES
        ? window.navigator.language
        : newLang;
    document.querySelector('html')?.setAttribute('lang', langToHtml);
    injectInerceptors(this);
  }

  setInterceptors = () => {
    Axios.interceptors.request.use((config: AxiosRequestConfig) => {
      config.headers[RequestHeaders.ACCEPT_LANGUAGE] = `${this.lang}`;
      return config;
    });
  };

  // async actions

  // user loggers
  getUserTimeToken = async () => {
    const response = await API.getUserTimeToken();
    if (response.status === OperationApiResponseCodes.Ok) {
      this.setTokenLogHandler(response.data);
    }
  };

  postUserTimeLog = async () => {
    if (!this.tokenLog) {
      return;
    }
    const response = await API.postUserTimeLog(this.tokenLog);
    return response.status;
  };
  // end user loggers

  initApp = async () => {
    logger(' === init app === ');
    if (!this.token) {
      this.setIsLoading(false);
      return;
    }
    this.setIsLoading(true);
    this.setIsAuthorized(true);
    await this.rootStore.userProfileStore.initActiveSessionInfo();
    // await this.rootStore.userProfileStore.getUserAccount();
    await this.getKeyValues();
    this.rootStore.onBoardingStore.checkAvailableOB();
    this.setIsLoading(false);
  };

  // KEY VALUES
  getKeyValues = async () => {
    try {
      const response = await API.getKeyValues([...Object.values(KeyValueEnum)]);
      if (response.status === OperationApiResponseCodes.Ok) {
        this.keyValues = response?.data?.items || [];
      }
    } catch (error) {}
  };

  setKeyValue = async (data: KeyValueType) => {
    try {
      await API.setKeyValues([data]);
    } catch (error) {}
  };

  setKeyValues = async (data: KeyValueType[]) => {
    try {
      await API.setKeyValues(data);
    } catch (error) {}
  };

  // END KEY VALUES

  sendRegisterConfirm = async (hash: string) => {
    const response = await API.registerConfirm(hash);
    if (response.status === OperationApiResponseCodes.Ok) {
      this.setTokenHandler(response.data?.token || '');
      this.setRefreshToken(response.data?.refreshToken || '');
      this.setIsAuthorized(true);
    }
    return response.status;
  };

  postRefreshToken = async () => {
    try {
      const response = await API.refreshToken(this.refreshToken);
      logger(response);
      if (response.result === OperationAuthApiResponseCodes.OK) {
        this.setRefreshToken(response.data.refreshToken);
        this.setTokenHandler(response.data.token);
      }
    } catch (error) {
      logger(error);
      this.setRefreshToken('');
      this.setTokenHandler('');
    }
  };

  signIn = async (values: UserAuthenticate) => {
    const response = await API.authenticate(values);
    if (response.result === OperationAuthApiResponseCodes.OK) {
      this.setTokenHandler(response.data?.token || '');
      this.setRefreshToken(response.data?.refreshToken || '');
      this.setIsAuthorized(true);

      this.initApp();
    }
    return response.result;
  };

  signUp = async (values: UserRegistration) => {
    const response = await API.signUp(values);
    if (response.result === OperationAuthApiResponseCodes.OK) {
      // send refresh token
      this.setTokenHandler(response.data?.token || '');
      this.setRefreshToken(response.data?.refreshToken || '');
      this.setIsAuthorized(true);

      this.initApp();
    }
    return response.result;
  };

  signOut = () => {
    API.signOut(this.token).catch((e) => console.log(e));
    this.reset();
  };

  // store action

  getDeviceUid = () => {
    let id = localStorage.getItem(LOCAL_STORAGE_DEVICE_UID) || '';
    if (!id) {
      id = uuid();
      localStorage.setItem(LOCAL_STORAGE_DEVICE_UID, id);
    }
    return id;
  };

  setTokenHandler = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    Axios.defaults.headers[RequestHeaders.AUTHORIZATION] = 'Bearer ' + token;
    this.token = token;
  };

  setTokenLogHandler = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_USER_LOG, token);
    this.tokenLog = token;
  };

  setRefreshToken = (refreshToken: string) => {
    localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, refreshToken);
    this.refreshToken = refreshToken;
  };

  setIsAuthorized = (isAuth: boolean) => {
    this.isAuthorized = isAuth;
  };

  setIsLoading = (loading: boolean) => {
    this.isLoading = loading;
  };

  // reset stores
  reset = () => {
    this.setRefreshToken('');
    this.setTokenHandler('');
    this.setTokenLogHandler('');
    this.setIsAuthorized(false);
    this.keyValues = [];

    this.rootStore.userProfileStore.reset();
    this.rootStore.tutorialStore.reset();
    this.rootStore.onBoardingStore.reset();
  };
}
