import { UnitWithDataType } from './../types/TutorialTypes';
import { makeAutoObservable } from 'mobx';
import UNITS_DATA from '../constants/Data/UnitsData/UnitsData';
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
  unitsWithData: UnitWithDataType[] | null;
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

  get unitsWithData() {
    if (this.activeTutorial === null) {
      return null;
    }
    const unitsData = UNITS_DATA[this.activeTutorial.tutorial];

    return this.activeTutorial.units.map((unit) => {
      const data = unitsData.units.find((el) => el.id === unit.unit) || null;

      return {
        unit,
        data,
      };
    });
  }

  get activeUnit() {
    let unit = this.activeTutorial?.units.find(
      (el) => el.hasProgress && !el.finished
    );
    if (!unit) {
      unit = this.activeTutorial?.units[0];
    }
    return unit;
  }

  // reset store
  reset = () => {
    this.setTutorials(null);
    this.setActiveTutorial(null);
  };
}
