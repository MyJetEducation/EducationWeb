import React from 'react';

import s from './style.module.scss';

const STATS = [
  {
    id: 1,
    num: "0%",
    title: "Test score"
  },
  {
    id: 2,
    num: "0%",
    title: "Test score"
  },
  {
    id: 3,
    num: "0%",
    title: "Test score"
  },
  {
    id: 4,
    num: "0%",
    title: "Skill"
  },
]

const StatsBlock = () => {
  return (
    <div className={s.wrap}>
      <h5 className={s.title}>Stats</h5>
      <div className={s.statsItems}>
        {
          STATS.map((item: any) => (
            <div
              className={s.item}
              key={item.id}
            >
              <p>{item.num}</p>
              <p>{item.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default StatsBlock;