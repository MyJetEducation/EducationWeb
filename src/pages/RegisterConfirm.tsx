import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../components/Preloader';
import { logger } from '../helpers/ConsoleLoggerTool';
import { useSearchParams } from '../hooks/useSearchParams';
import { useStores } from '../hooks/useStores';
import { FlexContainer } from '../styles/FlexContainer';
import { PrimaryTextSpan } from '../styles/TextsElements';

// ? hash = string
const RegisterConfirm = () => {
  const { hash } = useSearchParams<{ hash: string; }>();

  const { mainAppStore } = useStores();
  
  useEffect(() => {
    if (hash) {
      mainAppStore.sendRegisterConfirm(hash);
    }

    logger(hash);
  }, []);
  
  return (
    <FlexContainer
      width="100%"
      flex="1"
      justifyContent="center"
      alignItems="center"
      padding="16px"
    >
      <Preloader />
    </FlexContainer>
  );
};

export default RegisterConfirm;
