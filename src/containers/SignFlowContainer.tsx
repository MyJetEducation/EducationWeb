import React, { FC } from 'react';
import { FlexContainer } from '../styles/FlexContainer';

const SignFlowContainer: FC = ({ children }) => {
  return (
    <FlexContainer flex="1" justifyContent="center">
      {children}
    </FlexContainer>
  );
};

export default SignFlowContainer;
