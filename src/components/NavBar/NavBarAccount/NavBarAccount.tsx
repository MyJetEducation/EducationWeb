import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../../hooks/useStores';
import { FlexContainer } from '../../../styles/FlexContainer';
import NavBarAccountProfile from './NavBarAccountProfile/NavBarAccountProfile';
import NavBarAuthBtn from './NavBarAuthBtn';

const NavBarAccount = observer(() => {
  const { t } = useTranslation();
  const { mainAppStore } = useStores();

  return (
    <>
      <FlexContainer justifyContent="flex-end" alignItems="center">
        {mainAppStore.isAuthorized ? (
          <NavBarAccountProfile />
        ) : (
          <NavBarAuthBtn />
        )}
      </FlexContainer>
    </>
  );
});

export default NavBarAccount;
