import styled from '@emotion/styled';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { CONTENT_WIDTH } from '../../constants/global';
import Page from '../../routing/Pages';
import { FlexContainer } from '../../styles/FlexContainer';
import Logo from './Logo';
import NavBarAccount from './NavBarAccount/NavBarAccount';
import NavBarNavigation from './NavBarNavigation';

const NavBar = () => {
  const isAuthPages = useRouteMatch([Page.SIGN_IN, Page.SIGN_UP])?.isExact;
  return (
    <NavBarWrapper
      height="80px"
      justifyContent="center"
      width="100%"
      alignItems="center"
    >
      <FlexContainer
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
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled(FlexContainer)`
  border-bottom: 1px solid #f1f4f8;
`;
