import { TutorialEnum } from './../../../enums/TutorialsEnum';
const UNITS_DATA: any = {
  [TutorialEnum.PersonalFinance]: {
    tutorial: TutorialEnum.PersonalFinance,
    title: 'Personal Finance',
    description: 'test',
    info: {
      units: 5,
      duration: '2h 30m',
      videos: 5,
      tests: 5,
    },
    units: [
      {
        id: 1,
        title: 'Your income',
        duration: '43 min',
        tasks: [
          {
            id: 1,
            title: 'test',
            duration: '5 min',
          },
          {
            id: 2,
            title: 'test',
            duration: '5 min',
          },
          {
            id: 3,
            title: 'test',
            duration: '5 min',
          },
        ],
      },
      {
        id: 2,
        title: 'Secrets for Spending Your Money Wisely',
        duration: '20 min',
        tasks: [
          {
            id: 1,
            title: 'test',
            duration: '5 min',
          },
          {
            id: 2,
            title: 'test',
            duration: '5 min',
          },
          {
            id: 3,
            title: 'test',
            duration: '5 min',
          },
        ],
      },
      {
        id: 3,
        title: 'Hidden expenses and lost profits',
        duration: '5 min',
        tasks: [
          {
            id: 1,
            title: 'test',
            duration: '5 min',
          },
          {
            id: 2,
            title: 'test',
            duration: '5 min',
          },
          {
            id: 3,
            title: 'test',
            duration: '5 min',
          },
        ],
      },
      {
        id: 4,
        title: 'Salary - make sure that it is enough',
        duration: '3 min',
        tasks: [
          {
            id: 1,
            title: 'test',
            duration: '5 min',
          },
          {
            id: 2,
            title: 'test',
            duration: '5 min',
          },
          {
            id: 3,
            title: 'test',
            duration: '5 min',
          },
        ],
      },
      {
        id: 5,
        title: 'Modern tools for budget planning in three steps',
        duration: '30 min',
        tasks: [
          {
            id: 1,
            title: 'test',
            duration: '5 min',
          },
          {
            id: 2,
            title: 'test',
            duration: '5 min',
          },
          {
            id: 3,
            title: 'test',
            duration: '5 min',
          },
        ],
      },
    ],
  },
};

Object.freeze(UNITS_DATA);
export default UNITS_DATA;
