import React, {useEffect} from 'react';

import s from './style.module.scss'
import {Container} from "../components/Container";
import {useDispatch, useSelector} from "react-redux";
import {
  achievementsSelector,
  getAchievementsAsync,
  isLoadingAchievementsSelector,
  unAchievementsSelector
} from "../../store/achievementSlicer";
import AchievementsItem from "../AchievementsItem";

const AchievementsPage = () => {
  const dispatch = useDispatch();
  const received = useSelector(achievementsSelector);
  const isLoading = useSelector(isLoadingAchievementsSelector);
  const unreceived = useSelector(unAchievementsSelector);
  useEffect(() => {
    dispatch(getAchievementsAsync())
  }, [])

  return (
    <Container>
    <div className={s.wrap}>

      {
        received === null || unreceived === null ? <div>...Loading</div> : (
        <>
            <h1 className={s.title}>Achievements</h1>
            <div className={s.received}>
              <div className={s.titleReceived}>
                <p>
                  {`Received ${received.length}`}
                </p>
                <p className={s.line}/>
              </div>
              <div className={s.achievementsList}>
                {
                  received.map((item: any) => (
                    <AchievementsItem
                      key={item.id}
                      nameSize={"big"}
                      type={item.type}
                      name={item.name}
                      icon={item.icon}
                    />
                  ))
                }
              </div>
            </div>
            <div className={s.unreceived}>
              <div className={s.titleUnReceived}>
                <p>
                  {`Available ${unreceived.length}`}
                </p>
                <p className={s.line}/>
              </div>
              <div className={s.achievementsUnList}>
                {
                  unreceived.map((item: any) => (
                    <AchievementsItem
                      key={item.id}
                      nameSize={"big"}
                      name={item.name}
                      icon={item.icon}
                    />
                  ))
                }
              </div>
            </div>
        </>
        )
      }
    </div>
    </Container>
  )
}

export default AchievementsPage;