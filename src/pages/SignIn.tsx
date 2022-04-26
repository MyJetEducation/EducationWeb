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
import { OperationApiResponseCodes } from '../enums/OperationApiResponseCodes';
import apiResponseCodeMessages from '../constants/apiResponseCodeMessages';
import { useHistory } from 'react-router-dom';
import validationInputTexts from '../constants/validationInputTexts';
import FullScreenLoader from '../components/Preloader/FullScreenLoader';
import { OperationAuthApiResponseCodes } from '../enums/OperationAuthApiResponseCodes';
import { Col, Container, Row } from 'react-bootstrap';
import { TitleH0, TitleH1 } from '../styles/Titles';

const SignIn = () => {
  const { t } = useTranslation();
  const { push } = useHistory();
  const { mainAppStore } = useStores();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object().shape<UserAuthenticate>({
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

  const initialValues: UserAuthenticate = {
    email: '',
    password: '',
  };

  const handleSubmitForm = async () => {
    setIsLoading(true);
    try {
      const result = await mainAppStore.signIn(values);

      switch (result) {
        case OperationAuthApiResponseCodes.OK:
          push(Page.DASHBOARD);
          return null;

        case OperationAuthApiResponseCodes.InvalidUserNameOrPassword:
          setFieldError(
            Fields.EMAIL,
            t(validationInputTexts.INVALID_USER_DATA)
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

  return (
    <FlexContainer
      flexDirection="column"
      alignItems="center"
      padding="72px 0 32px"
      position="relative"
      width="100%"
    >
      <FullScreenLoader isLoading={isLoading} />

      <Container>
        <Row className="justify-content-center">
          <Col xs="12" md="8" xl="5">
            <FlexContainer marginBottom="70px" justifyContent="center">
              <TitleH0>{t('Log In')}</TitleH0>
            </FlexContainer>
            <AuthForm noValidate onSubmit={handleSubmit}>
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
              <FlexContainer position="relative" width="100%">
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
              </FlexContainer>

              <PrimaryButton
                onClick={handlerClickSubmit}
                type="button"
                disabled={!isValid}
              >
                {t('Login')}
              </PrimaryButton>
            </AuthForm>
          </Col>
        </Row>
      </Container>

      <PrimaryTextSpan fontSize="12px" fontWeight={400}>
        {t('Don`t have an account yet?')}&nbsp;
        <TextAccentLink to={Page.SIGN_UP}>{t('Sign Up')}</TextAccentLink>
      </PrimaryTextSpan>
    </FlexContainer>
  );
};

export default SignIn;
