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

const ToolContent_3 = () => {
  const { t } = useTranslation();

  const [isDone, setDone] = useState(false);
  const [result, setResult] = useState(0);

  const validationSchema = yup.object().shape({
    food: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    drinks: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    sweets: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    decorations: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    costumes: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    photo: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    transport: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    presents: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    staff: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
    more: yup.string().required(t(validationInputTexts.REQUIRED_FIELD)),
  });

  const initialValues = {
    food: '',
    drinks: '',
    sweets: '',
    decorations: '',
    costumes: '',
    photo: '',
    transport: '',
    presents: '',
    staff: '',
    more: '',
  };

  const handleClickSubmit = () => handleSubmit();

  const handleSubmitForm = () => {
    console.dir(values);
    const data = Object.values(values);
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum = sum + stringToNumber(data[i]);
    }

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
              value={values.food}
              onChange={handleChange}
              format="money"
              name="food"
              labelText={t('Food')}
            />
            <LabelInput
              value={values.drinks}
              onChange={handleChange}
              format="money"
              name="drinks"
              labelText={t('Drinks')}
            />
            <LabelInput
              value={values.sweets}
              onChange={handleChange}
              format="money"
              name="sweets"
              labelText={t('Sweets')}
            />
            <LabelInput
              value={values.decorations}
              onChange={handleChange}
              format="money"
              name="decorations"
              labelText={t('Decorations')}
            />
            <LabelInput
              value={values.costumes}
              onChange={handleChange}
              format="money"
              name="costumes"
              labelText={t('Costumes')}
            />
            <LabelInput
              value={values.photo}
              onChange={handleChange}
              format="money"
              name="photo"
              labelText={t('Photo and video exspenses')}
            />
            <LabelInput
              value={values.transport}
              onChange={handleChange}
              format="money"
              name="transport"
              labelText={t('Transportation')}
            />
            <LabelInput
              value={values.presents}
              onChange={handleChange}
              format="money"
              name="presents"
              labelText={t('Presents')}
            />
            <LabelInput
              value={values.staff}
              onChange={handleChange}
              format="money"
              name="staff"
              labelText={t('Hired staff')}
            />
            <LabelInput
              value={values.more}
              onChange={handleChange}
              format="money"
              name="more"
              marginBottom="0px"
              labelText={t('And more +')}
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

export default ToolContent_3;
