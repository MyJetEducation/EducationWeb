import {
  LOCAL_STORAGE_LANGUAGE,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
  LOCAL_STORAGE_TOKEN_KEY,
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
import { UserAuthenticate, UserRegistration } from '../types/UserInfo';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';

interface MainAppStoreProps {
  token: string;
  refreshToken: string;

  isAuthorized: boolean;
  activeSession?: HubConnection;

  isLoading: boolean;
  isOnboarding: boolean;

  signalRReconnectTimeOut: string;
  lang: CountriesEnum;

  websocketConnectionTries: number;
  requestReconnectCounter: number;
}
export class MainAppStore implements MainAppStoreProps {
  token = '';
  refreshToken = '';

  isAuthorized = false;
  activeSession?: HubConnection;

  isLoading = true;
  isOnboarding = false;

  websocketConnectionTries = 0;

  rootStore: RootStore;
  signalRReconnectTimeOut = '';
  lang = CountriesEnum.EN;

  connectTimeOut = IS_LOCAL ? 10000 : 5000;
  requestReconnectCounter = 0;
  signalRReconectCounter = 0;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      connectTimeOut: false,
      signalRReconnectTimeOut: false,
    });
    this.rootStore = rootStore;

    this.token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || '';
    this.refreshToken =
      localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY) || '';
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

  initApp = async () => {
    if (!this.token) {
      return;
    }
    // TODO: check fist request for init
    this.setIsAuthorized(true);
    await this.rootStore.userProfileStore.getUserAccount();
  };

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
      if (response.status === OperationApiResponseCodes.Ok) {
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
    if (response.status === OperationApiResponseCodes.Ok) {
      this.setTokenHandler(response.data?.token || '');
      this.setRefreshToken(response.data?.refreshToken || '');

      await this.initApp();
      this.setIsAuthorized(true);
    }
    return response.status;
  };

  signUp = async (values: UserRegistration) => {
    const response = await API.signUp(values);
    return response.status;
  };

  signOut = () => {
    this.setRefreshToken('');
    this.setTokenHandler('');
    this.setIsAuthorized(false);

    this.reset();
  };

  // store action
  setTokenHandler = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    Axios.defaults.headers[RequestHeaders.AUTHORIZATION] = 'Bearer ' + token;
    this.token = token;
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
    this.rootStore.userProfileStore.reset();
    this.rootStore.tutorialStore.reset();
  };
}
