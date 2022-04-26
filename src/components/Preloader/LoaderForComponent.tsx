import React from 'react';
import { FlexContainer } from '../../styles/FlexContainer';
import { LoaderWrap } from '../../styles/Preloader';
import Preloader from './Preloader';

interface Props {
  isLoading: boolean;
}

const LoaderForComponent = ({ isLoading }: Props) => {
  if (!isLoading) {
    return null;
  }
  return (
    <FlexContainer
      width="100%"
      justifyContent="center"
      alignItems="center"
      padding="32px"
    >
      <Preloader />
    </FlexContainer>
  );
};

export default LoaderForComponent;
