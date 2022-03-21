import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../components/Container";
import TutorialBlock from "./components/TutorialBlock";
import {dataTutorialsSelector, getTutorialsAsync} from "../../store/tutorialsSlicer";
import AchievementsBlock from "./components/DashboardAchievments";
import {getUserInfoAsync, userInfoSelector} from "../../store/userInfoSlicer";
import {dataCountRetrySelector, getCountRetryAsync} from "../../store/countRetryAttempts";
import StatsComponent from "./components/StatsComponent";
import s from './style.module.scss';

export const DashBoard = () => {
  const countRetry = useSelector(dataCountRetrySelector);
  const tutorials = useSelector(dataTutorialsSelector);
  const userName = useSelector(userInfoSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTutorialsAsync());
    dispatch(getUserInfoAsync());
    dispatch(getCountRetryAsync());
  }, []);
  return (
    <div className={s.wrap}>
      {
        (tutorials !== null && countRetry !== null && userName !== null) ? (
          <Container>
            <h1 className={s.title} id="title">
              {`Welcome, ${userName.firstName}`}
            </h1>
            <p className={s.subtitle}>
              Now, you are ready to start you course
            </p>
            <div className={s.inner}>
              <div className={s.leftSide}>
                {
                  tutorials.map((item: any, index: number) => (
                    <TutorialBlock
                      key={index}
                      tutorialName={item.tutorial}
                      countRetry={countRetry}
                      index={index}
                      show={item.show}
                    />
                  ))
                }
              </div>
              <div className={s.rightSide}>
                <StatsComponent/>
                <AchievementsBlock/>
              </div>
            </div>
          </Container>
        ) : (
          <div>...Loading</div>
        )
      }
    </div>
  )
}
