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

const ToolContent_1 = () => {
  const { t } = useTranslation();

  const [isDone, setDone] = useState(false);
  const [result, setResult] = useState(0);

  const validationSchema = yup.object().shape({
    goal: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    price: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    currently: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    weekly: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
  });

  const initialValues = {
    goal: '',
    price: '',
    currently: '',
    weekly: '',
  };

  const handleClickSubmit = () => handleSubmit();

  const handleSubmitForm = () => {
    let a, b, c;
    a = stringToNumber(values.price);
    b = stringToNumber(values.currently);
    c = stringToNumber(values.weekly);

    const sum = (a - b) / c;

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
              onChange={handleChange}
              labelText={t('What are you saving for?')}
            />
            <LabelInput
              value={values.price}
              onChange={handleChange}
              format="money"
              name="price"
              labelText={t('What is the price for it?')}
            />
            <LabelInput
              format="money"
              value={values.currently}
              onChange={handleChange}
              name="currently"
              labelText={t('How much do you currently have saved?')}
            />
            <LabelInput
              format="money"
              name="weekly"
              value={values.weekly}
              onChange={handleChange}
              marginBottom="0px"
              labelText={t('How much money can you contribute weekly?')}
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
                {`${t('You can afford to buy')} ${values.goal}`}
              </PrimaryTextSpan>

              <PrimaryTextSpan
                color={`var(${ColorVarsEnum.Primary})`}
                fontWeight={500}
                fontSize="56px"
                lineHeight="60px"
              >
                {`${t('in x_x weeks').replace('x_x', `${Math.floor(result)}`)}`}
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

export default ToolContent_1;
