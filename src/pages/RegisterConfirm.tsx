import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import FullScreenLoader from '../components/Preloader/FullScreenLoader';
import LoaderForComponent from '../components/Preloader/LoaderForComponent';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import { logger } from '../helpers/ConsoleLoggerTool';
import { useSearchParams } from '../hooks/useSearchParams';
import { useStores } from '../hooks/useStores';
import Page from '../routing/Pages';
import { PrimaryButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { PrimaryTextSpan } from '../styles/TextsElements';

const RegisterConfirm = () => {
  const { hash } = useSearchParams<{ hash: string }>();
  const { t } = useTranslation();
  const { push } = useHistory();
  const { mainAppStore } = useStores();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);

  const confirmRegistration = async (token: string) => {
    try {
      const result = await mainAppStore.sendRegisterConfirm(token);
      if (result === OperationApiResponseCodes.Ok) {
        setSuccess(true);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleClickConfirm = () => {
    if (!isSuccess) {
      push(Page.SIGN_UP);
      return;
    }
    //TODO: Add key value "is_new_user" true/fasle and push to payment page
    push(Page.DASHBOARD);
  };

  useEffect(() => {
    if (hash) {
      confirmRegistration(hash);
    }
  }, []);

  return (
    <FlexContainer
      width="100%"
      flex="1"
      justifyContent="center"
      alignItems="center"
      padding="16px"
      position="relative"
    >
      {!isLoading && isSuccess && (
        <FlexContainer
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <PrimaryTextSpan
            textAlign="center"
            fontSize="40px"
            fontWeight={500}
            color="#000"
            marginBottom="56px"
          >
            {t('Registration confirmed!')}
          </PrimaryTextSpan>
          <FlexContainer width="340px">
            <PrimaryButton onClick={handleClickConfirm} width="100%">
              {t('Continue')}
            </PrimaryButton>
          </FlexContainer>
        </FlexContainer>
      )}

      {!isLoading && !isSuccess && (
        <FlexContainer
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <PrimaryTextSpan
            textAlign="center"
            fontSize="40px"
            fontWeight={500}
            color="#000"
            marginBottom="56px"
          >
            {t('Something went wrong')}
          </PrimaryTextSpan>
          <FlexContainer width="340px">
            <PrimaryButton onClick={handleClickConfirm} width="100%">
              {t('Continue')}
            </PrimaryButton>
          </FlexContainer>
        </FlexContainer>
      )}

      <FullScreenLoader isLoading={isLoading} />
    </FlexContainer>
  );
};

export default RegisterConfirm;
