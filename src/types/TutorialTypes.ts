import { NumberSchema } from 'yup';
import { TutorialEnum } from '../enums/TutorialsEnum';

export interface TutorialsListItemType {
  tutorial: TutorialEnum;
  started: boolean;
  finished: boolean;
}

export interface TutorialsListType {
  tutorials: TutorialsListItemType[] | null;
}

export interface TaskType {
  date: any; //TODO: remove any type
  hasProgress: boolean;
  retry: {
    inRetry: boolean;
    canRetryByTime: boolean;
    canRetryByCount: boolean;
  };
  task: number;
  taskScore: number;
}

export interface UnitType {
  unit: number;
  finished: boolean;
  hasProgress: boolean;
  taskScore: number;
  tasks: TaskType[];
}

export interface TaskFataType {
  id: number;
  title: string;
  duration: string;
}

export interface UnitDataType {
  id: number;
  title: string;
  duration: string;
  tasks: TaskFataType[];
}

export interface TutorialItemType {
  tutorial: TutorialEnum;
  taskScore: number;
  finished: boolean;
  units: UnitType[];
}

export interface TutorialDataType {
  tutorial: TutorialEnum;
  title: string;
  description: string;
  info: {
    units: number;
    duration: string;
    videos: number;
    tests: number;
  };
  units: UnitDataType[];
}
