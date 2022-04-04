import React from 'react';

import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextParagraph } from '../../styles/TextsElements';
import { useTranslation } from 'react-i18next';
import AchieventItem from '../AchieventItem';
import { AchievementsEnum } from '../../enums/AchievementsEnum';

const AchievementSB = () => {
  const { t } = useTranslation();
  return (
    <FlexContainer
      width="100%"
      borderRadius="32px"
      border="2px solid #E0E5EB"
      padding="20px 32px"
      flexDirection="column"
      marginBottom="20px"
    >
      <PrimaryTextParagraph
        fontSize="18px"
        lineHeight="156%"
        fontWeight="bold"
        color="#000"
        marginBottom="16px"
      >
        {t('Achievements')}
      </PrimaryTextParagraph>

      <FlexContainer alignItems="flex-start" justifyContent="space-between">
        <AchieventItem isActive={true} name={AchievementsEnum.TakeYourTime} />
        <AchieventItem isActive={true} name={AchievementsEnum.Spender} />
        <AchieventItem isActive={true} name={AchievementsEnum.AllTheKingsMen} />
      </FlexContainer>
    </FlexContainer>
  );
};

export default AchievementSB;
