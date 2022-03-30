import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LabelInput from '../components/Form/LabelInput';
import Fields from '../constants/fields';
import Page from '../routing/Pages';
import { PrimaryButton, TextAccentButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { AuthForm } from '../styles/FormControls';
import { PrimaryTextSpan, TextAccentLink } from '../styles/TextsElements';
import {useFormik} from "formik";
import {OperationApiResponseCodes} from "../enums/OperationApiResponseCodes";
import apiResponseCodeMessages from "../constants/apiResponseCodeMessages";
import {useStores} from "../hooks/useStores";
import * as yup from "yup";
import {UserForgotPassword} from "../types/UserInfo";
import LoaderForComponent from "../components/LoaderForComponent";

const ForgotPassword = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { mainAppStore } = useStores();
  const [isSent, setSent] = useState(false);

  const validationSchema = yup.object().shape<UserForgotPassword>({
    userName: yup.string().required().email(),
  });

  const initialValues: UserForgotPassword = {
    userName: '',
  };

  const handleSubmitForm = async () => {
    setIsLoading(true);
    try {
      const result = await mainAppStore.forgotPassword(values);
      switch (result) {
        case OperationApiResponseCodes.Ok:
          setSent(true);
          setIsLoading(false);
          return null

        case OperationApiResponseCodes.UserAlreadyExists:
        case OperationApiResponseCodes.NotValidEmail:
          setFieldError(Fields.USER_NAME, t(apiResponseCodeMessages[result]));
          break;
        default:
          break;

      }

    } catch (error) {
      setIsLoading(false);
    }
  };
  console.log("####: isLoading", isLoading);
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
      padding={'72px 0 32px'}
      justifyContent={'flex-start'}
      position={"relative"}
    >
      <LoaderForComponent isLoading={isLoading} />
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
            <PrimaryTextSpan color="#000">{values.userName}</PrimaryTextSpan>
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
              hasError={!!(touched.userName && errors.userName)}
              errorText={errors.userName}
              value={values.userName}
              id={Fields.USER_NAME}
              name={Fields.USER_NAME}
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
