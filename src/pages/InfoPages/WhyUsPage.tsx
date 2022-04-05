import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../routing/Pages';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryLink, PrimaryTextSpan } from '../../styles/TextsElements';

const WhyUsPage = () => {
  const { t } = useTranslation();

  return (
    <FlexContainer padding="58px 0" flex="1" flexDirection="column">
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        marginBottom="36px"
      >
        <PrimaryTextSpan
          textAlign="center"
          color="#000"
          fontWeight={500}
          fontSize="40px"
          lineHeight="48px"
          marginBottom="36px"
        >
          {t('Why Us?')}
        </PrimaryTextSpan>

        <PrimaryTextSpan
          color="#000"
          fontSize="18px"
          lineHeight="28px"
          fontWeight={500}
          textAlign="center"
        >
          Основатель проекта имеет историю рабочего взаимодействия с людьми из
          разных стран, которые зачастую ищут ответы на вопросы:
        </PrimaryTextSpan>
      </FlexContainer>

      <FlexContainer justifyContent="center" width="100%">
        <PrimaryLink to={Page.SIGN_UP}>{t('Let`s start')}</PrimaryLink>
      </FlexContainer>
    </FlexContainer>
  );
};

export default WhyUsPage;
