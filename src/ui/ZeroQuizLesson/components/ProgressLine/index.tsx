import React from 'react';

import s from './style.module.scss';

const ProgressLine = () => {
  return (
    <div className={s.wrap}>
      <h6 className={s.title}>Progress Onboarding</h6>
      <div className={s.progressBlock}>
        <div className={s.freeLine}></div>
        <div className={s.progressLine}></div>
      </div>

    </div>
  )
}

export default ProgressLine;