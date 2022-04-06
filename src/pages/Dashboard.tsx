import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AchievementSB from '../components/SideBar/AchievementSB';
import ProgressSB from '../components/SideBar/ProgressSB';
import StatsSB from '../components/SideBar/StatsSB';
import LockedTutorial from '../components/Tutorials/LockedTutorial';
import StartedTutorial from '../components/Tutorials/StartedTutorial';
import { useStores } from '../hooks/useStores';
import { PrimaryButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { PageTitle, PrimaryTextSpan } from '../styles/TextsElements';
import TutorialProgressSB from "../components/SideBar/TutorialProgressSB";

const Dashboard = observer(() => {
  const { t } = useTranslation();
  const { userProfileStore, tutorialStore } = useStores();

  const loadDashboard = async () => {
    try {
      await userProfileStore.getDashboardProgress();
      await tutorialStore.getTutorialsList();
    } catch (error) {}
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <FlexContainer flex="1" flexDirection="column" padding="32px 20px">
      <FlexContainer flexDirection="column" marginBottom="24px">
        <PageTitle>
          {`${t('Welcome')}, ${userProfileStore.userAccount?.firstName}`}
        </PageTitle>
        <PrimaryTextSpan
          color="#777C85"
          fontSize="18px"
          fontWeight={500}
          lineHeight="28px"
        >
          {t('Now, you are ready to start you course')}
        </PrimaryTextSpan>
      </FlexContainer>

      <FlexContainer width="100%" justifyContent="space-between">
        {/* content */}
        <FlexContainer width="620px" flexDirection="column">
          {tutorialStore.tutorials?.map((item, i) =>
            item.started ? (
              <StartedTutorial
                key={item.tutorial}
                title={item.tutorial}
                number={i + 1}
              />
            ) : (
              <LockedTutorial
                key={item.tutorial}
                title={item.tutorial}
                number={i + 1}
              />
            )
          )}
        </FlexContainer>
        {/* content */}

        {/* Sidebar */}
        <FlexContainer flexDirection={'column'} width="300px">
          <TutorialProgressSB count={1} tutorial={[]}/>
          <StatsSB />
          <AchievementSB />
          <ProgressSB />
        </FlexContainer>
        {/* Sidebar */}
      </FlexContainer>
    </FlexContainer>
  );
});

export default Dashboard;
