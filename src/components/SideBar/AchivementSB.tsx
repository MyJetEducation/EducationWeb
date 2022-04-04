import React from 'react';

import {FlexContainer} from '../../styles/FlexContainer';
import {PrimaryTextParagraph} from "../../styles/TextsElements";
import {useTranslation} from "react-i18next";

const AchievementSB = () => {
  const { t } = useTranslation();
  return (
    <FlexContainer
      width={"100%"}
      height={"169px"}
      borderRadius={"32px"}
      border={"2px solid #E0E5EB"}
      padding={"21px 16px 16px 32px"}
      flexDirection={"column"}
      marginBottom={"20px"}
    >
      <PrimaryTextParagraph
        fontSize={"18px"}
        lineHeight={"156%"}
        fontWeight={"bold"}
        color={"#000"}
        marginBottom={"16px"}
      >
        {t('Achievements')}
      </PrimaryTextParagraph>
    </FlexContainer>
  )
}

export default AchievementSB;