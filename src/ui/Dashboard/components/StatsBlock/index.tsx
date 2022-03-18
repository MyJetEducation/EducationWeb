import React from 'react';
import cn from 'classnames'
import s from './style.module.scss';

const StatsBlock = ({data}: any) => {

  return (
    <div className={s.wrap} id="step-3">
      <h5 className={s.title}>Stats</h5>

      <div className={s.statsItems}>
        <div className={cn(s.item, s.testScore)}>
          <p>{`${data !== null ? data?.taskScore : 0}%`}</p>
          <p>Test score</p>
        </div>
        <div className={s.item}>
          <p>{data !== null ? data.tasks : 0}</p>
          <p>Task</p>
        </div>
        <div className={s.item}>
          <p>{data !== null ? data.habit.index : 0}</p>
          <p>Habit</p>
        </div>
        <div className={s.item}>
          <p>{data !== null ? data.skillProgress : 0}%</p>
          <p>Skill</p>
        </div>
      </div>
    </div>
  )
}

export default StatsBlock;