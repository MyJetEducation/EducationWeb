import {
  LOCAL_STORAGE_LANGUAGE,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
  LOCAL_STORAGE_TOKEN_KEY,
} from './../constants/global';
import { UserAuthenticate, UserRegistration } from '../types/UserInfo';
import { HubConnection } from '@aspnet/signalr';
import { action, makeAutoObservable } from 'mobx';
import API from '../helpers/API';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import initConnection from '../services/websocketService';
import Topics from '../constants/websocketTopics';
import Axios, { AxiosRequestConfig } from 'axios';
import RequestHeaders from '../constants/headers';
import { RootStore } from './RootStore';
import Fields from '../constants/fields';
import mixpanel from 'mixpanel-browser';

import { CountriesEnum } from '../enums/CountriesEnum';
import injectInerceptors from '../http/interceptors';
import { languagesList } from '../constants/languagesList';
import { debugLevel } from '../constants/debugConstants';

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
    Axios.defaults.headers[RequestHeaders.AUTHORIZATION] = this.token;
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

  // actions

  sendRegisterConfirm = async (hash: string) => {
    const response = await API.registerConfirm(hash);
  }
}
