import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ColorVarsEnum } from '../enums/ColorVarsEnum';
import { PrimaryButton } from '../styles/Buttons';
import { FlexContainer } from '../styles/FlexContainer';
import { PrimaryTextParagraph, PrimaryTextSpan } from '../styles/TextsElements';
import { TitleH0, TitleH2 } from '../styles/Titles';
import HeaderImage from '../assets/images/header-landing-img.png';
import { ResponsiveImage } from '../styles/Images';

const HomeLanding = () => {
  const { t } = useTranslation();
  return (
    <FlexContainer
      justifyContent="center"
      flexWrap="wrap"
      width="100%"
      padding="70px 0"
      overflow="auto"
      backgroundColor={`var(${ColorVarsEnum.BG_accent})`}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs="12" md="6">
            <FlexContainer width="470px" maxWidth="100%" flexDirection="column">
              <TitleH0 marginBottom="34px">
                We turn financial{' '}
                <span style={{ color: `var(${ColorVarsEnum.Accent})` }}>
                  knowledge
                </span>{' '}
                into <br /> rich people{' '}
                <span style={{ color: `var(${ColorVarsEnum.Primary})` }}></span>
              </TitleH0>
              <PrimaryTextParagraph fontSize="20px" lineHeight="30px">
                {t(
                  'Here is everything you really should know about personal finance, modern investment opportunities and options to earn money online'
                )}
              </PrimaryTextParagraph>
            </FlexContainer>
          </Col>

          <Col xs="12" md="6">
            <ResponsiveImage src={HeaderImage} />
          </Col>
        </Row>

        <Row>
          <Col>
            <TitleH2 fontSize="32px" marginBottom="52px">
              {t('3 steps that we provide for you: ')}
            </TitleH2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <FlexContainer width="100%">
              <FlexContainer
                height="48px"
                width="48px"
                backgroundColor={`var(${ColorVarsEnum.BG_block})`}
                borderRadius="50%"
                justifyContent="center"
                alignItems="center"
                marginRight="20px"
              >
                <PrimaryTextSpan
                  color={`var(${ColorVarsEnum.Text})`}
                  fontSize="20px"
                  lineHeight="1"
                >
                  1
                </PrimaryTextSpan>
              </FlexContainer>
              <FlexContainer width="200px">
                <PrimaryTextSpan
                  fontSize="20px"
                  lineHeight="30px"
                  color={`var(${ColorVarsEnum.Text})`}
                >
                  {t('You get instructions how to rule your finance')}
                </PrimaryTextSpan>
              </FlexContainer>
            </FlexContainer>
          </Col>

          <Col xs="12" md="4">
            <FlexContainer width="100%">
              <FlexContainer
                height="48px"
                width="48px"
                backgroundColor={`var(${ColorVarsEnum.BG_block})`}
                borderRadius="50%"
                justifyContent="center"
                alignItems="center"
                marginRight="20px"
              >
                <PrimaryTextSpan
                  color={`var(${ColorVarsEnum.Text})`}
                  fontSize="20px"
                  lineHeight="1"
                >
                  2
                </PrimaryTextSpan>
              </FlexContainer>
              <FlexContainer width="200px">
                <PrimaryTextSpan
                  fontSize="20px"
                  lineHeight="30px"
                  color={`var(${ColorVarsEnum.Text})`}
                >
                  {t('You change your habits with our support')}
                </PrimaryTextSpan>
              </FlexContainer>
            </FlexContainer>
          </Col>

          <Col xs="12" md="4">
            <FlexContainer width="100%">
              <FlexContainer
                height="48px"
                width="48px"
                backgroundColor={`var(${ColorVarsEnum.BG_block})`}
                borderRadius="50%"
                justifyContent="center"
                alignItems="center"
                marginRight="20px"
              >
                <PrimaryTextSpan
                  color={`var(${ColorVarsEnum.Text})`}
                  fontSize="20px"
                  lineHeight="1"
                >
                  3
                </PrimaryTextSpan>
              </FlexContainer>
              <FlexContainer width="200px">
                <PrimaryTextSpan
                  fontSize="20px"
                  lineHeight="30px"
                  color={`var(${ColorVarsEnum.Text})`}
                >
                  {t(
                    'You get coaching in Financial Psychology, Online Business, Investments'
                  )}
                </PrimaryTextSpan>
              </FlexContainer>
            </FlexContainer>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs="12" md="3">
            <FlexContainer width="100%" padding="20px 0">
              <PrimaryButton width="100%">{t('Get started')}</PrimaryButton>
            </FlexContainer>
          </Col>
        </Row>
      </Container>
    </FlexContainer>
  );
};

export default HomeLanding;
