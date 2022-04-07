import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
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
import TutorialProgressSB from '../components/SideBar/TutorialProgressSB';
import LoaderForComponent from '../components/Preloader/LoaderForComponent';
import TutorialsList from '../components/Tutorials/TutorialsList';

const Dashboard = observer(() => {
  const { t } = useTranslation();
  const { userProfileStore, tutorialStore } = useStores();

  const [isTutorialsLoading, setTutorialLoading] = useState(false);

  const loadDashboard = async () => {
    setTutorialLoading(true);
    try {
      await userProfileStore.getDashboardProgress();
      await tutorialStore.getTutorialsList();
      setTutorialLoading(false);
    } catch (error) {
      setTutorialLoading(false);
    }
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
        <FlexContainer
          width="620px"
          flexDirection="column"
          marginRight="20px"
          flex="1"
        >
          <TutorialsList isLoading={isTutorialsLoading} />
        </FlexContainer>
        {/* content */}

        {/* Sidebar */}
        <FlexContainer flexDirection={'column'} width="300px">
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
