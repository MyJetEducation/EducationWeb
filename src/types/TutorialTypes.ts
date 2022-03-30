export interface TutorialsListItemType {
  tutorial: string;
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

export interface TutorialItemType {
  tutorial: string;
  taskScore: number;
  finished: boolean;
  units: UnitType[];
}
