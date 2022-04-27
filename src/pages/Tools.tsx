import { css, Global } from '@emotion/core';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ToolItemBtn from '../components/Tools/ToolItemBtn';
import { CALCULATORS_DATA, CHECKLISTS_DATA } from '../constants/Data/ToolsData';
import CenterContainer from '../containers/CenterContainer';
import { ColorVarsEnum } from '../enums/ColorVarsEnum';
import { FlexContainer } from '../styles/FlexContainer';
import { TitleH1, TitleH5 } from '../styles/Titles';

const Tools = () => {
  const { t } = useTranslation();

  return (
    <CenterContainer>
      <FlexContainer flex="1" padding="44px 0">
        <Container>
          <Row>
            <Col>
              <FlexContainer marginBottom="50px">
                <TitleH1>{t('Tools')}</TitleH1>
              </FlexContainer>
            </Col>
          </Row>

          <Row className="justify-content-between">
            <Col xs="5">
              <TitleH5>{t('Calculators')}</TitleH5>

              <FlexContainer flexDirection="column" padding="16px 0">
                {CALCULATORS_DATA.map((calc) => (
                  <ToolItemBtn
                    type="calc"
                    name={t(calc.name)}
                    id={calc.id}
                    key={calc.id}
                  />
                ))}
              </FlexContainer>
            </Col>
            <Col xs="6">
              <TitleH5>{t('Checklists')}</TitleH5>

              <FlexContainer flexDirection="column" padding="16px 0">
                {CHECKLISTS_DATA.map((check) => (
                  <ToolItemBtn
                    type="check"
                    name={t(check.name)}
                    id={check.id}
                    key={check.id}
                  />
                ))}
              </FlexContainer>
            </Col>
          </Row>
        </Container>
      </FlexContainer>
    </CenterContainer>
  );
};

export default Tools;
