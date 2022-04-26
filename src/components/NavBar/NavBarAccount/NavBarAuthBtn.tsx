import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../../routing/Pages';
import { FlexContainer } from '../../../styles/FlexContainer';
import { TextLink, BorderLink } from '../../../styles/TextsElements';

const NavBarAuthBtn = () => {
  const { t } = useTranslation();
  return (
    <>
      <FlexContainer marginRight="16px">
        <TextLink to={Page.SIGN_IN}>{t('Log In')}</TextLink>
      </FlexContainer>
      <BorderLink to={Page.SIGN_UP}>{t('Sign Up')}</BorderLink>
    </>
  );
};

export default NavBarAuthBtn;
