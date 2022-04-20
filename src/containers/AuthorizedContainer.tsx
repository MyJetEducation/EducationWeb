import React, { FC, useEffect, useState } from 'react';
import { FlexContainer } from '../styles/FlexContainer';
import { observer } from 'mobx-react-lite';
import Onboarding from '../components/Onboarding/Onboarding';
import { useStores } from '../hooks/useStores';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Page from '../routing/Pages';
import { autorun } from 'mobx';

interface Props {}

const AuthorizedContainer: FC<Props> = observer((props) => {
  const { children } = props;
  const { location, push } = useHistory();
  const { mainAppStore, userProfileStore, onBoardingStore } = useStores();

  const isConfirmEmailPage = useRouteMatch([Page.CONFIRM_EMAIL])?.isExact;

  useEffect(() => {
    autorun(() => {
      if (
        mainAppStore.isAuthorized &&
        !mainAppStore.isLoading &&
        !isConfirmEmailPage &&
        !userProfileStore.emailVerified
      ) {
        push(Page.CONFIRM_EMAIL);
      }
    });
  }, [
    location.pathname,
    userProfileStore.emailVerified,
    mainAppStore.isLoading,
    mainAppStore.isAuthorized,
  ]);

  return (
    <FlexContainer flex="1">
      {onBoardingStore.isAvailable && userProfileStore.emailVerified && <Onboarding />}
      {children}
    </FlexContainer>
  );
});
export default AuthorizedContainer;
