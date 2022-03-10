import React, {useEffect} from 'react';
import s from "./style.module.scss";
import AchievementsItem from "../../../AchievementsItem";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {achievementsSelector, getAchievementsAsync} from "../../../../store/achievementSlicer";

const ProfileAchievements = () => {
  const dispatch = useDispatch();
  const received = useSelector(achievementsSelector);
  useEffect(() => {
    dispatch(getAchievementsAsync())
  }, [])
  return (
    <div className={s.profileInfo}>
      <div className={s.profileTitle}>
        <h6>
          Achievements
        </h6>
        {
          received !== null ? <p>{`${received.length} of 49`}</p> : ""
        }
      </div>
      <div className={s.list}>
        {
          received !== null && received.map((item: any) => (
            <div
              key={item.id}
              className={s.item}
            >
              <AchievementsItem
                type={item.type}
                icon={item.icon}
                name={item.name}
                nameSize={"small"}
              />
            </div>

          ))
        }
      </div>
      <Link to={"/profile/achievements"}>Show all</Link>
    </div>
  )
}

export default ProfileAchievements;