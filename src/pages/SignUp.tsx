import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Divider from '../components/Divider';
import LabelInput from '../components/Form/LabelInput';
import Fields from '../constants/fields';
import Page from '../routing/Pages';
import {
  PrimaryButton,
  SecondaryButton,
  TextAccentButton,
} from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { AuthForm } from '../styles/FormControls';
import { PrimaryTextSpan, TextAccentLink } from '../styles/TextsElements';

import { UserRegistration } from '../types/UserInfo';
import * as yup from 'yup';

import CheckListPassword from '../components/Form/CheckListPassword';
import { useFormik } from 'formik';
import { useStores } from '../hooks/useStores';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import LoaderForComponent from '../components/LoaderForComponent';
import apiResponseCodeMessages from '../constants/apiResponseCodeMessages';

const SignUp = () => {
  const { t } = useTranslation();
  const { mainAppStore } = useStores();
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object().shape<UserRegistration>({
    userName: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .min(8)
      .max(31)
      .matches(/^(?=.*\d)(?=.*[a-zA-Z0-9])/),
    firstName: yup.string().required().min(2),
    lastName: yup.string().required().min(2),
  });

  const initialValues: UserRegistration = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
  };

  const handleSubmitForm = async () => {
    setIsLoading(true);
    try {
      const result = await mainAppStore.signUp(values);

      switch (result) {
        case OperationApiResponseCodes.Ok:
          setSuccess(true);
          break;

        case OperationApiResponseCodes.UserAlreadyExists:
        case OperationApiResponseCodes.NotValidEmail:
          setFieldError(Fields.USER_NAME, t(apiResponseCodeMessages[result]));
          break;

        case OperationApiResponseCodes.NotValidPassword:
          setFieldError(Fields.PASSWORD, t(apiResponseCodeMessages[result]));
          break;

        default:
          break;
      }
      setIsLoading(false);
    } catch (error) {
      //TODO: bad request solution ???
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
      justifyContent={isSuccess ? 'center' : 'flex-start'}
      padding={isSuccess ? '16px' : '72px 0 32px'}
      position="relative"
    >
      <LoaderForComponent isLoading={isLoading} />

      <PrimaryTextSpan
        textAlign="center"
        fontSize="40px"
        fontWeight={600}
        color="#000"
        marginBottom="24px"
      >
        {isSuccess ? t('Verify your email') : t('Create an account')}
      </PrimaryTextSpan>

      {isSuccess ? (
        <FlexContainer width="580px" flexDirection="column" alignItems="center">
          <PrimaryTextSpan
            textAlign="center"
            lineHeight="24px"
            marginBottom="28px"
            fontSize="16px"
          >
            {t('We`ve sent an email to')}
            <PrimaryTextSpan color="#000"> {values.userName} </PrimaryTextSpan>
            {t(
              'to verify your email address and activate your account. The link in email will expire in 24 hours'
            )}
          </PrimaryTextSpan>
          <PrimaryTextSpan fontSize="16px" fontWeight={400}>
            {t('Can`t find email.')}&nbsp;
            <TextAccentButton fontSize="16px">
              {t('Resend verification email')}
            </TextAccentButton>
          </PrimaryTextSpan>
        </FlexContainer>
      ) : (
        <>
          <FlexContainer width="460px" marginBottom="48px">
            <PrimaryTextSpan textAlign="center" lineHeight="24px">
              {t(
                'Простая обучающая программа по финансовым знаниям, инструментам и управления деньгами.'
              )}
            </PrimaryTextSpan>
          </FlexContainer>

          <AuthForm noValidate onSubmit={handleSubmit}>
            <FlexContainer alignItems="center" justifyContent="space-between">
              <FlexContainer width="calc(50% - 10px)">
                <LabelInput
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  id={Fields.FIRST_NAME}
                  name={Fields.FIRST_NAME}
                  labelText={t('First Name')}
                />
              </FlexContainer>
              <FlexContainer width="calc(50% - 10px)">
                <LabelInput
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  id={Fields.LAST_NAME}
                  name={Fields.LAST_NAME}
                  labelText={t('Last Name')}
                />
              </FlexContainer>
            </FlexContainer>

            <LabelInput
              onBlur={handleBlur}
              onChange={handleChange}
              hasError={!!(touched.userName && errors.userName)}
              errorText={errors.userName}
              value={values.userName}
              id={Fields.USER_NAME}
              name={Fields.USER_NAME}
              labelText={t('Email')}
            />
            <LabelInput
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              id={Fields.PASSWORD}
              name={Fields.PASSWORD}
              labelText={t('Password')}
              type="password"
            />

            <CheckListPassword password={values.password} />
            <PrimaryButton
              onClick={handlerClickSubmit}
              type="button"
              disabled={!isValid}
            >
              {t('Create an account')}
            </PrimaryButton>

            <Divider label={t('Or continue with')} margin="24px 0" />
          </AuthForm>

          <FlexContainer
            width="340px"
            flexDirection="column"
            marginBottom="24px"
          >
            <SecondaryButton marginBottom="16px">Facebook</SecondaryButton>
            <SecondaryButton>Google</SecondaryButton>
          </FlexContainer>

          <PrimaryTextSpan fontSize="12px" fontWeight={400}>
            {t('Already have an account?')}&nbsp;
            <TextAccentLink to={Page.SIGN_IN}>{t('Log In')}</TextAccentLink>
          </PrimaryTextSpan>
        </>
      )}
    </FlexContainer>
  );
};


export default SignUp;