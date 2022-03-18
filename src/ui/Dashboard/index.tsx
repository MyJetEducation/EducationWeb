import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../components/Container";
import {TutorialBlock} from "./components/TutorialBlock";
import StatsBlock from "./components/StatsBlock";
import {dataTutorialsSelector, getTutorialsAsync} from "../../store/tutorialsSlicer";
import YourProgress from "./components/YourProgress";
import AchievementsBlock from "./components/DashboardAchievments";
import {getUserInfoAsync, userInfoSelector} from "../../store/userInfoSlicer";
import {getStatsAsync, userTaskScoreSelector} from "../../store/statsBlock";
import {dataCountRetrySelector, getCountRetryAsync} from "../../store/countRetryAttempts";
import s from './style.module.scss';

export const DashBoard = () => {
  const statsData = useSelector(userTaskScoreSelector);
  const countRetry = useSelector(dataCountRetrySelector);
  const tutorials = useSelector(dataTutorialsSelector);
  const userName = useSelector(userInfoSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatsAsync());
    dispatch(getTutorialsAsync())
    dispatch(getUserInfoAsync())
    dispatch(getCountRetryAsync());
  }, []);
  return (
    <div className={s.wrap}>
      <Container>
        <h1 className={s.title} id="title">
          {userName !== null ? `Welcome, ${userName.firstName}` : null}
        </h1>
        <p className={s.subtitle}>
          Now, you are ready to start you course
        </p>
        <div className={s.inner}>
          <div className={s.leftSide}>
            {
              tutorials !== null && tutorials.map((item: any, index: number) => (
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
            <StatsBlock
              data={statsData}
            />
            <YourProgress
              data={statsData}
            />
            <AchievementsBlock/>
          </div>
        </div>
      </Container>
    </div>
  )
}
