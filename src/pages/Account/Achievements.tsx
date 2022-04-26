import React, { useEffect, useMemo, useState } from 'react';
import AccountSettingsContainer from '../../containers/AccountSettingsContainer';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../hooks/useStores';
import { AchievementsEnum } from '../../enums/AchievementsEnum';
import AchievementItem from '../../components/AchievementItem';
import { observer } from 'mobx-react-lite';
import LoaderForComponent from '../../components/Preloader/LoaderForComponent';

const Achievements = observer(() => {
  const { t } = useTranslation();
  const { userProfileStore } = useStores();

  const [isLoading, setIsLoading] = useState(false);

  const getAchievements = async () => {
    setIsLoading(true);
    try {
      const result = await userProfileStore.getAchievement();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAchievements();
  }, []);

  return (
    <AccountSettingsContainer pageTitle="Achievements">
      <FlexContainer flexDirection="column" maxWidth="620px" width="100%">
        <FlexContainer flexDirection="column">
          <FlexContainer alignItems="center" width="100%" marginBottom="24px">
            <PrimaryTextSpan whiteSpace="nowrap" marginRight="6px">
              {t('Received')}
            </PrimaryTextSpan>
            <PrimaryTextSpan whiteSpace="nowrap" marginRight="10px">
              {userProfileStore.totalActiveAchievementsCount}
            </PrimaryTextSpan>
            <FlexContainer
              width="100%"
              height="1px"
              backgroundColor={'rgba(168,176,186,0.3)'}
            />
          </FlexContainer>

          <FlexContainer
            alignItems="flex-start"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {userProfileStore.userAchievements.map((el: AchievementsEnum) => (
              <AchievementItem
                key={el}
                width="156px"
                textAlign="left"
                fontSize="18px"
                lineHeight="28px"
                fontWeight={600}
                isActive={true}
                color="#000"
                marginBottom="80px"
                name={el}
                description={el}
              />
            ))}
          </FlexContainer>
        </FlexContainer>

        <FlexContainer flexDirection="column">
          <FlexContainer width="100%" alignItems="center" marginBottom="24px">
            <PrimaryTextSpan whiteSpace="nowrap" marginRight="6px">
              {t('In progress')}
            </PrimaryTextSpan>
            <PrimaryTextSpan whiteSpace="nowrap" marginRight="10px">
              {userProfileStore.totalDeActiveAchievementsCount}
            </PrimaryTextSpan>
            <FlexContainer
              width="100%"
              height="1px"
              backgroundColor={'rgba(168,176,186,0.3)'}
            />
          </FlexContainer>

          <FlexContainer
            alignItems="flex-start"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {userProfileStore.unReceivedAchievements.map(
              (el: AchievementsEnum) => (
                <AchievementItem
                  key={el}
                  width="156px"
                  textAlign="left"
                  fontSize="18px"
                  lineHeight="28px"
                  fontWeight={600}
                  isActive={false}
                  name={el}
                  description={el}
                  marginBottom="80px"
                />
              )
            )}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <LoaderForComponent isLoading={isLoading} />
    </AccountSettingsContainer>
  );
});

export default Achievements;
