import React, {useEffect, useMemo} from 'react';

import s from './style.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getFetchProgressDashboardAsync, userTaskScoreSelector} from "../../../../store/allProgressDashboard";

const HABIT_LIST = [
  {
    id: 1,
    title: "The habit to keep track of income / expenses"
  },
  {
    id: 2,
    title: "The habit of budgeting"
  },
  {
    id: 3,
    title: "The habit of making a financial plan"
  },
  {
    id: 4,
    title: "The habit of exploring passive income opportunities"
  },
  {
    id: 5,
    title: "The habit of forming savings"
  },
  {
    id: 6,
    title: "The habit of keeping a diary"
  },
  {
    id: 7,
    title: "The habit of investing"
  },
  {
    id: 8,
    title: "The habit of budgeting for all events"
  },
  {
    id: 9,
    title: "The habit of analyzing events around you"
  },
]
const SKILL_LIST = [
  {
    id: 1,
    title: "Skill 1"
  },
  {
    id: 2,
    title: "Skill 2"
  },
  {
    id: 3,
    title: "Skill 3"
  },
  {
    id: 4,
    title: "Skill 4"
  },
  {
    id: 5,
    title: "Skill 5"
  },
  {
    id: 6,
    title: "Skill 6"
  },
  {
    id: 7,
    title: "Skill 7"
  },
  {
    id: 8,
    title: "Skill 8"
  },
  {
    id: 9,
    title: "Skill 9"
  },
]

const YourProgress = () => {

  const dispatch = useDispatch();
  const data = useSelector(userTaskScoreSelector);
  useEffect(() => {
    dispatch(getFetchProgressDashboardAsync());
  }, [])
  
  const styleProgressHabit = useMemo(() => ( data !== null ? {
    width: `calc(${data.habit.progress}%)`
  }: {}), [data]);

  const styleProgressSkill = useMemo(() => ( data !== null ? {
    width: `calc(${data.skill.progress}%)`
  } : {}), [data]);
  
  console.log("####: data", data);

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Your Progress</h1>
      <div className={s.progressBlock}>
        <div className={s.habit}>
          <div className={s.line}/>
          <div
            style={styleProgressHabit}
            className={s.progressLine}
          />
          <div className={s.habitName}>
            <p>
              {
                data !== null ? data.habit.index !== 0 ? HABIT_LIST[data.habit.index - 1].title : "Habit name" : ""
              }
            </p>
            <p>
              {
                data !== null  ? `${data.habit.progress}%` : ""
              }
            </p>
          </div>
        </div>
        <div className={s.habit}>
          <div className={s.line}/>
          <div
            style={styleProgressSkill}
            className={s.progressLine}
          />
          <div className={s.habitName}>
            <p>
              {
                data !== null ? data.skill.index !== 0 ?  SKILL_LIST[data.skill.index - 1].title : "Skill name" : ""
              }
            </p>
            <p>
              {
                data !== null ? `${data.skill.progress}%` : 0
              }
            </p>
          </div>
        </div>
        <div className={s.skill}>

        </div>
      </div>
    </div>
  )
}

export default YourProgress;