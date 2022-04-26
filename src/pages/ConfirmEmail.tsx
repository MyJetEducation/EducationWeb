import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ColorVarsEnum } from '../enums/ColorVarsEnum';
import { TextAccentButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import ReactCodeInput from 'react-code-input';
import { PrimaryTextSpan } from '../styles/TextsElements';
import { css, Global } from '@emotion/core';
import { InputCode } from '../styles/FormControls';
import API from '../helpers/API';
import { OperationApiAuthValidResponseCodes } from '../enums/OperationApiAuthValidResponseCodes';
import { useStores } from '../hooks/useStores';
import { useHistory, useParams } from 'react-router-dom';
import Page from '../routing/Pages';
import ResendCountdown from '../components/ResendCountdown';

const ConfirmEmail = () => {
  const { t } = useTranslation();
  const { push } = useHistory();
  // store
  const { userProfileStore, mainAppStore } = useStores();
  // state
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isResend, setResend] = useState(false);

  // handles
  const handleResendCode = async () => {
    try {
      const response = await API.requestVerify();
      if (response.result === OperationApiAuthValidResponseCodes.OK) {
        setResend(true);
      }
    } catch (error) {}
  };

  const sendCodeVerify = async (code: string) => {
    try {
      const response = await API.postCodeVerify(code);
      if (response.result === OperationApiAuthValidResponseCodes.InvalidCode) {
        setIsValid(false);
      }
      if (response.result === OperationApiAuthValidResponseCodes.OK) {
        userProfileStore.setCheckEmail(true);
        push(Page.DASHBOARD);
        return null;
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleChangeCode = (newCode: string) => {
    setCode(newCode);
    if (!isValid) {
      setIsValid(true);
    }
  };

  const handleBackToSignIn = () => {
    mainAppStore.signOut();
  };

  const stopResendTimer = () => setResend(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (!mainAppStore.isLoading && mainAppStore.isAvailableContent) {
        push(Page.DASHBOARD);
      }

      if (!isLoading && code.length === 6) {
        setIsLoading(true);
        sendCodeVerify(code);
      }
    }
    return () => {
      mounted = false;
    };
  }, [code, mainAppStore.isLoading]);

  return (
    <FlexContainer
      width="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="16px"
      position="relative"
      backgroundColor={`var(${ColorVarsEnum.BG_accent})`}
    >
      <Global
        styles={css`
          ${InputCode}
        `}
      />
      {/* <FullScreenLoader isLoading={isLoading} /> */}

      <PrimaryTextSpan
        textAlign="center"
        fontSize="40px"
        fontWeight={500}
        color="#000"
        marginBottom="24px"
      >
        {t('Verify your email')}
      </PrimaryTextSpan>

      <FlexContainer width="580px" flexDirection="column" alignItems="center">
        <PrimaryTextSpan
          textAlign="center"
          lineHeight="24px"
          marginBottom="28px"
          fontSize="16px"
        >
          {t('We`ve sent an email to')}
          <PrimaryTextSpan color="#000"> email </PrimaryTextSpan>
          <br />
          {t(
            'Click the link in the email or enter the code to activate your account'
          )}
        </PrimaryTextSpan>
        <FlexContainer marginBottom="24px">
          <ReactCodeInput
            placeholder="X"
            className="input-code"
            name="code"
            inputMode="numeric"
            type="number"
            fields={6}
            onChange={handleChangeCode}
            disabled={isLoading}
            value={code}
            isValid={isValid}
            inputStyleInvalid={{ color: `var(${ColorVarsEnum.Danger})` }}
          />
        </FlexContainer>
        <PrimaryTextSpan fontSize="16px" fontWeight={400} marginBottom="40px">
          {t('Can`t find email.')}&nbsp;
          {isResend ? (
            <ResendCountdown onEnd={stopResendTimer} />
          ) : (
            <TextAccentButton fontSize="16px" onClick={handleResendCode}>
              {t('Resend verification email')}
            </TextAccentButton>
          )}
        </PrimaryTextSpan>

        <PrimaryTextSpan fontSize="16px" fontWeight={400}>
          {t('Back to')}&nbsp;
          <TextAccentButton fontSize="16px" onClick={handleBackToSignIn}>
            {t('Sign In')}
          </TextAccentButton>
        </PrimaryTextSpan>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ConfirmEmail;
