import React, { FC } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { CONTENT_WIDTH, FULL_VH } from '../constants/global';
import { FlexContainer } from '../styles/FlexContainer';

const PageTemplateContainer: FC = ({ children }) => {
  return (
    <FlexContainer
      flex="1"
      flexDirection="column"
      height={`calc(${FULL_VH})`}
      alignItems="center"
    >
      <NavBar />

      <FlexContainer
        flex="1"
        flexWrap="wrap"
        overflow="auto"
        justifyContent="center"
        width="100%"
      >
        {children}
      </FlexContainer>
    </FlexContainer>
  );
};

export default PageTemplateContainer;
