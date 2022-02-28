import React from 'react';

import s from './style.module.scss'
import ProgressBarCircular from "./components/ProgressBarCircular";

interface progressPageProps {
  percent: any
}

const ProgressPage: React.FC<progressPageProps> = ({percent}) => {
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Congratulations!</h1>
      <ProgressBarCircular
        percentage={percent}
        strokeWidth={8}
      />
      <p className={s.score}>
        Your Test score
      </p>
    </div>
  )
}

export default ProgressPage;