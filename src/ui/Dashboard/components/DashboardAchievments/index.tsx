import React, {useEffect} from 'react';

import s from './style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
  achievementsSelector,
  getAchievementsAsync,
} from "../../../../store/achievementSlicer";
import AchievementsItem from "../../../AchievementsItem";


const DashboardAchievement = () => {
  const dispatch = useDispatch();
  const received = useSelector(achievementsSelector);

  useEffect(() => {
    dispatch(getAchievementsAsync())
  }, [])

  return (
    <div className={s.wrap} id="step-2">

      <h6 className={s.title}>
        Achievements
      </h6>
      <div className={s.inner}>
        {
          received !== null && received.map((item: any, index: number) => {
            if (index === 0 || index === 1 || index === 2) {
              return (
                <div className={s.item} key={item.id}>
                  <AchievementsItem
                    nameSize={"small"}
                    type={item.type}
                    icon={item.icon}
                    name={item.name}
                  />
                </div>

              )
            }
          })
        }
      </div>
    </div>
  )
}

export default DashboardAchievement;