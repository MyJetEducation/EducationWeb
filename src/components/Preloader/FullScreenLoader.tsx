import React from 'react';
import { FULL_VH } from '../../constants/global';
import { LoaderWrap } from '../../styles/Preloader';
import Modal from '../Modal';
import Preloader from './Preloader';

interface Props {
  isLoading: boolean;
}
const FullScreenLoader = ({ isLoading }: Props) => {
  if (!isLoading) {
    return null;
  }
  return (
    <Modal>
      <LoaderWrap
        position="fixed"
        zIndex="99"
        top="0"
        left="0"
        width="100vw"
        height={`calc(${FULL_VH})`}
        alignItems="center"
        justifyContent="center"
      >
        <Preloader />
      </LoaderWrap>
    </Modal>
  );
};

export default FullScreenLoader;
