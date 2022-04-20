import React, { useState } from 'react';
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

const ConfirmEmail = () => {
  const { t } = useTranslation();
  const { push } = useHistory();
  // store
  const { userProfileStore } = useStores();
  // state
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  // handles
  const handleResendCode = async () => {
    try {
      const response = await API.requestVerify();
      console.log(response);
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
      }
      console.log(response);
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
    if (!isLoading && newCode.length === 6) {
      setIsLoading(true);
      sendCodeVerify(newCode);
    }
  };

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
        <FlexContainer marginBottom="8px">
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
        <PrimaryTextSpan fontSize="16px" fontWeight={400}>
          {t('Can`t find email.')}&nbsp;
          <TextAccentButton fontSize="16px" onClick={handleResendCode}>
            {t('Resend verification email')}
          </TextAccentButton>
        </PrimaryTextSpan>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ConfirmEmail;
