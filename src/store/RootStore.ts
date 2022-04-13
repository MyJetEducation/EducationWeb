import { MainAppStore } from './MainAppStore';
import { OnboardingStore } from './OnboardingStore';
import { TutorialStore } from './TutorialsStore';
import { UserProfileStore } from './UserProfileStore';

export class RootStore {
  mainAppStore: MainAppStore;
  userProfileStore: UserProfileStore;
  tutorialStore: TutorialStore;
  onBoardingStore: OnboardingStore;

  constructor() {
    this.mainAppStore = new MainAppStore(this);
    this.userProfileStore = new UserProfileStore(this);
    this.tutorialStore = new TutorialStore(this);
    this.onBoardingStore = new OnboardingStore();
  }
}
