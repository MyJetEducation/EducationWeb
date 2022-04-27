import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AchievementSB from '../components/SideBar/AchievementSB';
import ProgressSB from '../components/SideBar/ProgressSB';
import StatsSB from '../components/SideBar/StatsSB';
import { useStores } from '../hooks/useStores';
import { FlexContainer } from '../styles/FlexContainer';
import { PageTitle, PrimaryTextSpan } from '../styles/TextsElements';
import TutorialsList from '../components/Tutorials/TutorialsList';
import { CONTENT_WIDTH } from '../constants/global';
import CenterContainer from '../containers/CenterContainer';

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
    <CenterContainer padding="72px 0">
      <FlexContainer flexDirection="column" marginBottom="24px" width="100%">
        <PageTitle>
          {`${t('Welcome')}, ${userProfileStore.userAccount?.firstName || ''}`}
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
    </CenterContainer>
  );
});

export default Dashboard;
