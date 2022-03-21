import React, {useMemo} from 'react';

import s from './style.module.scss';

import {HABIT_LIST} from "../../../Lesson/constans";

const YourProgress = ({data}: any) => {

  const styleProgressHabit = useMemo(() => ({
    width: `calc(${data.habit.progress}%)`
  }), [data]);

  const styleProgressSkill = useMemo(() => ({
    width: `calc(${data.skillProgress}%)`
  }), [data]);

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
                data.habit.index !== 0 ? HABIT_LIST[data.habit.index - 1].title : "Habit name"
              }
            </p>
            <p>{`${data.habit.progress}%`}</p>
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
            <p>{`${data.skillProgress}%`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourProgress;