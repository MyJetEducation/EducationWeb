import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react';
import UNITS_DATA from '../../constants/Data/UnitsData/UnitsData';
import { useStores } from '../../hooks/useStores';
import LoaderForComponent from '../Preloader/LoaderForComponent';
import LockedTutorial from './LockedTutorial';
import StartedTutorial from './StartedTutorial';

interface Props {
  isLoading: boolean;
}
const TutorialsList = observer(({ isLoading }: Props) => {
  const { tutorialStore } = useStores();

  const tutorialItemData = useMemo(() => {
    if (!tutorialStore.activeTutorial?.tutorial) {
      return null;
    }
    return UNITS_DATA[tutorialStore.activeTutorial?.tutorial];
  }, [tutorialStore.activeTutorial]);

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
            item={tutorialItemData}
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
