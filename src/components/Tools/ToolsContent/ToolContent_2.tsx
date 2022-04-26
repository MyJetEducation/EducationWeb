import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ColorVarsEnum } from '../../../enums/ColorVarsEnum';
import { PrimaryButton } from '../../../styles/Buttons';
import { FlexContainer } from '../../../styles/FlexContainer';
import { CalculatorForm } from '../../../styles/FormControls';
import { PrimaryTextSpan } from '../../../styles/TextsElements';
import LabelInput from '../../Form/LabelInput';
import * as yup from 'yup';
import validationInputTexts from '../../../constants/validationInputTexts';
import { useFormik } from 'formik';
import { stringToNumber } from '../../../helpers/stringToNumber';

const ToolContent_2 = () => {
  const { t } = useTranslation();

  const [isDone, setDone] = useState(false);
  const [result, setResult] = useState(0);

  const validationSchema = yup.object().shape({
    goal: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    rate: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    currently: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    weekly: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
  });

  const initialValues = {
    goal: '1000000',
    rate: '',
    currently: '',
    weekly: '',
  };

  const handleClickSubmit = () => handleSubmit();

  const handleSubmitForm = () => {
    let rate, curr, week, goal;
    goal = 1000000;
    rate = stringToNumber(values.rate);
    curr = stringToNumber(values.currently);
    week = stringToNumber(values.weekly);

    let step1, step2, step3, step4, step5, step6;

    const sum = (week * 52 + curr) * (1 + (0.01 * rate) / 1) ** 10;

    setResult(sum);
    setDone(true);
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

  return (
    <Row>
      <Col xs="12" md="6" className="order-1">
        <FlexContainer flex="1">
          <CalculatorForm>
            <LabelInput
              id="goal"
              name="goal"
              value={values.goal}
              format="money"
              labelText={t('What is your dream money goal?')}
            />

            <LabelInput
              format="money"
              value={values.currently}
              onChange={handleChange}
              name="currently"
              labelText={t('What are your savings for now?')}
            />
            <LabelInput
              format="money"
              name="weekly"
              value={values.weekly}
              onChange={handleChange}
              labelText={t('How much money are you contributing weekly?')}
            />
            <LabelInput
              value={values.rate}
              onChange={handleChange}
              format="money"
              prefix=""
              name="rate"
              marginBottom="0px"
              labelText={t(
                'What annual interest rate do you expect on your account?'
              )}
            />
          </CalculatorForm>
        </FlexContainer>
      </Col>

      <Col xs="12" md="6" className="order-3 order-md-2">
        <FlexContainer
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          backgroundColor={`var(${ColorVarsEnum.BG_accent})`}
          borderRadius="32px"
          padding="40px"
          height="100%"
        >
          {isDone && (
            <>
              <PrimaryTextSpan>
                {`${t('That`s how much money you`ll get in 10 years')}`}
              </PrimaryTextSpan>

              <PrimaryTextSpan
                color={`var(${ColorVarsEnum.Primary})`}
                fontWeight={500}
                fontSize="56px"
                lineHeight="60px"
              >
                {`${Math.floor(result)}`}
              </PrimaryTextSpan>
            </>
          )}
        </FlexContainer>
      </Col>

      <Col className="order-2 order-md-3">
        <FlexContainer padding="20px 0">
          <PrimaryButton
            disabled={!isValid}
            type="button"
            onClick={handleClickSubmit}
          >
            {t('Calculate')}
          </PrimaryButton>
        </FlexContainer>
      </Col>
    </Row>
  );
};

export default ToolContent_2;
