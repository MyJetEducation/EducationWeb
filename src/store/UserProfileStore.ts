import { makeAutoObservable } from "mobx";
import { UserAuthenticate } from "../types/UserInfo";
import { RootStore } from "./RootStore";


interface UserProfileStoreProps {
  rootStore: RootStore;
  user: UserAuthenticate | null;
}


export class UserProfileStore implements UserProfileStoreProps {
  rootStore: RootStore;
  user: UserAuthenticate | null = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
    });

    this.rootStore = rootStore;
  }

};