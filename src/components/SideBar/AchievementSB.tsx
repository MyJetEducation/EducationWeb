import React, { useEffect, useMemo, useState } from 'react';

import { FlexContainer } from '../../styles/FlexContainer';
import {
  PrimaryTextParagraph,
  PrimaryTextSpan,
} from '../../styles/TextsElements';
import { useTranslation } from 'react-i18next';
import AchievementItem from '../AchievementItem';
import { AchievementsEnum } from '../../enums/AchievementsEnum';
import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import LoaderForComponent from '../Preloader/LoaderForComponent';

const AchievementSB = observer(() => {
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

  const achievementList = useMemo(() => {
    const list = userProfileStore.userAchievements.slice(0, 3);
    return list;
  }, [userProfileStore.userAchievements]);

  useEffect(() => {
    getAchievements();
  }, []);

  return (
    <FlexContainer
      width="100%"
      borderRadius="32px"
      border="2px solid #E0E5EB"
      padding="20px 32px"
      flexDirection="column"
      marginBottom="20px"
    >
      <FlexContainer
        alignItems="center"
        justifyContent="space-between"
        marginBottom="16px"
      >
        <PrimaryTextParagraph
          fontSize="18px"
          lineHeight="156%"
          fontWeight={600}
          color="#000"
          marginRight="12px"
        >
          {t('Achievements')}
        </PrimaryTextParagraph>
        <PrimaryTextSpan color="#A8B0BA" fontSize="18px" fontWeight={600}>{`${
          userProfileStore.totalActiveAchievementsCount
        } ${t('of')} ${
          userProfileStore.totalAchievementsCount
        }`}</PrimaryTextSpan>
      </FlexContainer>

      <FlexContainer
        alignItems="flex-start"
        justifyContent={
          achievementList.length < 3 ? 'flex-start' : 'space-between'
        }
      >
        {achievementList.map((el: AchievementsEnum) => (
          <AchievementItem
            marginRight={achievementList.length < 3 ? '12px' : ''}
            key={el}
            isActive={true}
            name={el}
          />
        ))}
      </FlexContainer>

      <LoaderForComponent isLoading={isLoading} />
    </FlexContainer>
  );
});

export default AchievementSB;
