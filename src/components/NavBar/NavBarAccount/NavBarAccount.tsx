import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../../hooks/useStores';
import { FlexContainer } from '../../../styles/FlexContainer';
import NavBarAuthBtn from './NavBarAuthBtn';

const NavBarAccount = () => {
  const { t } = useTranslation();
  const { mainAppStore } = useStores();

  return (
    <>
      <FlexContainer alignItems="center">
        <NavBarAuthBtn />
      </FlexContainer>
    </>
  );
};

export default NavBarAccount;
