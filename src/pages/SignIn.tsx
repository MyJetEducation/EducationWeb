import React from 'react';
import { useTranslation } from 'react-i18next';
import Divider from '../components/Divider';
import LabelInput from '../components/Form/LabelInput';
import Fields from '../constants/fields';
import Page from '../routing/Pages';
import { PrimaryButton, SecondaryButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { AuthForm } from '../styles/FormControls';
import { PrimaryTextSpan, TextAccentLink } from '../styles/TextsElements';

const SignIn = () => {
  const { t } = useTranslation();
  return (
    <FlexContainer
      width="340px"
      flexDirection="column"
      alignItems="center"
      padding="72px 0 32px"
    >
      <PrimaryTextSpan
        textAlign="center"
        fontSize="40px"
        fontWeight={600}
        color="#000"
        marginBottom="52px"
      >
        {t('Log In')}
      </PrimaryTextSpan>

      <AuthForm>
        <LabelInput
          id={Fields.EMAIL}
          name={Fields.EMAIL}
          labelText={t('Email')}
        />
        <FlexContainer position="relative" width="100%">
          <LabelInput
            id={Fields.PASSWORD}
            name={Fields.PASSWORD}
            labelText={t('Password')}
            type="password"
          />

          <FlexContainer
            position="absolute"
            left="calc(100% + 20px)"
            top="14px"
            width="max-content"
          >
            <TextAccentLink to={Page.FORGOT_PASSWORD}>
              {t('Forgot password?')}
            </TextAccentLink>
          </FlexContainer>
        </FlexContainer>
        <PrimaryButton>{t('Login')}</PrimaryButton>

        <Divider label={t('Or continue with')} margin="24px 0" />
      </AuthForm>

      <FlexContainer width="100%" flexDirection="column" marginBottom="24px">
        <SecondaryButton marginBottom="16px">Facebook</SecondaryButton>
        <SecondaryButton>Google</SecondaryButton>
      </FlexContainer>

      <PrimaryTextSpan fontSize="12px" fontWeight={400}>
        {t('Don`t have an account yet?')}&nbsp;
        <TextAccentLink to={Page.SIGN_UP}>{t('Sign Up')}</TextAccentLink>
      </PrimaryTextSpan>
    </FlexContainer>
  );
};

export default SignIn;
