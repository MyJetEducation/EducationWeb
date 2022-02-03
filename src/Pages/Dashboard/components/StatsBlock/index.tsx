import React from 'react';
import cn from 'classnames'

import s from './style.module.scss';

const STATS = [
  {
    id: 1,
    num: "0%",
    title: "Test score"
  },
  {
    id: 2,
    num: "0",
    title: "Tasks"
  },
  {
    id: 3,
    num: "0",
    title: "Habbit"
  },
  {
    id: 4,
    num: "0",
    title: "Skill"
  },
]

interface statsBlockProps {
  testScore: number,
  tasks: number
}

const StatsBlock: React.FC<statsBlockProps> = ({testScore, tasks}) => {
  console.log("####: testScore", testScore);
  return (
    <div className={s.wrap}>
      <h5 className={s.title}>Stats</h5>
      <div className={s.statsItems}>

        <div
          className={cn(s.item, s.testScore)}

        >
          <p>{`${testScore}%`}</p>
          <p>Test score</p>
        </div>

        <div
          className={s.item}

        >
          <p>{`${tasks}`}</p>
          <p>Tasks</p>
        </div>

        <div
          className={s.item}

        >
          <p>{testScore}</p>
          <p>Habbit</p>
        </div>

        <div
          className={s.item}

        >
          <p>{testScore}</p>
          <p>Skill</p>
        </div>

      </div>
    </div>
  )
}

export default StatsBlock;