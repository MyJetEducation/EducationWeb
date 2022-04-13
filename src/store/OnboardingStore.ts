import { makeAutoObservable } from 'mobx';
import OnboardingTurData from '../constants/Data/OnboardingTurData';

interface OnboardingStoreProps {
  isAvailable: boolean;
  activeStep: number;
}

export class OnboardingStore implements OnboardingStoreProps {
  isAvailable = true;
  activeStep = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setNextStep = () => {
    const currentIndex =
      OnboardingTurData.findIndex((el) => el.id === this.activeStep) + 1;

    if (OnboardingTurData.length !== currentIndex) {
      this.setActiveStep(this.activeStep + 1);
    } else {
      console.log('end');
      this.isAvailable = false;
    }
  };

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
}
