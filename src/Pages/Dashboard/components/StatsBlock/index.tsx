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
  data: any
}

// testScore={data?.units[0]?.testScore}
// tasks={data?.units[0]?.tasks.length}
// skill={data?.totalProgress.skill.index}
// habit={data?.totalProgress.habit.index}

const StatsBlock: React.FC<statsBlockProps> = ({data}) => {
  console.log("####: data", data);
  return (
    <div className={s.wrap}>
      <h5 className={s.title}>Stats</h5>
      <div className={s.statsItems}>

        <div
          className={cn(s.item, s.testScore)}

        >
          <p>{`${20}%`}</p>
          <p>Test score</p>
        </div>

        <div
          className={s.item}

        >
          <p>{`${10}`}</p>
          <p>Tasks</p>
        </div>

        <div
          className={s.item}

        >
          <p>{1}</p>
          <p>Habbit</p>
        </div>

        <div
          className={s.item}

        >
          <p>{1}</p>
          <p>Skill</p>
        </div>

      </div>
    </div>
  )
}

export default StatsBlock;