import styled from '@emotion/styled';
import React from 'react';
import { FlexContainer } from '../styles/FlexContainer';
import Preloader from './Preloader';

interface Props {
  isLoading: boolean;
}

const LoaderForComponent = ({ isLoading }: Props) => {
  if (!isLoading) {
    return null;
  }
  return (
    <LoaderWrap
      position="absolute"
      top="0"
      right="0"
      bottom="0"
      left="0"
      zIndex="9"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Preloader />
    </LoaderWrap>
  );
};

export default LoaderForComponent;

const LoaderWrap = styled(FlexContainer)`
  background-color: rgba(255, 255, 255);
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(4px);
  }
`;
