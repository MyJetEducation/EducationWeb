import React from 'react';

import unitIcon from './assets/units.svg';
import durationIcon from './assets/durations.svg';
import videoIcon from './assets/videos.svg';
import testIcon from './assets/tests.svg';

import s from './style.module.scss';
import Units from "../Units";
import {
  LESSON_CONTENT_UNIT_1,
  LESSON_CONTENT_UNIT_2,
  LESSON_CONTENT_UNIT_3,
  LESSON_CONTENT_UNIT_4,
  LESSON_CONTENT_UNIT_5
} from "../../../Сourse/Lesson/constans";

const MENU_INFO = [
  {
    id: 1,
    icon: unitIcon,
    title: "5 units"
  },
  {
    id: 2,
    icon: durationIcon,
    title: "Duration: 2h 30m"
  },
  {
    id: 3,
    icon: videoIcon,
    title: "5 videos"
  },
  {
    id: 4,
    icon: testIcon,
    title: "10 tests"
  },
]
const UNIT_NAME = [
  {
    id: 1,
    name: "Unit 1. Your income",
    unitList: Object.values(LESSON_CONTENT_UNIT_1).map((item) => item.title),
    unitIcon: Object.values(LESSON_CONTENT_UNIT_1).map((item) => item.icon)
  },
  {
    id: 2,
    name: "Unit 2. Secrets for Spending Your Money Wisely",
    unitList: Object.values(LESSON_CONTENT_UNIT_2).map((item) => item.title),
    unitIcon: Object.values(LESSON_CONTENT_UNIT_2).map((item) => item.icon)
  },
  {
    id: 3,
    name: "Unit 3. Hidden expenses and lost profits",
    unitList: Object.values(LESSON_CONTENT_UNIT_3).map((item) => item.title),
    unitIcon: Object.values(LESSON_CONTENT_UNIT_3).map((item) => item.icon)
  },
  {
    id: 4,
    name: "Unit 4. Salary - make sure that it is enough.",
    unitList: Object.values(LESSON_CONTENT_UNIT_4).map((item) => item.title),
    unitIcon: Object.values(LESSON_CONTENT_UNIT_4).map((item) => item.icon)
  },
  {
    id: 5,
    name: "Unit 5. Modern tools for budget planning in three steps",
    unitList: Object.values(LESSON_CONTENT_UNIT_5).map((item) => item.title),
    unitIcon: Object.values(LESSON_CONTENT_UNIT_5).map((item) => item.icon)
  }
]

interface tutorialBlockProps {
  unitsScore: any[],
  tutorialName: string
}

export const TutorialBlock: React.FC<tutorialBlockProps> = ({unitsScore, tutorialName}) => {
  return (
    <>
      <div className={s.wrap}>
        <h3 className={s.title}>
          1. Personal Finance
        </h3>
        <p className={s.description}>
          This Discipline will teach how to manage your finance. Help you to build successful strategy to grow up your
          earnings...
        </p>
        <div className={s.info}>
          {
            MENU_INFO.map((item: any) => (
              <div
                className={s.infoItem}
                key={item.id}
              >
                <img className={s.icon} src={item.icon} alt="icon"/>
                <p className={s.infoDescr}>
                  {item.title}
                </p>
              </div>
            ))
          }
        </div>

      </div>
      <div className={s.tasksBlock}>
        {
          UNIT_NAME.map((item, index) => {
            let isShowActiveTask = false;
            let scoreList = [];
            let isSuccess = false;
            let taskScore = null;
            if (unitsScore !== null) {
              scoreList = unitsScore[index]?.tasks
              taskScore = unitsScore[index]?.taskScore

              if (index !== 0 && index !== UNIT_NAME.length - 1) {
                if (unitsScore[index - 1]?.taskScore >= 80 && (!unitsScore[index + 1]?.taskScore || unitsScore[index + 1]?.taskScore < 80)) {
                  isShowActiveTask = true
                }
              }
              if (unitsScore[index]?.taskScore >= 80) {
                isSuccess = true
                isShowActiveTask = false
              }
            } else {
              if (index === 0) {
                isShowActiveTask = true
              }
            }
            return (
              <Units
                key={index}
                isSuccess={isSuccess}
                unitScore={taskScore}
                isShowActiveTask={isShowActiveTask}
                unitList={item.unitList}
                unitIcon={item.unitIcon}
                scoreList={scoreList}
                title={UNIT_NAME[index].name}
                btnName={`Start Unit ${index + 1}`}
                urlRelocate={`/${tutorialName}/unit${index + 1}/1`}
              />
            )
          })
        }
      </div>
    </>
  )
}