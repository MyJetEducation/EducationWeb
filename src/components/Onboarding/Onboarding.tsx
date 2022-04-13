import React, { useCallback, useEffect, useState } from 'react';
import { FlexContainer } from '../../styles/FlexContainer';
import ObHint from './ObHint';
import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import Page from '../../routing/Pages';
import { CONTENT_WIDTH, FULL_VH } from '../../constants/global';
import styled from '@emotion/styled';

// TODO
// check keyValue
// if init onboarding +
// push to dashboard +
// show hints +
// save onboarding status
//

const Onboarding = observer(() => {
  const { onBoardingStore } = useStores();
  const { push, location } = useHistory();

  const handleClickDocument = (e: any) => {
    console.log(onBoardingStore.activeHint.element);
    if (
      onBoardingStore.activeHint.actionElement &&
      onBoardingStore.activeHint.element !== 'hint_7'
    ) {
      if (
        e.target.classList.contains(onBoardingStore.activeHint.targetElement)
      ) {
        onBoardingStore.setNextStep();
        push(onBoardingStore.activeHint.pushPage);
      }
    }
  };

  useEffect(() => {
    if (
      location.pathname !== Page.DASHBOARD &&
      onBoardingStore.activeStep === 1
    ) {
      push(Page.DASHBOARD);
    }
    document.addEventListener('mousedown', handleClickDocument);
    return () => {
      document.removeEventListener('mousedown', handleClickDocument);
    };
  }, []);

  if (!onBoardingStore.isAvailable) {
    return null;
  }
  return (
    <FlexContainer
      position="fixed"
      zIndex="8"
      width="100%"
      height={`calc(${FULL_VH})`}
      top="0"
      left="0"
      backgroundColor="rgba(222, 226, 231, 0.857)"
      justifyContent="center"
    >
      <FlexContainer
        width={CONTENT_WIDTH}
        position="relative"
      >
        <ObHint
          position={onBoardingStore.activeHint.position}
          showNext={onBoardingStore.activeHint.showNext}
          text={onBoardingStore.activeHint.text}
          onClickNext={onBoardingStore.setNextStep}
        />
      </FlexContainer>
    </FlexContainer>
  );
});

export default Onboarding;
