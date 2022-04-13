import React, { FC, useState } from 'react';
import { FlexContainer } from '../styles/FlexContainer';
import { observer } from 'mobx-react-lite';
import Onboarding from '../components/Onboarding/Onboarding';
import { useStores } from '../hooks/useStores';

interface Props {}

const AuthorizedContainer: FC<Props> = observer((props) => {
  const { children } = props;
  const { onBoardingStore } = useStores();

  return (
    <FlexContainer flex="1">
      {onBoardingStore.isAvailable && <Onboarding />}
      {children}
    </FlexContainer>
  );
});
export default AuthorizedContainer;
