import React from 'react';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';
import { ButtonWithoutStyles } from '../../styles/ButtonWithoutStyles';

import maskot from '../../assets/images/maskot.png';
import ArrowIcon from '../../assets/svg/arrow-icon.svg';
import SvgIcon from '../SvgIcon';
import { useTranslation } from 'react-i18next';

interface OnboardingProps {
  text: string;
  showNext: boolean;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  onClickNext: () => void;
}

const ObHint = ({ text, showNext, position, onClickNext }: OnboardingProps) => {
  const { t } = useTranslation();
  return (
    <FlexContainer
      width="268px"
      flexDirection="column"
      position="absolute"
      top={position?.top || ''}
      left={position?.left || ''}
      bottom={position?.bottom || ''}
      right={position?.right || ''}
    >
      <FlexContainer
        width="100%"
        backgroundColor="#000"
        borderRadius="32px"
        height="fir-content"
        padding="20px"
        marginBottom="-40px"
        flexDirection="column"
        alignItems="flex-start"
      >
        <PrimaryTextSpan
          fontWeight={700}
          fontSize="18px"
          lineHeight="28px"
          color="#FFFFFF"
          marginBottom="12px"
        >
          {t(text)}
        </PrimaryTextSpan>
        {showNext && (
          <ButtonWithoutStyles onClick={onClickNext}>
            <FlexContainer alignItems="center">
              <PrimaryTextSpan
                fontWeight={500}
                color="#FFFFFF"
                marginRight="8px"
              >
                {t('Next')}
              </PrimaryTextSpan>
              <SvgIcon {...ArrowIcon} fillColor="#fff" />
            </FlexContainer>
          </ButtonWithoutStyles>
        )}
      </FlexContainer>
      <FlexContainer
        width="100%"
        justifyContent="center"
        zIndex="-1"
        position="relative"
      >
        <FlexContainer
          position="absolute"
          top="46px"
          left="46px"
          width="14px"
          height="14px"
          borderRadius="50%"
          backgroundColor="#000"
        />
        <FlexContainer
          position="absolute"
          top="66px"
          left="66px"
          width="6px"
          height="6px"
          borderRadius="50%"
          backgroundColor="#000"
        />
        <img src={maskot} alt="maskot" />
      </FlexContainer>
    </FlexContainer>
  );
};

export default ObHint;
