import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import IconCheck from '../../../assets/svg/unit/icon-check.svg';
import IconCheckError from '../../../assets/svg/unit/icon-check-error.svg';

import SvgIcon from '../../SvgIcon';
import { UnitsListWrapper } from '../../../styles/Units';

import LoaderForComponent from '../../Preloader/LoaderForComponent';
import { useStores } from '../../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { FlexContainer } from '../../../styles/FlexContainer';
import TutorialHeaderItem from './TutorialHeaderItem';
import TutorialUnitActiveItem from './TutorialUnitActiveItem';
import TutorialUnitItem from './TutorialUnitItem';
import { UnitWithDataType } from '../../../types/TutorialTypes';

interface Props {
  number: number;
  isDone: boolean;
}

const StartedTutorial = observer(({ isDone, number }: Props) => {
  const { t } = useTranslation();

  const { tutorialStore } = useStores();

  // state component

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

  if (!tutorialStore.unitsWithData) {
    return <LoaderForComponent isLoading={true} />;
  }

  return (
    <FlexContainer
      flexDirection="column"
      width="100%"
      marginBottom={isDone ? '24px' : '0px'}
    >
      {/* Tutorial description */}
      <TutorialHeaderItem number={number} isDone={isDone} />
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
          {tutorialStore.unitsWithData.map((el: UnitWithDataType) => (
            <React.Fragment key={el.unit.unit}>
              {isActiveUnit(el.unit.unit) ? (
                <TutorialUnitActiveItem
                  item={el}
                  isActive={isActiveUnit(el.unit.unit)}
                  isFirstItem={isFirstItem(el.unit.unit)}
                />
              ) : (
                <TutorialUnitItem item={el} />
              )}
            </React.Fragment>
          ))}
        </UnitsListWrapper>
      )}
      {/* Units */}
    </FlexContainer>
  );
});

export default StartedTutorial;
