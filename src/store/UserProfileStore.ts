import { makeAutoObservable } from 'mobx';
import { AchievementsEnum } from '../enums/AchievementsEnum';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import API from '../helpers/API';
import { UserProfileType, UserSessionInfoResponse } from '../types/UserInfo';
import { RootStore } from './RootStore';
import { HabitItemType } from '../types/StatsTypes';
import { OperationAuthApiResponseCodes } from '../enums/OperationAuthApiResponseCodes';

interface UserProfileStoreProps {
  rootStore: RootStore;
  userAccount: UserProfileType | null;

  unReceivedAchievements: AchievementsEnum[];
  userAchievements: AchievementsEnum[];

  availableTokenBalance: number | null;

  testScore: number;
  taskCount: number;
  habit: HabitItemType | null;
  skillProgress: number;

  emailVerified: boolean;
  phoneVerified: boolean;
  twoFactorAuthentication: boolean;
  twoFactorAuthenticationEnabled: boolean;
  tokenLifetimeRemaining: string;
  ipCountry: string;
}

export class UserProfileStore implements UserProfileStoreProps {
  rootStore: RootStore;
  userAccount: UserProfileType | null = null;

  userAchievements: AchievementsEnum[] = [];
  unReceivedAchievements: AchievementsEnum[] = [];

  availableTokenBalance: number | null = null;

  testScore = 0;
  taskCount = 0;
  habit: HabitItemType | null = null;
  skillProgress = 0;

  // session info
  emailVerified = false;
  phoneVerified = false;
  twoFactorAuthentication = false;
  twoFactorAuthenticationEnabled = false;
  tokenLifetimeRemaining = '';
  ipCountry = '';
  // END session info

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
    });
    this.rootStore = rootStore;
  }

  // async
  initActiveSessionInfo = async () => {
    const response = await API.getSessionInfo();
    if (response.result !== OperationAuthApiResponseCodes.OK) {
      return response.result;
    }
    this.setActiveSessionInfo(response.data);
  };

  getUserAccount = async () => {
    const response = await API.getUserProfile();
    if (response.status === OperationApiResponseCodes.Ok) {
      this.setUserAccount(response.data);
    }
    return response.status;
  };

  getAchievement = async () => {
    const response = await API.getAchievements();
    if (response.status === OperationApiResponseCodes.Ok) {
      this.setUserAchievements(response.data.userAchievements);
      this.setUnReceivedAchievements(response.data.unreceivedAchievements);
    }
    return response.status;
  };

  getDashboardProgress = async () => {
    const response = await API.getDashboardProgress();
    if (response.status === OperationApiResponseCodes.Ok) {
      this.setTestScore(response.data.testScore);
      this.setTaskCount(response.data.taskScore);
      this.setHabit(response.data.habit);
      this.setUserAchievements(response.data.achievements);
      this.setSkillProgress(response.data.skillProgress);
    }
    return response.status;
  };

  getAvailableBalance = async () => {
    const response = await API.getMarketAvailableTokens();
    if (response.status == OperationApiResponseCodes.Ok) {
      this.setAvailableTokenBalance(response.data.value);
    }
  }

  // store actions

  setAvailableTokenBalance = (balance: number | null) => {
    this.availableTokenBalance = balance;
  }

  setCheckEmail = (state: boolean) => {
    this.emailVerified = state;
  };

  setActiveSessionInfo = (info: UserSessionInfoResponse) => {
    this.emailVerified = info.emailVerified;
    this.phoneVerified = info.phoneVerified;
    this.twoFactorAuthentication = info.twoFactorAuthentication;
    this.twoFactorAuthenticationEnabled = info.twoFactorAuthenticationEnabled;
    this.tokenLifetimeRemaining = info.tokenLifetimeRemaining;
    this.ipCountry = info.ipCountry;
  };

  setUserAchievements = (list: AchievementsEnum[]) => {
    this.userAchievements = list || [];
  };
  setUnReceivedAchievements = (list: AchievementsEnum[]) => {
    this.unReceivedAchievements = list || [];
  };

  setUserAccount = (acc: UserProfileType | null) => {
    this.userAccount = acc;
  };

  setTestScore = (progress: number) => {
    this.testScore = progress;
  };

  setTaskCount = (progress: number) => {
    this.taskCount = progress;
  };

  setHabit = (item: HabitItemType | null) => {
    this.habit = item;
  };

  setSkillProgress = (progress: number) => {
    this.skillProgress = progress;
  };

  // computed
  get totalAchievementsCount() {
    return (
      this.userAchievements.length + this.unReceivedAchievements.length || 0
    );
  }

  get totalActiveAchievementsCount() {
    return this.userAchievements.length || 0;
  }

  get totalDeActiveAchievementsCount() {
    return this.unReceivedAchievements.length || 0;
  }

  // reset store
  reset = () => {
    this.setUserAccount(null);
    this.setTaskCount(0);
    this.setTestScore(0);
    this.setHabit(null);
    this.setSkillProgress(0);
    this.setAvailableTokenBalance(null);
  };
}
