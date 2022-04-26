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

const ToolContent_4 = () => {
  const { t } = useTranslation();

  const [isDone, setDone] = useState(false);
  const [result, setResult] = useState(0);
  const [result2, setResult2] = useState(0);

  const validationSchema = yup.object().shape({
    current: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    monthly: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    mounth_count: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
  });

  const initialValues = {
    current: '',
    monthly: '',
    mounth_count: '',
  };

  const handleClickSubmit = () => handleSubmit();

  const handleSubmitForm = () => {
    let a, b, c;
    a = stringToNumber(values.current);
    b = stringToNumber(values.monthly);
    c = stringToNumber(values.mounth_count);

    const sum = (a - b * 3) / c;
    const sum2 = (a - b * 6) / c;
    setResult(sum);
    setResult2(sum2);
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
              name="current"
              format="money"
              value={values.current}
              onChange={handleChange}
              labelText={t('Your current Emergency Fund')}
            />
            <LabelInput
              value={values.monthly}
              onChange={handleChange}
              format="money"
              name="monthly"
              labelText={t('Monthly living expenses')}
            />
            <LabelInput
              format="money"
              name="mounth_count"
              prefix=""
              value={values.mounth_count}
              onChange={handleChange}
              marginBottom="0px"
              labelText={t(
                'In how many months you want to build an emergency fund'
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
                {`${t('For 3 months EF You need to save every month')}`}
              </PrimaryTextSpan>

              <PrimaryTextSpan
                color={`var(${ColorVarsEnum.Primary})`}
                fontWeight={500}
                fontSize="56px"
                lineHeight="60px"
                marginBottom="32px"
              >
                {`${result}`}
              </PrimaryTextSpan>

              <PrimaryTextSpan>
                {`${t('For 6 months EF You need to save every month')}`}
              </PrimaryTextSpan>

              <PrimaryTextSpan
                color={`var(${ColorVarsEnum.Primary})`}
                fontWeight={500}
                fontSize="56px"
                lineHeight="60px"
              >
                {`${result2}`}
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

export default ToolContent_4;
