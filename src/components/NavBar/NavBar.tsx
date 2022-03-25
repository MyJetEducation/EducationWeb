import styled from '@emotion/styled';
import React from 'react';
import { CONTENT_WIDTH } from '../../constants/global';
import { FlexContainer } from '../../styles/FlexContainer';

const NavBar = () => {
  return (
    <NavBarWrapper height="80px" alignItems="center">
      <FlexContainer width={CONTENT_WIDTH}>213</FlexContainer>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled(FlexContainer)`
  border-bottom: 1px solid #f1f4f8;
`;
