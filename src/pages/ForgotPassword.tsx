import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LabelInput from '../components/Form/LabelInput';
import Fields from '../constants/fields';
import Page from '../routing/Pages';
import { PrimaryButton, TextAccentButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { AuthForm } from '../styles/FormControls';
import { PrimaryTextSpan, TextAccentLink } from '../styles/TextsElements';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const [isSent, setSent] = useState(false);

  return (
    <FlexContainer
      width="100%"
      flexDirection="column"
      alignItems="center"
      padding={isSent ? '16px' : '72px 0 32px'}
      justifyContent={isSent ? 'center' : 'flex-start'}
    >
      <PrimaryTextSpan
        textAlign="center"
        fontSize="40px"
        fontWeight={600}
        color="#000"
        marginBottom="24px"
      >
        {isSent ? t('Check your email') : t('Forgot password')}
      </PrimaryTextSpan>

      {isSent ? (
        <>
          <PrimaryTextSpan lineHeight="24px" marginBottom="28px">
            {t('We`ve sent an email to')}&nbsp;
            <PrimaryTextSpan color="#000">artdirwork@gmail.com</PrimaryTextSpan>
            <br />
            {t('Click the link in the email to reset the password')}
          </PrimaryTextSpan>
          <PrimaryTextSpan fontSize="16px" fontWeight={400}>
            {t('Can`t find email.')}&nbsp;
            <TextAccentButton fontSize="16px">
              {t('Resend reset link')}
            </TextAccentButton>
          </PrimaryTextSpan>
        </>
      ) : (
        <>
          <AuthForm marginBottom="24px">
            <LabelInput
              id={Fields.EMAIL}
              name={Fields.EMAIL}
              labelText={t('Email')}
            />
            <PrimaryButton>{t('Send reset link')}</PrimaryButton>
          </AuthForm>
          <PrimaryTextSpan fontSize="12px" fontWeight={400}>
            {t('Already have an account?')}&nbsp;
            <TextAccentLink to={Page.SIGN_IN}>{t('Log In')}</TextAccentLink>
          </PrimaryTextSpan>
        </>
      )}
    </FlexContainer>
  );
};

export default ForgotPassword;
