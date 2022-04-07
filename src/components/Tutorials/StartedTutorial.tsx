import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';

import IconUnits from '../../assets/svg/unit/icon-units.svg';
import IconDuration from '../../assets/svg/unit/icon-duration.svg';
import IconVideo from '../../assets/svg/unit/icon-video.svg';
import IconTests from '../../assets/svg/unit/icon-tests.svg';
import IconCheck from '../../assets/svg/unit/icon-check.svg';
import IconCheckError from '../../assets/svg/unit/icon-check-error.svg';

import IconTutorialDone from '../../assets/svg/unit/icon-tutorial-done.svg';

import SvgIcon from '../SvgIcon';
import { AccentButton } from '../../styles/Buttons';
import { css } from '@emotion/core';
import { ButtonWithoutStyles } from '../../styles/ButtonWithoutStyles';
import { UnitListMArker } from '../../styles/Units';
import { ProgressBar, ProgressBarTypesEnum } from '../../styles/ProgressBar';
import { TutorialDataType, TutorialItemType } from '../../types/TutorialTypes';
import LoaderForComponent from '../Preloader/LoaderForComponent';
import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';

interface Props {
  item: TutorialDataType | null;
  number: number;
  isDone: boolean;
}

const StartedTutorial = observer(({ isDone, item, number }: Props) => {
  const { t } = useTranslation();

  const { tutorialStore } = useStores();

  // state component
  const [isOpenUnitList, setIsOpenUnitList] = useState(false);

  const isFirstItem = useCallback(
    (id: number) => {
      return !!(
        tutorialStore.activeTutorial?.units.findIndex(
          (unit) => unit.unit === id
        ) === 0
      );
    },
    [tutorialStore.activeTutorial]
  );

  const isActiveUnit = useCallback(
    (id: number) => {
      return !!tutorialStore.activeTutorial?.units.find(
        (unit) => unit.unit === id
      )?.hasProgress;
    },
    [tutorialStore.activeTutorial]
  );

  const activeUnit = 1;

  // end state component

  // colors
  const aboutUnitColor = isDone ? '#777C85' : '#fff';

  const handleClickOpenList = () => {
    setIsOpenUnitList(!isOpenUnitList);
  };

  if (!item) {
    return <LoaderForComponent isLoading />;
  }

  return (
    <FlexContainer
      flexDirection="column"
      width="100%"
      marginBottom={isDone ? '24px' : '0px'}
    >
      {/* Tutorial description */}
      <FlexContainer
        padding="32px"
        backgroundColor={isDone ? '#E8F9E8' : '#374DFB'}
        borderRadius="32px"
        flexDirection="column"
        zIndex="2"
      >
        <FlexContainer alignItems="center" marginBottom="16px">
          {isDone && (
            <FlexContainer marginRight="12px">
              <SvgIcon {...IconTutorialDone} fillColor="#0BCA1E" />
            </FlexContainer>
          )}
          <PrimaryTextSpan
            color={isDone ? '#0BCA1E' : '#fff'}
            fontSize="32px"
            fontWeight={500}
            lineHeight="40px"
          >
            {`${number}. ${t(item.title)}`}
          </PrimaryTextSpan>
        </FlexContainer>
        <PrimaryTextSpan
          marginBottom="16px"
          color={isDone ? '#777C85' : 'rgba(255, 255,255, 0.75)'}
          lineHeight="24px"
        >
          {t(item.description)}
        </PrimaryTextSpan>
        {/*   */}
        {isDone && (
          <FlexContainer
            height="2px"
            width="100%"
            backgroundColor={
              isDone ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)'
            }
            marginBottom="16px"
          />
        )}

        {!isDone && (
          <FlexContainer marginBottom="16px">
            <ProgressBar
              progress={tutorialStore.activeTutorial?.taskScore || 1}
              type={ProgressBarTypesEnum.DEFAULT}
            />
          </FlexContainer>
        )}

        {/* Info about Tutorial */}
        <FlexContainer width="100%" justifyContent="space-between">
          <FlexContainer marginRight="4px" alignItems="center">
            <FlexContainer marginRight="12px">
              <SvgIcon {...IconUnits} fillColor={aboutUnitColor} />
            </FlexContainer>
            <PrimaryTextSpan color={aboutUnitColor}>{`${item.info.units} ${t(
              'units'
            )}`}</PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer marginRight="4px" alignItems="center">
            <FlexContainer marginRight="12px">
              <SvgIcon {...IconDuration} fillColor={aboutUnitColor} />
            </FlexContainer>
            <PrimaryTextSpan color={aboutUnitColor}>{`${t('Duration:')} ${
              item.info.duration
            }`}</PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer marginRight="4px" alignItems="center">
            <FlexContainer marginRight="12px">
              <SvgIcon {...IconVideo} fillColor={aboutUnitColor} />
            </FlexContainer>
            <PrimaryTextSpan color={aboutUnitColor}>{`${item.info.videos} ${t(
              'videos'
            )}`}</PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer alignItems="center">
            <FlexContainer marginRight="12px">
              <SvgIcon {...IconTests} fillColor={aboutUnitColor} />
            </FlexContainer>
            <PrimaryTextSpan color={aboutUnitColor}>{`${item.info.tests} ${t(
              'tests'
            )}`}</PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      {/* END Tutorial description */}

      {/* Units */}
      {!isDone && (
        <UnitsListWrapper
          padding="48px 0 0 "
          zIndex="1"
          borderRadius="0 0 32px 32px"
          border="2px solid #C0C4C9"
          flexDirection="column"
        >
          {item.units.map((unit) => (
            <>
              {isActiveUnit(unit.id) ? (
                <UnitListItem
                  key={unit.id}
                  width="100%"
                  padding="20px 32px"
                  flexDirection="column"
                  isActive={isActiveUnit(unit.id)}
                  isFirstItem={isFirstItem(unit.id)}
                >
                  <ButtonWithoutStyles onClick={handleClickOpenList}>
                    <FlexContainer justifyContent="space-between">
                      <FlexContainer alignItems="center">
                        <UnitListMArker isOpen={isOpenUnitList} />
                        <PrimaryTextSpan fontWeight="bold" color="#000">
                          {`${t('Unit')} ${unit.id}. ${t(item.title)}`}
                        </PrimaryTextSpan>
                      </FlexContainer>
                      <PrimaryTextSpan>{unit.duration}</PrimaryTextSpan>
                    </FlexContainer>
                  </ButtonWithoutStyles>

                  {isOpenUnitList && (
                    <FlexContainer
                      flexDirection="column"
                      padding="8px 0 0 22px"
                    >
                      {/* tasks */}
                      {unit.tasks.map((task) => (
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
                              {`${unit.id}.${task.id} ${t(task.title)}`}
                            </PrimaryTextSpan>
                          </FlexContainer>

                          <PrimaryTextSpan color="#777C85" fontSize="16px">
                            {task.duration}
                          </PrimaryTextSpan>
                        </FlexContainer>
                      ))}

                      {/* tasks */}
                    </FlexContainer>
                  )}

                  {/* is active unit */}
                  <FlexContainer justifyContent="center" padding="24px 0 0">
                    <AccentButton width="300px">{`${t('Start')} Unit ${
                      unit.id
                    }`}</AccentButton>
                  </FlexContainer>
                </UnitListItem>
              ) : (
                <UnitListItem
                  width="100%"
                  padding="20px 32px"
                  justifyContent="space-between"
                >
                  <PrimaryTextSpan fontWeight="bold">
                    {`${t('Unit')} ${unit.id}. ${t(unit.title)}`}
                  </PrimaryTextSpan>
                  <PrimaryTextSpan>{unit.duration}</PrimaryTextSpan>
                </UnitListItem>
              )}
            </>
          ))}
        </UnitsListWrapper>
      )}
      {/* Units */}
    </FlexContainer>
  );
});

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
