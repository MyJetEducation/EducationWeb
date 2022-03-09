import React, {useEffect} from 'react';

import s from './style.module.scss';
import {Container} from "../components/Container";
import {useDispatch, useSelector} from "react-redux";
import {
  achievementsSelector,
  getAchievementsAsync
} from "../../store/achievementSlicer";
import AchievementsItem from "../AchievementsItem";
import {Link} from "react-router-dom";



const Profile = () => {
  const dispatch = useDispatch();
  const received = useSelector(achievementsSelector);
  useEffect(() => {
    dispatch(getAchievementsAsync())
  }, [])
  return (
    <div className={s.wrap}>
      <Container>
      <div className={s.inner}>
        <div className={s.leftSide}>
          <h5 className={s.title}>
            Profile
          </h5>
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
        </div>
        <div className={s.rightSide}>
          <h1>Profile</h1>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Profile;