import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconMarkList from '../../assets/svg/icon-mark-list.svg';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';
import SvgIcon from '../SvgIcon';

interface Props {
  password: string;
}
const CheckListPassword = ({ password = '' }: Props) => {
  const { t } = useTranslation();
  const [isDone, setIsDone] = useState({
    count: false,
    letters: false,
    numbers: false,
  });

  const checkPassword = () => {
    const checkCount = 7 < password.length && password.length < 31;
    const checkLetters = !!(password.search(/[a-zA-Z]/) !== -1);
    const checkNumbers = !!(password.search(/\d/) !== -1);

    setIsDone({
      count: checkCount,
      letters: checkLetters,
      numbers: checkNumbers,
    });
  };

  useEffect(() => {
    checkPassword();
  }, [password]);

  return (
    <FlexContainer flexDirection="column">
      <FlexContainer alignItems="center" marginBottom="2px">
        <FlexContainer marginRight="10px">
          <SvgIcon
            {...IconMarkList}
            fillColor={isDone.count ? '#374DFB' : '#777C85'}
          />
        </FlexContainer>
        <PrimaryTextSpan
          fontSize="12px"
          color={isDone.count ? '#000' : '#777C85'}
        >
          {t('be between 8 to 31 characters')}
        </PrimaryTextSpan>
      </FlexContainer>
      {/*  */}
      <FlexContainer alignItems="center" marginBottom="2px">
        <FlexContainer marginRight="10px">
          <SvgIcon
            {...IconMarkList}
            fillColor={isDone.letters ? '#374DFB' : '#777C85'}
          />
        </FlexContainer>
        <PrimaryTextSpan
          fontSize="12px"
          color={isDone.letters ? '#000' : '#777C85'}
        >
          {t('contain at least one letter (a-z)')}
        </PrimaryTextSpan>
      </FlexContainer>
      {/*  */}
      <FlexContainer alignItems="center" marginBottom="20px">
        <FlexContainer marginRight="10px">
          <SvgIcon
            {...IconMarkList}
            fillColor={isDone.numbers ? '#374DFB' : '#777C85'}
          />
        </FlexContainer>
        <PrimaryTextSpan
          fontSize="12px"
          color={isDone.numbers ? '#000' : '#777C85'}
        >
          {t('contain at least one number (0-9)')}
        </PrimaryTextSpan>
      </FlexContainer>
    </FlexContainer>
  );
};

export default CheckListPassword;
