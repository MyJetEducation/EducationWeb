import React from 'react';
import { number } from 'yup';
import { FlexContainer } from '../../../styles/FlexContainer';
import { ProgressBar, ProgressBarTypesEnum } from '../../../styles/ProgressBar';
import { PrimaryTextSpan } from '../../../styles/TextsElements';
import SvgIcon from '../../SvgIcon';
import IconUnits from '../../../assets/svg/unit/icon-units.svg';
import IconDuration from '../../../assets/svg/unit/icon-duration.svg';
import IconVideo from '../../../assets/svg/unit/icon-video.svg';
import IconTests from '../../../assets/svg/unit/icon-tests.svg';
import IconTutorialDone from '../../../assets/svg/unit/icon-tutorial-done.svg';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../../hooks/useStores';
import UNITS_DATA from '../../../constants/Data/UnitsData/UnitsData';

interface Props {
  isDone: boolean;
  number: number;
}
const TutorialHeaderItem = ({ isDone, number }: Props) => {
  const { t } = useTranslation();
  const { tutorialStore } = useStores();

  const aboutUnitColor = isDone ? '#777C85' : '#fff';

  if (!tutorialStore.activeTutorial) {
    return null;
  }

  return (
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
          {`${number}. ${t(
            UNITS_DATA[tutorialStore.activeTutorial.tutorial].title
          )}`}
        </PrimaryTextSpan>
      </FlexContainer>
      <PrimaryTextSpan
        marginBottom="16px"
        color={isDone ? '#777C85' : 'rgba(255, 255,255, 0.75)'}
        lineHeight="24px"
      >
        {t(UNITS_DATA[tutorialStore.activeTutorial.tutorial].description)}
      </PrimaryTextSpan>
      {/*   */}
      {isDone && (
        <FlexContainer
          height="2px"
          width="100%"
          backgroundColor={isDone ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)'}
          marginBottom="16px"
        />
      )}

      {!isDone && (
        <FlexContainer marginBottom="16px">
          <ProgressBar
            progress={tutorialStore.activeTutorial.taskScore}
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
          <PrimaryTextSpan color={aboutUnitColor}>{`${
            UNITS_DATA[tutorialStore.activeTutorial.tutorial].info.units
          } ${t('units')}`}</PrimaryTextSpan>
        </FlexContainer>

        <FlexContainer marginRight="4px" alignItems="center">
          <FlexContainer marginRight="12px">
            <SvgIcon {...IconDuration} fillColor={aboutUnitColor} />
          </FlexContainer>
          <PrimaryTextSpan color={aboutUnitColor}>{`${t('Duration:')} ${
            UNITS_DATA[tutorialStore.activeTutorial.tutorial].info.duration
          }`}</PrimaryTextSpan>
        </FlexContainer>

        <FlexContainer marginRight="4px" alignItems="center">
          <FlexContainer marginRight="12px">
            <SvgIcon {...IconVideo} fillColor={aboutUnitColor} />
          </FlexContainer>
          <PrimaryTextSpan color={aboutUnitColor}>{`${
            UNITS_DATA[tutorialStore.activeTutorial.tutorial].info.videos
          } ${t('videos')}`}</PrimaryTextSpan>
        </FlexContainer>

        <FlexContainer alignItems="center">
          <FlexContainer marginRight="12px">
            <SvgIcon {...IconTests} fillColor={aboutUnitColor} />
          </FlexContainer>
          <PrimaryTextSpan color={aboutUnitColor}>{`${
            UNITS_DATA[tutorialStore.activeTutorial.tutorial].info.videos
          } ${t('tests')}`}</PrimaryTextSpan>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default TutorialHeaderItem;
