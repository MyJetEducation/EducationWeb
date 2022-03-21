import React from 'react';
import cn from 'classnames'
import s from './style.module.scss';

const StatsBlock = ({data}: any) => {
  return (
    <div className={s.wrap} id="step-3">
      <h5 className={s.title}>Stats</h5>
      <div className={s.statsItems}>
        <div className={cn(s.item, s.testScore)}>
          <p>{`${data.taskScore}%`}</p>
          <p>Test score</p>
        </div>
        <div className={s.item}>
          <p>{data.tasks}</p>
          <p>Task</p>
        </div>
        <div className={s.item}>
          <p>{data.habit.index}</p>
          <p>Habit</p>
        </div>
        <div className={s.item}>
          <p>{data.skillProgress}%</p>
          <p>Skill</p>
        </div>
      </div>
    </div>
  )
}

export default StatsBlock;