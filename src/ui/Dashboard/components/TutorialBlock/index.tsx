import React, {useEffect, useMemo} from 'react';
import cn from 'classnames';
import unitIcon from './assets/units.svg';
import durationIcon from './assets/durations.svg';
import videoIcon from './assets/videos.svg';
import testIcon from './assets/tests.svg';

import {tutorialBlockProps} from "../../../../domain/Dashboard/tutorialBlock";

import Units from "../Units";
import s from './style.module.scss';
import {
  TUT_1_LESSON_CONTENT_UNIT_1,
  TUT_1_LESSON_CONTENT_UNIT_2,
  TUT_1_LESSON_CONTENT_UNIT_3,
  TUT_1_LESSON_CONTENT_UNIT_4,
  TUT_1_LESSON_CONTENT_UNIT_5,
  TUT_2_LESSON_CONTENT_UNIT_1,
  TUT_2_LESSON_CONTENT_UNIT_2,
  TUT_2_LESSON_CONTENT_UNIT_3,
  TUT_2_LESSON_CONTENT_UNIT_4,
  TUT_2_LESSON_CONTENT_UNIT_5,
} from "../../../Lesson/constans";
import {
  currentDataDashboardSelector,
  getDashboardAsync
} from "../../../../store/dashboardSlicer";
import {useDispatch, useSelector} from "react-redux";

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
const unitName = (unit: any) => [
  {
    id: 1,
    name: "Unit 1. Your income",
    unitList: Object.values(unit[0]).map((item: any) => item.title),
    unitIcon: Object.values(unit[0]).map((item: any) => item.icon),
    unitTasks: Object.values(unit[0]).map((item: any) => item.description)
  },
  {
    id: 2,
    name: "Unit 2. Secrets for Spending Your Money Wisely",
    unitList: Object.values(unit[1]).map((item: any) => item.title),
    unitIcon: Object.values(unit[1]).map((item: any) => item.icon),
    unitTasks: Object.values(unit[1]).map((item: any) => item.description)
  },
  {
    id: 3,
    name: "Unit 3. Hidden expenses and lost profits",
    unitList: Object.values(unit[2]).map((item: any) => item.title),
    unitIcon: Object.values(unit[2]).map((item: any) => item.icon),
    unitTasks: Object.values(unit[2]).map((item: any) => item.description)
  },
  {
    id: 4,
    name: "Unit 4. Salary - make sure that it is enough.",
    unitList: Object.values(unit[3]).map((item: any) => item.title),
    unitIcon: Object.values(unit[3]).map((item: any) => item.icon),
    unitTasks: Object.values(unit[3]).map((item: any) => item.description)
  },
  {
    id: 5,
    name: "Unit 5. Modern tools for budget planning in three steps",
    unitList: Object.values(unit[4]).map((item: any) => item.title),
    unitIcon: Object.values(unit[4]).map((item: any) => item.icon),
    unitTasks: Object.values(unit[4]).map((item: any) => item.description)
  }
]

const UNIT = {
  "PersonalFinance": [
    TUT_1_LESSON_CONTENT_UNIT_1,
    TUT_1_LESSON_CONTENT_UNIT_2,
    TUT_1_LESSON_CONTENT_UNIT_3,
    TUT_1_LESSON_CONTENT_UNIT_4,
    TUT_1_LESSON_CONTENT_UNIT_5,
  ],
  "BehavioralFinance": [
    TUT_2_LESSON_CONTENT_UNIT_1,
    TUT_2_LESSON_CONTENT_UNIT_2,
    TUT_2_LESSON_CONTENT_UNIT_3,
    TUT_2_LESSON_CONTENT_UNIT_4,
    TUT_2_LESSON_CONTENT_UNIT_5,
  ],
};

const TutorialBlock: React.FC<tutorialBlockProps> = ({ tutorialName, show, index, countRetry}) => {
  const unitsScore = useSelector(currentDataDashboardSelector(index + 1));
  const dispatch = useDispatch();
  const UNIT_NAME = useMemo(() => {
    if (!UNIT[tutorialName as keyof typeof UNIT]) {
      return []
    }
    return unitName(UNIT[tutorialName as keyof typeof UNIT])
  }, [tutorialName]);
  const name = useMemo(() => {
    switch (tutorialName) {
      case "PersonalFinance":
        return "personal";
      case "BehavioralFinance":
        return "behavioral"
      case "FinancialServices":
        return "financial"
      case "FinanceMarkets":
        return "finance"
      case "HealthAndFinance":
        return "health"
      case "PsychologyAndFinance":
        return "psychology"
      case "FinanceSecurity":
        return "security"
      case "TimeManagement":
        return "timemanagement"
      case "Economics":
        return "economics"
      default:
        return ""
    }
  }, [tutorialName]);
  useEffect(() => {
    if (show) {
      dispatch(getDashboardAsync(index + 1));
    }

  }, [show]);
  if (!unitsScore) {
    return <div className={s.loadingBlock}>{`${index + 1}. ${tutorialName}`}</div>
  }

  return (
    <div
      className={s.tutorialBlock}
      id={index === 0 ? "step-4" : ""}
    >
      <div className={cn(s.wrap, {
        [s.variant]: !show
      })}>
        <h3 className={s.title}>
          {`${index + 1}. ${tutorialName}`}
        </h3>
        {
          show && (
            <>
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
            </>
          )

        }
      </div>
      <div className={cn(s.tasksBlock, {
        [s.finished]: !show
      })}>
        {
          UNIT_NAME.map((item, index) => {
            let isShowActiveTask = false;
            let scoreList = [];
            let isSuccess = false;
            let taskScore = null;
            if (unitsScore) {
              scoreList = unitsScore.units[index]?.tasks
              taskScore = unitsScore.units[index]?.taskScore
              if (index !== 0) {
                if (unitsScore.units[index - 1]?.taskScore >= 80 && (!unitsScore.units[index + 1]?.taskScore || unitsScore.units[index + 1]?.taskScore < 80)) {
                  if (unitsScore.units[index - 1]?.finished ) {
                    isShowActiveTask = true
                  }

                }
              }
              if (unitsScore.units[index]?.taskScore >= 80) {
                isSuccess = true
                isShowActiveTask = false
              } else if (index === 0) {
                isShowActiveTask = true
              }
            }
            return (
              <Units
                key={index}
                isSuccess={isSuccess}
                unitScore={taskScore}
                isRetry={unitsScore.units[index]}
                hasProgress={unitsScore.units[index].hasProgress}
                isShowActiveTask={isShowActiveTask}
                unitList={item.unitList}
                unitIcon={item.unitIcon}
                scoreList={scoreList}
                unitNumber={index}
                title={UNIT_NAME[index].name}
                btnName={taskScore > 0 ? `Сontinue Unit ${index + 1}` : `Start Unit ${index + 1}`}
                tutorialName={tutorialName}
                urlForTutorial={name}
                countRetry={countRetry}
                index={index}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default React.memo(TutorialBlock);