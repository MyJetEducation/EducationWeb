import React, { useMemo } from 'react';
import { FlexContainer } from '../../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../../styles/TextsElements';
import SvgIcon from '../../SvgIcon';

import IconUnits from '../../../assets/svg/unit/icon-units.svg';
import IconDuration from '../../../assets/svg/unit/icon-duration.svg';
import IconVideo from '../../../assets/svg/unit/icon-video.svg';
import IconTests from '../../../assets/svg/unit/icon-tests.svg';
import { TaskType } from '../../../types/TutorialTypes';
import UNITS_DATA from '../../../constants/Data/UnitsData/UnitsData';
import { useStores } from '../../../hooks/useStores';
import { useTranslation } from 'react-i18next';
import { TaskTypeEnum } from '../../../enums/TaskTypeEnum';

interface Props {
  item: TaskType;
  unit: number;
}
const TutorialTaskItem = ({ item, unit }: Props) => {
  const { t } = useTranslation();
  const { tutorialStore } = useStores();

  const task = useMemo(() => {
    if (!tutorialStore.activeTutorial) {
      return null;
    }
    return UNITS_DATA[tutorialStore.activeTutorial?.tutorial].units
      .find((el) => el.id === unit)
      ?.tasks.find((el) => el.id === item.task);
  }, [tutorialStore.activeTutorial]);

  const TaskIcon = useMemo(() => {
    switch (task?.type) {
      case TaskTypeEnum.Case:
        return IconUnits;
      case TaskTypeEnum.Test:
        return IconTests;
      case TaskTypeEnum.Text:
        return IconUnits;
      case TaskTypeEnum.Game:
        return IconUnits;
      case TaskTypeEnum.Video:
        return IconVideo;
      default:
        return IconUnits;
    }
  }, [task]);

  const taskTypeName = useMemo(() => {
    switch (task?.type) {
      case TaskTypeEnum.Case:
        return 'Case';

      case TaskTypeEnum.Test:
        return 'Test';
      case TaskTypeEnum.Text:
        return 'Text';
      case TaskTypeEnum.Game:
        return 'Case';
      case TaskTypeEnum.Video:
        return 'Video';
      default:
        return '';
    }
  }, [task]);

  //
  if (!task) {
    return null;
  }
  return (
    <FlexContainer
      padding="8px 0"
      alignItems="center"
      justifyContent="space-between"
    >
      <FlexContainer alignItems="center">
        <FlexContainer marginRight="10px">
          <SvgIcon {...TaskIcon} fillColor="#C0C4C9" />
        </FlexContainer>
        <PrimaryTextSpan color="#000" fontSize="16px">
          {`${unit}.${task.id} ${t(taskTypeName)}: ${t(task.title)}`}
        </PrimaryTextSpan>
      </FlexContainer>

      <PrimaryTextSpan color="#777C85" fontSize="16px">
        {t(task.duration)}
      </PrimaryTextSpan>
    </FlexContainer>
  );
};

export default TutorialTaskItem;
