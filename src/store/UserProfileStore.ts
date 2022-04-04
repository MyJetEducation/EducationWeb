import { makeAutoObservable } from 'mobx';
import { AchievementsEnum } from '../enums/AchievementsEnum';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import API from '../helpers/API';
import { AchievementsTypes } from '../types/AchievementsTypes';
import { UserAuthenticate, UserProfileType } from '../types/UserInfo';
import { RootStore } from './RootStore';

interface UserProfileStoreProps {
  rootStore: RootStore;
  userAccount: UserProfileType | null;

  unReceivedAchievements: AchievementsEnum[];
  userAchievements: AchievementsEnum[];
}

export class UserProfileStore implements UserProfileStoreProps {
  rootStore: RootStore;
  userAccount: UserProfileType | null = null;

  userAchievements: AchievementsEnum[] = [];
  unReceivedAchievements: AchievementsEnum[] = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
    });

    this.rootStore = rootStore;
  }

  // async
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

  // store actions

  setUserAchievements = (list: AchievementsEnum[]) => {
    this.userAchievements = list;
  };
  setUnReceivedAchievements = (list: AchievementsEnum[]) => {
    this.unReceivedAchievements = list;
  };

  setUserAccount = (acc: UserProfileType | null) => {
    this.userAccount = acc;
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

  // reset store
  reset = () => {
    this.setUserAccount(null);
  };
}
