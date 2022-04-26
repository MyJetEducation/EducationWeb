import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LabelInput from '../components/Form/LabelInput';
import Fields from '../constants/fields';
import Page from '../routing/Pages';
import { PrimaryButton, TextAccentButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { AuthForm } from '../styles/FormControls';
import { PrimaryTextSpan, TextAccentLink } from '../styles/TextsElements';
import { useFormik } from 'formik';
import { useStores } from '../hooks/useStores';
import * as yup from 'yup';
import { UserForgotPassword } from '../types/UserInfo';
import validationInputTexts from '../constants/validationInputTexts';
import API from '../helpers/API';
import FullScreenLoader from '../components/Preloader/FullScreenLoader';
import { OperationAuthApiResponseCodes } from '../enums/OperationAuthApiResponseCodes';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setSent] = useState(false);

  const validationSchema = yup.object().shape<UserForgotPassword>({
    email: yup
      .string()
      .required(t(validationInputTexts.REQUIRED_FIELD))
      .email(t(validationInputTexts.EMAIL)),
  });

  const initialValues: UserForgotPassword = {
    email: '',
  };

  const handleSubmitForm = async () => {
    setIsLoading(true);
    try {
      const result = await API.forgotPassword(values.email);

      switch (result.result) {
        case OperationAuthApiResponseCodes.OK:
          setSent(true);
          break;

        default:
          break;
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const {
    values,
    validateForm,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldError,
    errors,
    touched,
    isValid,
    submitForm,
  } = useFormik({
    initialValues,
    onSubmit: handleSubmitForm,
    validationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
  });

  const handlerClickSubmit = async () => {
    const curErrors = await validateForm();
    const curErrorsKeys = Object.keys(curErrors);
    if (curErrorsKeys.length) {
      const el = document.getElementById(curErrorsKeys[0]);
      if (el) el.focus();
    }
    submitForm();
  };

  return (
    <FlexContainer
      width="100%"
      flexDirection="column"
      alignItems="center"
      padding={isSent ? '16px' : '72px 0 32px'}
      justifyContent={isSent ? 'center' : 'flex-start'}
      position="relative"
    >
      <FullScreenLoader isLoading={isLoading} />
      <PrimaryTextSpan
        textAlign="center"
        fontSize="40px"
        fontWeight={500}
        color="#000"
        marginBottom="24px"
      >
        {isSent ? t('Check your email') : t('Forgot password')}
      </PrimaryTextSpan>

      {isSent ? (
        <>
          <PrimaryTextSpan lineHeight="24px" marginBottom="28px">
            {t('We`ve sent an email to')}&nbsp;
            <PrimaryTextSpan color="#000">{values.email}</PrimaryTextSpan>
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
          <AuthForm marginBottom="24px" onSubmit={handleSubmit}>
            <LabelInput
              onBlur={handleBlur}
              onChange={handleChange}
              hasError={!!(touched.email && errors.email)}
              errorText={errors.email}
              value={values.email}
              id={Fields.EMAIL}
              name={Fields.EMAIL}
              labelText={t('Email')}
            />
            <PrimaryButton
              disabled={!isValid}
              type="button"
              onClick={handlerClickSubmit}
            >
              {t('Send reset link')}
            </PrimaryButton>
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
