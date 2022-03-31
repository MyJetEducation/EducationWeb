import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';

import IconUnits from '../../assets/svg/unit/icon-units.svg';
import IconDuration from '../../assets/svg/unit/icon-duration.svg';
import IconVideo from '../../assets/svg/unit/icon-video.svg';
import IconTests from '../../assets/svg/unit/icon-tests.svg';
import SvgIcon from '../SvgIcon';

interface Props {
  title: string;
  number: number;
}

const StartedTutorial = ({ title, number }: Props) => {
  const { t } = useTranslation();
  return (
    <FlexContainer flexDirection="column" width="100%" marginBottom="24px">
      {/* Tutorial description */}
      <FlexContainer
        padding="32px"
        backgroundColor="#374DFB"
        borderRadius="32px"
        flexDirection="column"
        zIndex="2"
      >
        <PrimaryTextSpan
          color="#fff"
          fontSize="32px"
          fontWeight={500}
          lineHeight="40px"
          marginBottom="16px"
        >
          {`${number}. ${title}`}
        </PrimaryTextSpan>
        <PrimaryTextSpan
          marginBottom="16px"
          color="rgba(255, 255,255, 0.75)"
          lineHeight="24px"
        >
          This Discipline will teach how to manage your finance. Help you to
          build successful strategy to grow up your earnings...
        </PrimaryTextSpan>

        <FlexContainer
          height="2px"
          width="100%"
          backgroundColor="rgba(255,255,255,0.2)"
          marginBottom="16px"
        />

        <FlexContainer width="100%" justifyContent="space-between">
          <FlexContainer marginRight="4px" alignItems="center">
            <FlexContainer marginRight="12px">
              <SvgIcon {...IconUnits} fillColor="#fff" />
            </FlexContainer>
            <PrimaryTextSpan color="#fff">{`5 ${t('units')}`}</PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer marginRight="4px" alignItems="center">
            <FlexContainer marginRight="12px">
              <SvgIcon {...IconDuration} fillColor="#fff" />
            </FlexContainer>
            <PrimaryTextSpan color="#fff">{`${t(
              'Duration:'
            )} 2h 30m`}</PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer marginRight="4px" alignItems="center">
            <FlexContainer marginRight="12px">
              <SvgIcon {...IconVideo} fillColor="#fff" />
            </FlexContainer>
            <PrimaryTextSpan color="#fff">{`5 ${t('videos')}`}</PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer alignItems="center">
            <FlexContainer marginRight="12px">
              <SvgIcon {...IconTests} fillColor="#fff" />
            </FlexContainer>
            <PrimaryTextSpan color="#fff">{`5 ${t('tests')}`}</PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      {/* END Tutorial description */}

      {/* Units */}
      <UnitsListWrapper
        padding="48px 0 0 "
        zIndex="1"
        borderRadius="0 0 32px 32px"
        border="2px solid #C0C4C9"
        flexDirection="column"
      >
        <UnitListItem
          width="100%"
          padding="20px 32px"
          justifyContent="space-between"
        >
          <PrimaryTextSpan>
            Unit 1. You need a goal! Your goal by S.M.A.R.T.
          </PrimaryTextSpan>
          <PrimaryTextSpan>43 min</PrimaryTextSpan>
        </UnitListItem>

        <UnitListItem
          width="100%"
          padding="20px 32px"
          justifyContent="space-between"
        >
          <PrimaryTextSpan>
            Unit 1. You need a goal! Your goal by S.M.A.R.T.
          </PrimaryTextSpan>
          <PrimaryTextSpan>43 min</PrimaryTextSpan>
        </UnitListItem>

        <UnitListItem
          width="100%"
          padding="20px 32px"
          justifyContent="space-between"
        >
          <PrimaryTextSpan>
            Unit 1. You need a goal! Your goal by S.M.A.R.T.
          </PrimaryTextSpan>
          <PrimaryTextSpan>43 min</PrimaryTextSpan>
        </UnitListItem>
      </UnitsListWrapper>
      {/* Units */}
    </FlexContainer>
  );
};

export default StartedTutorial;

const UnitsListWrapper = styled(FlexContainer)`
  transform: translateY(-32px);
  border-top: none;
`;

const UnitListItem = styled(FlexContainer)`
  position: relative;
  &:not(&:last-of-type) {
    &:after {
      content: '';
      bottom: 0;
      left: 20px;
      width: calc(100% - 40px);
      height: 1px;
      background: #e0e5eb;
      position: absolute;
    }
  }
`;
