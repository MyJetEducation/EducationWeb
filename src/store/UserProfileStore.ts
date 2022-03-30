import { makeAutoObservable } from 'mobx';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import API from '../helpers/API';
import { UserAuthenticate, UserProfileType } from '../types/UserInfo';
import { RootStore } from './RootStore';

interface UserProfileStoreProps {
  rootStore: RootStore;
  userAccount: UserProfileType | null;
}

export class UserProfileStore implements UserProfileStoreProps {
  rootStore: RootStore;
  userAccount: UserProfileType | null = null;

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

  // store actions
  setUserAccount = (acc: UserProfileType | null) => {
    this.userAccount = acc;
  };

  // reset store
  reset = () => {
    this.setUserAccount(null);
  };
}
