import React, {useEffect, useMemo} from 'react';

import s from './style.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getStatsAsync, userTaskScoreSelector} from "../../../../store/statsBlock";

import {HABIT_LIST} from "../../../Lesson/constans";
import {SKILL_LIST} from '../../../Lesson/constans';


const YourProgress = () => {

  const dispatch = useDispatch();
  const data = useSelector(userTaskScoreSelector);
  useEffect(() => {
    dispatch(getStatsAsync());
  }, [])
  
  const styleProgressHabit = useMemo(() => ( data !== null ? {
    width: `calc(${data.habit.progress}%)`
  }: {}), [data]);

  const styleProgressSkill = useMemo(() => ( data !== null ? {
    width: `calc(${data.skillProgress}%)`
  } : {}), [data]);

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
            <p>Skill Progress</p>
            <p>
              {
                data !== null ? `${data.skillProgress}%` : 0
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