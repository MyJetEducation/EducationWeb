import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';

import IconUnits from '../../assets/svg/unit/icon-units.svg';
import IconDuration from '../../assets/svg/unit/icon-duration.svg';
import IconVideo from '../../assets/svg/unit/icon-video.svg';
import IconTests from '../../assets/svg/unit/icon-tests.svg';
import IconCheck from '../../assets/svg/unit/icon-check.svg';
import IconCheckError from '../../assets/svg/unit/icon-check-error.svg';

import SvgIcon from '../SvgIcon';
import { AccentButton } from '../../styles/Buttons';
import { css } from '@emotion/core';
import { ButtonWithoutStyles } from '../../styles/ButtonWithoutStyles';
import { UnitListMArker } from '../../styles/Units';
import { ProgessBar } from '../../styles/ProgressBar';

interface Props {
  title: string;
  number: number;
}

const StartedTutorial = ({ title, number }: Props) => {
  const { t } = useTranslation();

  // state component
  const [isOpenUnitList, setIsOpenUnitList] = useState(false);
  const isFirstItem = false;
  const activeUnit = 1;
  // end state component

  const handleClickOpenList = () => {
    setIsOpenUnitList(!isOpenUnitList);
  };

  return (
    <FlexContainer flexDirection="column" width="100%" marginBottom="0px">
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
        {/*  */}
        {/* <FlexContainer
          height="2px"
          width="100%"
          backgroundColor="rgba(255,255,255,0.2)"
          marginBottom="16px"
        /> */}
        <FlexContainer marginBottom="16px">
          <ProgessBar progress={10} />
        </FlexContainer>
        {/*  */}
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
          <PrimaryTextSpan fontWeight="bold">
            Unit 1. You need a goal! Your goal by S.M.A.R.T.
          </PrimaryTextSpan>
          <PrimaryTextSpan>43 min</PrimaryTextSpan>
        </UnitListItem>

        <UnitListItem
          width="100%"
          padding="20px 32px"
          justifyContent="space-between"
        >
          <PrimaryTextSpan fontWeight="bold">
            Unit 1. You need a goal! Your goal by S.M.A.R.T.
          </PrimaryTextSpan>
          <PrimaryTextSpan>43 min</PrimaryTextSpan>
        </UnitListItem>

        <UnitListItem
          width="100%"
          padding="20px 32px"
          justifyContent="space-between"
        >
          <PrimaryTextSpan fontWeight="bold">
            Unit 1. You need a goal! Your goal by S.M.A.R.T.
          </PrimaryTextSpan>
          <PrimaryTextSpan>43 min</PrimaryTextSpan>
        </UnitListItem>

        <UnitListItem
          width="100%"
          padding="20px 32px"
          flexDirection="column"
          isActive={activeUnit === 1}
          isFirstItem={isFirstItem}
        >
          <ButtonWithoutStyles onClick={handleClickOpenList}>
            <FlexContainer justifyContent="space-between">
              <FlexContainer alignItems="center">
                <UnitListMArker isOpen={isOpenUnitList} />
                <PrimaryTextSpan fontWeight="bold" color="#000">
                  Unit 1. You need a goal! Your goal by S.M.A.R.T.
                </PrimaryTextSpan>
              </FlexContainer>
              <PrimaryTextSpan>43 min</PrimaryTextSpan>
            </FlexContainer>
          </ButtonWithoutStyles>

          {isOpenUnitList && (
            <FlexContainer flexDirection="column" padding="8px 0 0 22px">
              <FlexContainer
                padding="8px 0"
                alignItems="center"
                justifyContent="space-between"
              >
                <FlexContainer alignItems="center">
                  <FlexContainer marginRight="10px">
                    <SvgIcon {...IconUnits} fillColor="#C0C4C9" />
                  </FlexContainer>
                  <PrimaryTextSpan color="#000" fontSize="16px">
                    1.1 Text: Your goal by S.M.A.R.T. and life cases
                  </PrimaryTextSpan>
                </FlexContainer>

                <PrimaryTextSpan color="#777C85" fontSize="16px">
                  ≈5 min
                </PrimaryTextSpan>
              </FlexContainer>

              <FlexContainer
                padding="8px 0"
                alignItems="center"
                justifyContent="space-between"
              >
                <FlexContainer alignItems="center">
                  <FlexContainer marginRight="10px">
                    <SvgIcon {...IconUnits} fillColor="#C0C4C9" />
                  </FlexContainer>
                  <PrimaryTextSpan color="#000" fontSize="16px">
                    1.1 Text: Your goal by S.M.A.R.T. and life cases
                  </PrimaryTextSpan>
                </FlexContainer>

                <PrimaryTextSpan color="#777C85" fontSize="16px">
                  ≈5 min
                </PrimaryTextSpan>
              </FlexContainer>

              <FlexContainer
                padding="8px 0"
                alignItems="center"
                justifyContent="space-between"
              >
                <FlexContainer alignItems="center">
                  <FlexContainer marginRight="10px">
                    <SvgIcon {...IconUnits} fillColor="#C0C4C9" />
                  </FlexContainer>
                  <PrimaryTextSpan color="#000" fontSize="16px">
                    1.1 Text: Your goal by S.M.A.R.T. and life cases
                  </PrimaryTextSpan>
                </FlexContainer>

                <PrimaryTextSpan color="#777C85" fontSize="16px">
                  ≈5 min
                </PrimaryTextSpan>
              </FlexContainer>
            </FlexContainer>
          )}

          {/* is active unit */}
          <FlexContainer justifyContent="center" padding="24px 0 0">
            <AccentButton width="300px">{`${t('Start')} Unit 1`}</AccentButton>
          </FlexContainer>
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

const UnitListItem = styled(FlexContainer)<{
  isActive?: boolean;
  isFirstItem?: boolean;
}>`
  position: relative;
  &:not(&:last-of-type) {
    &:after {
      display: ${(props) => (props.isActive ? 'none' : 'block')};
      content: '';
      bottom: 0;
      left: 20px;
      width: calc(100% - 40px);
      height: 1px;
      background: #e0e5eb;
      position: absolute;
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      box-shadow: 0 0 0 2px #374dfb;
      border-radius: 32px;
    `}

  ${(props) =>
    props.isActive &&
    props.isFirstItem &&
    css`
      padding-top: 44px;
      border-top: none;
      border-radius: 0 0 32px 32px;
      margin-top: -40px;
    `}
`;
