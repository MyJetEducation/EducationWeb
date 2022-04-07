import { makeAutoObservable } from 'mobx';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import { TutorialEnum } from '../enums/TutorialsEnum';
import API from '../helpers/API';
import {
  TutorialItemType,
  TutorialsListItemType,
} from '../types/TutorialTypes';
import { RootStore } from './RootStore';

interface TutorialStoreProps {
  rootStore: RootStore;
  tutorials: TutorialsListItemType[] | null;
  activeTutorial: TutorialItemType | null;
}

export class TutorialStore implements TutorialStoreProps {
  rootStore: RootStore;

  tutorials: TutorialsListItemType[] | null = null;
  activeTutorial: TutorialItemType | null = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
    });

    this.rootStore = rootStore;
  }

  // async

  getTutorial = async (tutorial: TutorialEnum) => {
    const response = await API.getTutorial(tutorial);
    if (response.status === OperationApiResponseCodes.Ok) {
      this.setActiveTutorial(response.data);
    }
    return response.status;
  };

  getTutorialsList = async () => {
    const response = await API.getTutorials();
    if (response.status === OperationApiResponseCodes.Ok) {
      this.setTutorials(response.data.tutorials);
    }
    return response.status;
  };

  // actions
  setTutorials = (list: TutorialsListItemType[] | null) => {
    this.tutorials = list;
  };

  setActiveTutorial = (tutoral: TutorialItemType | null) => {
    this.activeTutorial = tutoral;
  };

  // computed
  get startedTutorial() {
    return this.tutorials?.find(
      (tutorial) => tutorial.started && !tutorial.finished
    );
  }

  // reset store
  reset = () => {
    this.setTutorials(null);
    this.setActiveTutorial(null);
  };
}
