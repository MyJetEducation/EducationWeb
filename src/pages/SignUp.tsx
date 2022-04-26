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
import validationInputTexts from '../constants/validationInputTexts';
import FullScreenLoader from '../components/Preloader/FullScreenLoader';
import { OperationAuthApiResponseCodes } from '../enums/OperationAuthApiResponseCodes';
import { useHistory } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { TitleH0 } from '../styles/Titles';

const SignUp = () => {
  const { t } = useTranslation();
  const { mainAppStore } = useStores();
  const { push } = useHistory();
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object().shape<UserRegistration>({
    email: yup
      .string()
      .required(t(validationInputTexts.REQUIRED_FIELD_EMAIL))
      .email(t(validationInputTexts.EMAIL)),
    password: yup
      .string()
      .required(t(validationInputTexts.REQUIRED_FIELD_PASSWORD))
      .min(8, t(validationInputTexts.PASSWORD_MIN_CHARACTERS))
      .max(31, t(validationInputTexts.PASSWORD_MAX_CHARACTERS))
      .matches(
        /^(?=.*\d)(?=.*[a-zA-Z0-9])/,
        t(validationInputTexts.PASSWORD_MATCH)
      ),
  });

  const initialValues: UserRegistration = {
    email: '',
    password: '',
  };

  const handleSubmitForm = async () => {
    setIsLoading(true);
    try {
      const result = await mainAppStore.signUp(values);
      console.log(result);
      switch (result) {
        case OperationAuthApiResponseCodes.OK:
          setSuccess(true);
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
      justifyContent="flex-start"
      padding="72px 0 32px"
      position="relative"
    >
      <FullScreenLoader isLoading={isLoading} />

      <Container>
        <Row className="justify-content-center">
          <Col xs="12" md="8" xl="5">
            <FlexContainer
              marginBottom="24px"
              justifyContent="center"
              flexDirection="column"
            >
              <TitleH0 marginBottom="14px">{t('Create an account')}</TitleH0>
              <PrimaryTextSpan textAlign="center" lineHeight="24px">
                {t('Everything you really should know about personal finance')}
              </PrimaryTextSpan>
            </FlexContainer>

            <AuthForm noValidate onSubmit={handleSubmit}>
              <LabelInput
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                id={Fields.EMAIL}
                name={Fields.EMAIL}
                labelText={t('Email')}
                hasError={!!(touched.email && errors.email)}
                errorText={errors.email}
              />
              <LabelInput
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                id={Fields.PASSWORD}
                name={Fields.PASSWORD}
                labelText={t('Password')}
                type="password"
                hasError={!!(touched.password && errors.password)}
                errorText={errors.password}
              />

              <CheckListPassword password={values.password} />
              <PrimaryButton
                onClick={handlerClickSubmit}
                type="button"
                disabled={!isValid}
              >
                {t('Create an account')}
              </PrimaryButton>
            </AuthForm>
          </Col>
        </Row>
      </Container>

      <PrimaryTextSpan fontSize="12px" fontWeight={400}>
        {t('Already have an account?')}&nbsp;
        <TextAccentLink to={Page.SIGN_IN}>{t('Log In')}</TextAccentLink>
      </PrimaryTextSpan>
    </FlexContainer>
  );
};

export default SignUp;
