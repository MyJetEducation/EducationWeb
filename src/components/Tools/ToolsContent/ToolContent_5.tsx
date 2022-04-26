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

const ToolContent_5 = () => {
  const { t } = useTranslation();

  const [isDone, setDone] = useState(false);
  const [result, setResult] = useState(0);

  const validationSchema = yup.object().shape({
    a: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    b: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    c: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    d: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    e: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
  });

  const initialValues = {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
  };

  const handleClickSubmit = () => handleSubmit();

  const handleSubmitForm = () => {
    const data = Object.values(values);
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum = sum + stringToNumber(data[i]);
    }

    setResult(sum);
    setDone(true);
  };

  const { values, handleSubmit, handleChange, isValid } = useFormik({
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
              name="a"
              format="money"
              value={values.a}
              onChange={handleChange}
              labelText={t('Mortgage or rent payment monthly')}
            />
            <LabelInput
              value={values.b}
              onChange={handleChange}
              format="money"
              name="b"
              labelText={t('Food monthly')}
            />
            <LabelInput
              format="money"
              name="c"
              value={values.c}
              onChange={handleChange}
              labelText={t('Transport expenses monthly')}
            />
            <LabelInput
              format="money"
              name="d"
              value={values.d}
              onChange={handleChange}
              labelText={t('Insurance')}
            />
            <LabelInput
              format="money"
              name="e"
              value={values.e}
              onChange={handleChange}
              marginBottom="0px"
              labelText={t('Add more +')}
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
              <PrimaryTextSpan>{`${t('Total experses are')}`}</PrimaryTextSpan>
              <PrimaryTextSpan
                color={`var(${ColorVarsEnum.Primary})`}
                fontWeight={500}
                fontSize="56px"
                lineHeight="60px"
                marginBottom="32px"
              >
                {`$${result}`}
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

export default ToolContent_5;
