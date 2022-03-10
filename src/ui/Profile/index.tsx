import React from 'react';
import {Container} from "../components/Container";
import ProfileAchievements from "./components/ProfileAchievements";
import s from './style.module.scss';
import LearningStats from "./components/LearningStats";
import ProfileYourProgress from "./components/ProfileYourProgress";
import SkillsProgress from "./components/SkillsProgress";
import TabsMenuProfile from "./components/TabsMenuProfile";

const Profile = () => {
  return (
    <div className={s.wrap}>
      <Container>
      <div className={s.inner}>
        <div className={s.leftSide}>
          <h5 className={s.title}>
            Profile
          </h5>
          <LearningStats/>
          <ProfileAchievements/>
          <ProfileYourProgress/>
          <SkillsProgress/>
        </div>
        <div className={s.rightSide}>
          <TabsMenuProfile/>

        </div>
      </div>
      </Container>
    </div>
  )
}

export default Profile;