import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LockedTutorial from '../components/Tutorials/LockedTutorial';
import StartedTutorial from '../components/Tutorials/StartedTutorial';
import { useStores } from '../hooks/useStores';
import { PrimaryButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { PageTitle, PrimaryTextSpan } from '../styles/TextsElements';

const Dashboard = observer(() => {
  const { t } = useTranslation();
  const { userProfileStore, tutorialStore } = useStores();

  const loadDashboard = async () => {
    try {
      const result = await tutorialStore.getTutorialsList();
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
          fontWeight={600}
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
        <FlexContainer background="#eee" width="300px">
          sidebar
        </FlexContainer>
        {/* Sidebar */}
      </FlexContainer>
    </FlexContainer>
  );
});

export default Dashboard;
