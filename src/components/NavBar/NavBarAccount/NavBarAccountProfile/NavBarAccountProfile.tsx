import React, { useState } from 'react';
import { ButtonWithoutStyles } from '../../../../styles/ButtonWithoutStyles';
import { FlexContainer } from '../../../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../../../styles/TextsElements';
import SvgIcon from '../../../SvgIcon';
import IconCurrency from '../../../../assets/svg_no_compress/icon-currency.svg';
import { numberFormat } from '../../../../helpers/numberFormat';
import { useStores } from '../../../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { getAccountInitials } from '../../../../helpers/getAccountInitials';
import NavBarAccInnerMenu from './NavBarAccInnerMenu';

const NavBarAccountProfile = observer(() => {
  const { userProfileStore, onBoardingStore } = useStores();

  const [isActiveMenu, toggleMenu] = useState(false);

  const handleOpenMenu = () => {
    toggleMenu(true);
  };
  const handleCloseMenu = () => {
    toggleMenu(false);
  };

  return (
    <FlexContainer alignItems="center">
      <FlexContainer
        alignItems="center"
        marginRight="20px"
        className={onBoardingStore.classNameList('hint_5')}
      >
        <FlexContainer marginRight="4px">
          <SvgIcon {...IconCurrency} />
        </FlexContainer>
        <PrimaryTextSpan fontSize="12px" color="#000" fontWeight={400}>
          {numberFormat(userProfileStore.availableTokenBalance || 0)}
        </PrimaryTextSpan>
      </FlexContainer>

      <ButtonWithoutStyles
        onClick={handleOpenMenu}
        className={onBoardingStore.classNameList('hint_1')}
      >
        <FlexContainer
          width="40px"
          height="40px"
          border="2px solid #000"
          borderRadius="50%"
          justifyContent="center"
          alignItems="center"
        >
          <PrimaryTextSpan
            fontSize="16px"
            color="#000"
            fontWeight={500}
            textTransform="uppercase"
          >
            {getAccountInitials(
              userProfileStore.userAccount?.firstName || 'D',
              userProfileStore.userAccount?.lastName || 'I'
            )}
          </PrimaryTextSpan>
        </FlexContainer>
      </ButtonWithoutStyles>

      <NavBarAccInnerMenu isActive={isActiveMenu} onClose={handleCloseMenu} />
    </FlexContainer>
  );
});

export default NavBarAccountProfile;
