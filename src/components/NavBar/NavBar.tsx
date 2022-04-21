import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { CONTENT_WIDTH } from '../../constants/global';
import { ColorVarsEnum } from '../../enums/ColorVarsEnum';
import Page from '../../routing/Pages';
import { FlexContainer } from '../../styles/FlexContainer';
import Logo from './Logo';
import NavBarAccount from './NavBarAccount/NavBarAccount';
import NavBarNavigation from './NavBarNavigation';

const NavBar = () => {
  const isAuthPages = useRouteMatch([
    Page.SIGN_IN,
    Page.SIGN_UP,
    Page.REGISTER_CONFIRM,
    Page.FORGOT_PASSWORD,
    Page.RESET_PASSWORD,
    Page.CONFIRM_EMAIL,
  ])?.isExact;

  return (
    <FlexContainer
      height="68px"
      justifyContent="center"
      width="100%"
      alignItems="center"
      backgroundColor={`var(${ColorVarsEnum.BG_accent})`}
    >
      <FlexContainer
        padding="0 20px"
        width={CONTENT_WIDTH}
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />
        {!isAuthPages && (
          <>
            <NavBarNavigation />
            <NavBarAccount />
          </>
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default NavBar;
