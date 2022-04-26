import { makeAutoObservable } from 'mobx';
import OnboardingTurData from '../constants/Data/OnboardingTurData';
import { KeyValueEnum } from '../enums/KeyValueEnum';
import { RootStore } from './RootStore';

interface OnboardingStoreProps {
  isAvailable: boolean;
  activeStep: number;
  rootStore: RootStore;
}

export class OnboardingStore implements OnboardingStoreProps {
  rootStore: RootStore;

  isAvailable = false;
  activeStep = 1;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
    });

    this.rootStore = rootStore;
  }

  setNextStep = () => {
    const currentIndex =
      OnboardingTurData.findIndex((el) => el.id === this.activeStep) + 1;

    if (OnboardingTurData.length !== currentIndex) {
      this.setActiveStep(this.activeStep + 1);
    } else {
      this.saveOnboardingProgress();
    }
  };

  // async

  checkAvailableOB = () => {
    if (
      this.rootStore.mainAppStore.keyValues.find(
        (kv) => kv.key === KeyValueEnum.showOnboarding
      )?.value !== 'false'
    ) {
      this.isAvailable = true;
    }
  };

  saveOnboardingProgress = () => {
    this.isAvailable = false;
    this.rootStore.mainAppStore.setKeyValue({
      key: KeyValueEnum.showOnboarding,
      value: 'false',
    });
  };

  // store

  setActiveStep = (step: number) => {
    this.activeStep = step;
  };

  get activeHint() {
    return OnboardingTurData[this.activeStep - 1];
  }

  classNameList = (el: string | string[]) => {
    if (!this.isAvailable) {
      return '';
    }
    if (Array.isArray(el)) {
      const active = el.find((item) => item === this.activeHint.element);
      if (active) {
        return `${el.join(' ')} active_hint ob_item`;
      }
    }
    if (this.activeHint.element === el) {
      return `${el} active_hint ob_item`;
    }
    return '';
  };

  reset = () => {
    this.isAvailable = false;
    this.activeStep = 1;
  }
}
