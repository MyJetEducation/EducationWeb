import React, { useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Route, useParams } from 'react-router-dom';
import { CALCULATORS_DATA, CHECKLISTS_DATA } from '../constants/Data/ToolsData';
import CenterContainer from '../containers/CenterContainer';
import { ColorVarsEnum } from '../enums/ColorVarsEnum';
import { FlexContainer } from '../styles/FlexContainer';
import { PrimaryTextParagraph } from '../styles/TextsElements';
import { TitleH1 } from '../styles/Titles';

const ToolsInner = () => {
  const { t } = useTranslation();
  const { toolId } = useParams<{ toolId: string }>();

  const activeTool = useMemo(() => {
    const data = [...CALCULATORS_DATA, ...CHECKLISTS_DATA];
    return data.find((tool) => tool.id === toolId);
  }, [toolId]);

  return (
    <CenterContainer padding="44px 0" backgroundColor="#fff">
      <Container>
        <Row>
          <Col>
            <FlexContainer marginBottom="50px" flexDirection="column">
              <TitleH1 marginBottom="40px">{t(`${activeTool?.name}`)}</TitleH1>
              {activeTool?.description && (
                <Col xs="12" md="7">
                  {' '}
                  <PrimaryTextParagraph
                    fontSize="16px"
                    lineHeight="24px"
                    color={`var(${ColorVarsEnum.Text})`}
                  >
                    {t(`${activeTool?.description}`)}
                  </PrimaryTextParagraph>
                </Col>
              )}
            </FlexContainer>
          </Col>
        </Row>
        {activeTool?.Content && <activeTool.Content />}
      </Container>
    </CenterContainer>
  );
};

export default ToolsInner;
