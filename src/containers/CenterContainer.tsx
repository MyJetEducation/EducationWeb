import React, { FC } from 'react';
import { CONTENT_WIDTH } from '../constants/global';
import { FlexContainer } from '../styles/FlexContainer';

interface Props {
  padding?: string;
  backgroundColor?: string;
}

const CenterContainer: FC<Props> = ({
  children,
  padding = '',
  backgroundColor,
}) => {
  return (
    <FlexContainer
      flex="1"
      justifyContent="center"
      padding={padding}
      // flexWrap="wrap"
      // overflow="auto"
      backgroundColor={backgroundColor}
    >
      <FlexContainer
        width={CONTENT_WIDTH}
        maxWidth="100%"
        flexDirection="column"
        padding="0 20px"
      >
        {children}
      </FlexContainer>
    </FlexContainer>
  );
};

export default CenterContainer;
