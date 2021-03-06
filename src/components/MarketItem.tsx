import React, { useState } from 'react';
import { FlexContainer } from '../styles/FlexContainer';
import { PrimaryTextSpan } from '../styles/TextsElements';
import SvgIcon from './SvgIcon';

import CartIcon from '../assets/svg/cart-icon.svg';
import CheckIcon from '../assets/svg/check-icon.svg';
import { ButtonWithoutStyles } from '../styles/ButtonWithoutStyles';

interface Props {
  className?: string;
  isOBItem?: boolean;
  obClickNext?: () => void;
}
const MarketItem = ({
  className = '',
  isOBItem,
  obClickNext = () => {},
}: Props) => {
  const [isBuy, setBuy] = useState(false);

  const handleClickBuy = () => {
    if (isOBItem) {
      obClickNext();
    }
    setBuy(true);
  };

  return (
    <FlexContainer className={className} width="220px">
      <FlexContainer
        padding="30px 0 16px"
        border="2px solid #0BCA1E"
        borderRadius="32px"
        flexDirection="column"
      >
        <FlexContainer padding="0 30px" flexDirection="column">
          <FlexContainer
            width="100%"
            height="120px"
            backgroundColor="#F1F4F8"
            marginBottom="23px"
          />
          <PrimaryTextSpan
            maxWidth="115px"
            fontWeight={700}
            fontSize="18px"
            lineHeight="28px"
            color="#000000"
            marginBottom="12px"
          >
            5 попыток прохождения
          </PrimaryTextSpan>
          <PrimaryTextSpan fontWeight={400} color="#000000" marginBottom="19px">
            Small descriptio about this item
          </PrimaryTextSpan>
        </FlexContainer>
        <FlexContainer padding="0 16px 0 30px" justifyContent="space-between">
          <PrimaryTextSpan
            fontWeight={700}
            fontSize="18px"
            lineHeight="28px"
            color="#0BCA1E"
          >
            {isBuy ? 'Активировано' : 'Бесплатно'}
          </PrimaryTextSpan>
          <ButtonWithoutStyles
            className="market-buy-button"
            onClick={handleClickBuy}
          >
            <FlexContainer
              width="32px"
              height="32px"
              backgroundColor={isBuy ? '0BCA1E' : '#000'}
              justifyContent="center"
              alignItems="center"
              borderRadius="50%"
              cursor="pointer"
            >
              {isBuy ? (
                <SvgIcon {...CheckIcon} fillColor="#fff" />
              ) : (
                <SvgIcon {...CartIcon} fillColor="#fff" />
              )}
            </FlexContainer>
          </ButtonWithoutStyles>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default MarketItem;
