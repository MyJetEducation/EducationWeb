import React from 'react';

import unitIcon from './assets/units.svg';
import durationIcon from './assets/durations.svg';
import videoIcon from './assets/videos.svg';
import testIcon from './assets/tests.svg';

import s from './style.module.scss';
import {LESSON_CONTENT_UNIT_1, LESSON_CONTENT_UNIT_2} from "../../../Сourse/Lesson/constans";
import Units from "../Units";

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

interface tutorialBlockProps {
  units: any[]
}

export const TutorialBlock: React.FC<tutorialBlockProps> = ({units}) => {
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
        <Units
          unitList={Object.values(LESSON_CONTENT_UNIT_1).map(item => item.title)}
          scoreList={units[0].tasks}
          title={"Unit 1. Your income"}
          btnName={"Start Unit 1"}
          urlRelocate={"/unit1/1"}
        />
        <Units
          unitList={Object.values(LESSON_CONTENT_UNIT_2).map(item => item.title)}
          scoreList={units[1]?.tasks}
          title={"Unit 2. Secrets for Spending Your Money Wisely"}
          btnName={"Start Unit 2"}
          urlRelocate={"/unit2/1"}
        />
        <Units
          unitList={Object.values(LESSON_CONTENT_UNIT_1).map(item => item.title)}
          scoreList={units[0].tasks}
          title={"Unit 3. Hidden expenses and lost profits"}
          btnName={"Start Unit 3"}
          urlRelocate={"/unit3/1"}
        />
        <Units
          unitList={Object.values(LESSON_CONTENT_UNIT_2).map(item => item.title)}
          scoreList={units[0].tasks}
          title={"Unit 4. Salary - make sure that it is enough."}
          btnName={"Start Unit 4"}
          urlRelocate={"/unit4/1"}
        />
        <Units
          unitList={Object.values(LESSON_CONTENT_UNIT_2).map(item => item.title)}
          scoreList={units[0].tasks}
          title={"Unit 5. Modern tools for budget planning in three steps"}
          btnName={"Start Unit 5"}
          urlRelocate={"/unit5/1"}
        />
      </div>
    </>
  )
}