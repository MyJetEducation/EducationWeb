import React from 'react';
import AccountSettingsContainer from '../../containers/AccountSettingsContainer';
import LearningStatsProfile from "../../components/ProfileItem/LearningStatsProfile";
import AchievementsProfile from "../../components/ProfileItem/AchievementsProfile";
import YourProgressProfile from "../../components/ProfileItem/YourProgressProfile";
import SkillsProgressProfile from "../../components/ProfileItem/SkillsProgressProfile";

const Profile = () => {

  return (
    <AccountSettingsContainer pageTitle="Profile">

      {/*LearningStats block*/}
      <LearningStatsProfile/>
      {/*LearningStats block*/}

      {/*Achievements Block*/}
      <AchievementsProfile/>
      {/*Achievements Block*/}

      {/*Your Progress Block*/}
      <YourProgressProfile/>
      {/*Your Progress Block*/}

      {/*Skills Progress Block*/}
      <SkillsProgressProfile/>
      {/*Skills Progress Block*/}

    </AccountSettingsContainer>
  );
};

export default Profile;