import { MainAppStore } from './MainAppStore';
import { TutorialStore } from './TutorialsStore';
import { UserProfileStore } from './UserProfileStore';

export class RootStore {
  mainAppStore: MainAppStore;
  userProfileStore: UserProfileStore;
  tutorialStore: TutorialStore;

  constructor() {
    this.mainAppStore = new MainAppStore(this);
    this.userProfileStore = new UserProfileStore(this);
    this.tutorialStore = new TutorialStore(this);
  }
}
