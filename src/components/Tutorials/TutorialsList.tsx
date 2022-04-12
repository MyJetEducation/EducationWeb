import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react';
import UNITS_DATA from '../../constants/Data/UnitsData/UnitsData';
import { useStores } from '../../hooks/useStores';
import LoaderForComponent from '../Preloader/LoaderForComponent';
import LockedTutorial from './LockedTutorial';
import StartedTutorial from './StartedTutorial/StartedTutorial';

interface Props {
  isLoading: boolean;
}
const TutorialsList = observer(({ isLoading }: Props) => {
  const { tutorialStore } = useStores();

  useEffect(() => {
    (async () => {
      try {
        const currentTutorial = tutorialStore.startedTutorial;
        if (currentTutorial) {
          await tutorialStore.getTutorial(currentTutorial.tutorial);
        }
      } catch (error) {}
    })();
  }, [tutorialStore.tutorials]);

  if (isLoading) {
    return <LoaderForComponent isLoading={isLoading} />;
  }

  return (
    <>
      {tutorialStore.tutorials?.map((item, i) =>
        tutorialStore.startedTutorial?.tutorial === item.tutorial ? (
          <StartedTutorial
            isDone={item.finished}
            key={item.tutorial}
            number={i + 1}
          />
        ) : (
          <LockedTutorial
            key={item.tutorial}
            title={`${item.tutorial}`}
            number={i + 1}
          />
        )
      )}
    </>
  );
});

export default TutorialsList;
