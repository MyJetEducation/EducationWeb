import React from 'react';

import unitIcon from './assets/units.svg';
import durationIcon from './assets/durations.svg';
import videoIcon from './assets/videos.svg';
import testIcon from './assets/tests.svg';

import s from './style.module.scss';

const MENU_INFO = [
  {
    id: 1,
    icon: unitIcon,
    title: "5 units"
  },
  {
    id: 2,
    icon: durationIcon,
    title: "Duration: 2h 30m"
  },
  {
    id: 3,
    icon: videoIcon,
    title: "5 videos"
  },
  {
    id: 4,
    icon: testIcon,
    title: "10 tests"
  },
]

const DisciplineBlock = () => {
  return (
    <div className={s.wrap}>
      <h3 className={s.title}>
        1. Personal Finance
      </h3>
      <p className={s.description}>
        This Discipline will teach how to manage your finance. Help you to build successful strategy to grow up your earnings...
      </p>
      <div className={s.info}>
        {
          MENU_INFO.map((item: any) => (
            <div
              className={s.infoItem}
              key={item.id}
            >
              <img className={s.icon} src={item.icon} alt="icon"/>
              <p className={s.infoDescr}>
                {item.title}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DisciplineBlock;