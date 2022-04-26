import React from 'react';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { PrimaryTextSpan } from '../styles/TextsElements';

const HomeLanding = () => {
  const { t } = useTranslation();
  return (
    <FlexContainer
      flexDirection="column"
      flex="1"
      overflow="auto"
      justifyContent="center"
      alignItems="center"
    >
      <FlexContainer
        width="620px"
        flexDirection="column"
        alignItems="center"
        marginBottom="60px"
      >
        <PrimaryTextSpan
          textAlign="center"
          fontWeight={500}
          fontSize="40px"
          lineHeight="48px"
          color="#000000"
          marginBottom="30px"
        >
          {t('We turn financial knowledge into rich people habits')}
        </PrimaryTextSpan>
        <PrimaryTextSpan
          textAlign="center"
          fontWeight={500}
          fontSize="18px"
          lineHeight="28px"
        >
          {t(
            'Here is everything you really should know about personal finance, modern investment opportunities and options to earn money online'
          )}
        </PrimaryTextSpan>
      </FlexContainer>

      <FlexContainer flexDirection="column" width="100%">
        <PrimaryTextSpan
          textAlign="center"
          fontSize="18px"
          color="#000000"
          fontWeight={500}
          marginBottom="32px"
        >
          {t('There are 3 steps that we provide for you:')}
        </PrimaryTextSpan>

        <FlexContainer
          width="100%"
          marginBottom="40px"
          justifyContent="space-between"
        >
          <FlexContainer
            width="300px"
            height="200px"
            backgroundColor="#F1F4F8"
            borderRadius="32px"
            padding="32px 48px 26px 32px"
            flexDirection="column"
            justifyContent="space-between"
          >
            <PrimaryTextSpan
              color="#000000"
              fontWeight={500}
              fontSize="40px"
              lineHeight="48px"
            >
              1.
            </PrimaryTextSpan>
            <PrimaryTextSpan
              color="#000000"
              fontSize="18px"
              fontWeight={500}
              lineHeight="28px"
            >
              {t('You get instructions how to rule your finance')}
            </PrimaryTextSpan>
          </FlexContainer>
          {/*  */}
          <FlexContainer
            width="300px"
            height="200px"
            backgroundColor="#F1F4F8"
            borderRadius="32px"
            padding="32px 48px 26px 32px"
            flexDirection="column"
            justifyContent="space-between"
          >
            <PrimaryTextSpan
              color="#000000"
              fontWeight={500}
              fontSize="40px"
              lineHeight="48px"
            >
              2.
            </PrimaryTextSpan>
            <PrimaryTextSpan
              color="#000000"
              fontSize="18px"
              fontWeight={500}
              lineHeight="28px"
            >
              {t('You change your habits with our support')}
            </PrimaryTextSpan>
          </FlexContainer>
          {/*  */}
          <FlexContainer
            width="300px"
            height="200px"
            backgroundColor="#F1F4F8"
            borderRadius="32px"
            padding="32px 32px 26px 32px"
            flexDirection="column"
            justifyContent="space-between"
          >
            <PrimaryTextSpan
              color="#000000"
              fontWeight={500}
              fontSize="40px"
              lineHeight="48px"
            >
              3.
            </PrimaryTextSpan>
            <PrimaryTextSpan
              color="#000000"
              fontSize="18px"
              fontWeight={500}
              lineHeight="28px"
            >
              {t(
                'You get coaching in Financial Psychology, Online Business, Investments'
              )}
            </PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer width="100%" justifyContent="center">
          <PrimaryButton width="300px">{t('Let`s start')}</PrimaryButton>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default HomeLanding;
