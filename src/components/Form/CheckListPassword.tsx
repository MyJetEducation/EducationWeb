import React from 'react';
import { useTranslation } from 'react-i18next';
import IconMarkList from '../../assets/svg/icon-mark-list.svg';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';
import SvgIcon from '../SvgIcon';

interface Props {
  password: string;
}
const CheckListPassword = ({ password }: Props) => {
  const { t } = useTranslation();

  return (
    <FlexContainer flexDirection="column">
      <FlexContainer alignItems="center" marginBottom="8px">
        <FlexContainer marginRight="10px">
          <SvgIcon {...IconMarkList} fillColor="#777C85" />
          {/* #374DFB */}
        </FlexContainer>
        <PrimaryTextSpan>{t('be between 8 to 31 characters')}</PrimaryTextSpan>
      </FlexContainer>
      {/*  */}
      <FlexContainer alignItems="center" marginBottom="8px">
        <FlexContainer marginRight="10px">
          <SvgIcon {...IconMarkList} fillColor="#777C85" />
        </FlexContainer>
        <PrimaryTextSpan>
          {t('contain at least one letter (a-z)')}
        </PrimaryTextSpan>
      </FlexContainer>
      {/*  */}
      <FlexContainer alignItems="center" marginBottom="24px">
        <FlexContainer marginRight="10px">
          <SvgIcon {...IconMarkList} fillColor="#777C85" />
        </FlexContainer>
        <PrimaryTextSpan>
          {t('contain at least one number (0-9)')}
        </PrimaryTextSpan>
      </FlexContainer>
    </FlexContainer>
  );
};

export default CheckListPassword;
