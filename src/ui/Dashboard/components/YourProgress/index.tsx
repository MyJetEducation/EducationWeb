import React from 'react';

import s from './style.module.scss';

const YourProgress = () => {
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Your Progress</h1>
      <div className={s.progressBlock}>
        <div className={s.habit}>
          <div className={s.line}/>
          <div className={s.progressLine}/>
          <div className={s.habitName}>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className={s.skill}>

        </div>
      </div>
    </div>
  )
}

export default YourProgress;