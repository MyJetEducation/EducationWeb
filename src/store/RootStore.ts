import { MainAppStore } from './MainAppStore';
import { UserProfileStore } from './UserProfileStore';

export class RootStore {
  mainAppStore: MainAppStore;
  userProfileStore: UserProfileStore;

  constructor() {
    this.mainAppStore = new MainAppStore(this);
    this.userProfileStore = new UserProfileStore(this);
  }
}
