import React from 'react';
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
