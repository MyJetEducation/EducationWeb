import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckListPassword from '../components/Form/CheckListPassword';
import LabelInput from '../components/Form/LabelInput';
import Fields from '../constants/fields';
import { PrimaryButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { AuthForm } from '../styles/FormControls';
import { PrimaryTextSpan } from '../styles/TextsElements';

const ResetPassord = () => {
  const { t } = useTranslation();
  const [isSent, setSent] = useState(false);

  return (
    <FlexContainer
      width="100%"
      flexDirection="column"
      alignItems="center"
      padding={isSent ? '16px' : '72px 0 32px'}
      justifyContent={isSent ? 'center' : 'flex-start'}
    >
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
            <PrimaryButton width="100%">{t('Log In')}</PrimaryButton>
          </FlexContainer>
        </>
      ) : (
        <>
          <AuthForm marginBottom="24px">
            <LabelInput
              id={Fields.PASSWORD}
              name={Fields.PASSWORD}
              labelText={t('New password')}
              type="password"
            />
            <LabelInput
              id={Fields.CONFIRM_PASSWORD}
              name={Fields.CONFIRM_PASSWORD}
              labelText={t('Confirm password')}
              type="password"
            />
            <CheckListPassword password="" />
            <PrimaryButton>{t('Change password')}</PrimaryButton>
          </AuthForm>
        </>
      )}
    </FlexContainer>
  );
};

export default ResetPassord;
