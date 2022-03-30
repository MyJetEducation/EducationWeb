import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Divider from '../components/Divider';
import LabelInput from '../components/Form/LabelInput';
import Fields from '../constants/fields';
import Page from '../routing/Pages';
import { PrimaryButton, SecondaryButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { AuthForm } from '../styles/FormControls';
import { PrimaryTextSpan, TextAccentLink } from '../styles/TextsElements';
import { UserAuthenticate } from '../types/UserInfo';
import * as yup from 'yup';
import { useStores } from '../hooks/useStores';
import LoaderForComponent from '../components/LoaderForComponent';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import apiResponseCodeMessages from '../constants/apiResponseCodeMessages';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const { t } = useTranslation();
  const { push } = useHistory();
  const { mainAppStore } = useStores();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object().shape<UserAuthenticate>({
    userName: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .min(8)
      .max(31)
      .matches(/^(?=.*\d)(?=.*[a-zA-Z0-9])/),
  });

  const initialValues: UserAuthenticate = {
    userName: '',
    password: '',
  };

  const handleSubmitForm = async () => {
    setIsLoading(true);
    try {
      const result = await mainAppStore.signIn(values);

      switch (result) {
        case OperationApiResponseCodes.Ok:
          push(Page.DASHBOARD);
          return null

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
      width="340px"
      flexDirection="column"
      alignItems="center"
      padding="72px 0 32px"
      position="relative"
    >
      <LoaderForComponent isLoading={isLoading} />
      <PrimaryTextSpan
        textAlign="center"
        fontSize="40px"
        fontWeight={600}
        color="#000"
        marginBottom="52px"
      >
        {t('Log In')}
      </PrimaryTextSpan>

      <AuthForm noValidate onSubmit={handleSubmit}>
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
        <FlexContainer position="relative" width="100%">
          <LabelInput
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
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
        <PrimaryButton
          onClick={handlerClickSubmit}
          type="button"
          disabled={!isValid}
        >
          {t('Login')}
        </PrimaryButton>

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
