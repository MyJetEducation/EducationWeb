import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckListPassword from '../components/Form/CheckListPassword';
import LabelInput from '../components/Form/LabelInput';
import Fields from '../constants/fields';
import { useSearchParams } from '../hooks/useSearchParams';
import { PrimaryButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { AuthForm } from '../styles/FormControls';
import { PrimaryTextSpan } from '../styles/TextsElements';
import * as yup from 'yup';
import { RecoveryPasswordType } from '../types/UserInfo';
import validationInputTexts from '../constants/validationInputTexts';
import { useFormik } from 'formik';
import API from '../helpers/API';
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import apiResponseCodeMessages from '../constants/apiResponseCodeMessages';
import LoaderForComponent from '../components/LoaderForComponent';
import { useHistory } from 'react-router-dom';
import Page from '../routing/Pages';

const ResetPassord = () => {
  const { hash } = useSearchParams<{ hash: string }>();
  const { t } = useTranslation();
  const { push } = useHistory();
  const [isSent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object().shape<RecoveryPasswordType>({
    password: yup
      .string()
      .required(t(validationInputTexts.REQUIRED_FIELD))
      .min(8, t(validationInputTexts.PASSWORD_MIN_CHARACTERS))
      .max(31, t(validationInputTexts.PASSWORD_MAX_CHARACTERS))
      .matches(
        /^(?=.*\d)(?=.*[a-zA-Z0-9])/,
        t(validationInputTexts.PASSWORD_MATCH)
      ),
    confirmPassword: yup
      .string()
      .required(t(validationInputTexts.REPEAT_PASSWORD))
      .oneOf(
        [yup.ref(Fields.PASSWORD), null],
        t(validationInputTexts.REPEAT_PASSWORD_MATCH)
      ),
    hash: yup.string(),
  });

  const initialValues: RecoveryPasswordType = {
    hash: '',
    password: '',
    confirmPassword: '',
  };

  // TODO: add negative cases
  const handleSubmitForm = async () => {
    setIsLoading(true);
    try {
      const result = await API.recoveryPassword({
        hash: hash || '',
        password: values.password,
      });

      switch (result.status) {
        case OperationApiResponseCodes.Ok:
          setSent(true);
          break;

        case OperationApiResponseCodes.NotValidPassword:
          setFieldError(
            Fields.PASSWORD,
            t(apiResponseCodeMessages[result.status])
          );
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

  const handleClickLogIn = () => {
    push(Page.SIGN_IN);
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
      <LoaderForComponent isLoading={isLoading} />
      <PrimaryTextSpan
        textAlign="center"
        fontSize="40px"
        fontWeight={600}
        color="#000"
        marginBottom="24px"
      >
        {isSent ? t('New pass confirmed!') : t('Pick a new password')}
      </PrimaryTextSpan>

      {isSent ? (
        <>
          <PrimaryTextSpan lineHeight="24px" marginBottom="52px">
            {t('Now you can Log in with new password')}
          </PrimaryTextSpan>
          <FlexContainer width="340px">
            <PrimaryButton onClick={handleClickLogIn} width="100%">
              {t('Log In')}
            </PrimaryButton>
          </FlexContainer>
        </>
      ) : (
        <>
          <AuthForm marginBottom="24px" noValidate onSubmit={handleSubmit}>
            <LabelInput
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              id={Fields.PASSWORD}
              name={Fields.PASSWORD}
              hasError={!!(touched.password && errors.password)}
              errorText={errors.password}
              labelText={t('Password')}
              type="password"
              tabIndex={1}
            />
            <LabelInput
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirmPassword}
              id={Fields.CONFIRM_PASSWORD}
              name={Fields.CONFIRM_PASSWORD}
              hasError={!!(touched.confirmPassword && errors.confirmPassword)}
              errorText={errors.confirmPassword}
              labelText={t('Confirm password')}
              type="password"
              tabIndex={2}
            />

            <CheckListPassword password={values.password} />
            <PrimaryButton
              onClick={handlerClickSubmit}
              type="button"
              disabled={!isValid}
            >
              {t('Change password')}
            </PrimaryButton>
          </AuthForm>
        </>
      )}
    </FlexContainer>
  );
};

export default ResetPassord;
