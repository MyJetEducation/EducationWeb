import React, { FC } from 'react';
import { ColorVarsEnum } from '../enums/ColorVarsEnum';
import { FlexContainer } from '../styles/FlexContainer';

const SignFlowContainer: FC = ({ children }) => {
  return (
    <FlexContainer flex="1" justifyContent="center" backgroundColor={`var(${ColorVarsEnum.BG_accent})`}>
      {children}
    </FlexContainer>
  );
};

export default SignFlowContainer;
