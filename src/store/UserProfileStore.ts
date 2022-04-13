import { makeAutoObservable } from 'mobx';
import { AchievementsEnum } from '../enums/AchievementsEnum';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import API from '../helpers/API';
import { UserProfileType } from '../types/UserInfo';
import { RootStore } from './RootStore';
import { HabitItemType } from '../types/StatsTypes';

interface UserProfileStoreProps {
  rootStore: RootStore;
  userAccount: UserProfileType | null;

  unReceivedAchievements: AchievementsEnum[];
  userAchievements: AchievementsEnum[];

  testScore: number;
  taskCount: number;
  habit: HabitItemType | null;
  skillProgress: number;
}

export class UserProfileStore implements UserProfileStoreProps {
  rootStore: RootStore;
  userAccount: UserProfileType | null = null;

  userAchievements: AchievementsEnum[] = [];
  unReceivedAchievements: AchievementsEnum[] = [];

  testScore = 0;
  taskCount = 0;
  habit: HabitItemType | null = null;
  skillProgress = 0;

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

  // store actions

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
  };
}
