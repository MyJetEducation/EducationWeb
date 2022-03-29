import React from 'react';
import {useTranslation} from 'react-i18next';
import Divider from '../components/Divider';
import LabelInput from '../components/Form/LabelInput';
import Fields from '../constants/fields';
import Page from '../routing/Pages';
import {PrimaryButton, SecondaryButton} from '../styles/Buttons';
import {FlexContainer} from '../styles/FlexContainer';
import {AuthForm} from '../styles/FormControls';
import {PrimaryTextSpan, TextAccentLink} from '../styles/TextsElements';

import {UserRegistration} from '../types/UserInfo';
import validationInputTexts from '../constants/validationInputTexts';
import * as yup from 'yup';

import CheckListPassword from '../components/Form/CheckListPassword';
import {useFormik} from 'formik';
import {useStores} from "../hooks/useStores";
import {OperationApiResponseCodes} from "../enums/OperationApiResponseCodes";

const SignUp = () => {
  const {t} = useTranslation();
  const {mainAppStore} = useStores();

  const validationSchema = yup.object().shape<UserRegistration>({
    userName: yup
      .string()
      .required(t(validationInputTexts.EMAIL))
      .email(t(validationInputTexts.EMAIL)),
    password: yup
      .string()
      .required(t(validationInputTexts.REQUIRED_FIELD))
      .min(8, t(validationInputTexts.PASSWORD_MIN_CHARACTERS))
      .max(31, t(validationInputTexts.PASSWORD_MAX_CHARACTERS))
      .matches(
        /^(?=.*\d)(?=.*[a-zA-Z])/,
        t(validationInputTexts.PASSWORD_MATCH)
      ),
    firstName: yup.string(),
    lastName: yup.string(),
  });

  const initialValues: UserRegistration = {
    password: '',
    userName: '',
    firstName: '',
    lastName: '',
  };

  const handleSubmitForm = async () => {
    try {
      const result = await mainAppStore.signUp(values);
      if (result === OperationApiResponseCodes.Ok) {
        //TODO: redirect on confirm page
      }
    } catch (error) {

    }

  };
  
  const {
    values,
    validateForm,
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    isSubmitting,
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
      padding="72px 0 32px"
    >
      <PrimaryTextSpan
        textAlign="center"
        fontSize="40px"
        fontWeight={600}
        color="#000"
        marginBottom="24px"
      >
        {t('Create an account')}
      </PrimaryTextSpan>

      <FlexContainer width="460px" marginBottom="48px">
        <PrimaryTextSpan textAlign="center" lineHeight="24px">
          {t(
            'Простая обучающая программа по финансовым знаниям, инструментам и управления деньгами.'
          )}
        </PrimaryTextSpan>
      </FlexContainer>

      <AuthForm noValidate onSubmit={handleSubmit}>
        <FlexContainer alignItems="center" justifyContent="space-between">
          <FlexContainer width="calc(50% - 12px)">
            <LabelInput
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              id={Fields.FIRST_NAME}
              name={Fields.FIRST_NAME}
              labelText={t('First Name')}
            />
          </FlexContainer>
          <FlexContainer width="calc(50% - 12px)">
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
          value={values.userName}
          id={Fields.EMAIL}
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

        <CheckListPassword password={values.password}/>
        <PrimaryButton
          onClick={handlerClickSubmit}
          type="button"
          disabled={!isValid}
        >
          {t('Create an account')}
        </PrimaryButton>

        <Divider label={t('Or continue with')} margin="24px 0"/>
      </AuthForm>

      <FlexContainer width="340px" flexDirection="column" marginBottom="24px">
        <SecondaryButton marginBottom="16px">Facebook</SecondaryButton>
        <SecondaryButton>Google</SecondaryButton>
      </FlexContainer>

      <PrimaryTextSpan fontSize="12px" fontWeight={400}>
        {t('Already have an account?')}&nbsp;
        <TextAccentLink to={Page.SIGN_IN}>{t('Log In')}</TextAccentLink>
      </PrimaryTextSpan>
    </FlexContainer>
  );
};

export default SignUp;
