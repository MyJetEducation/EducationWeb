import React from 'react';
import { ButtonWithoutStyles } from '../../../styles/ButtonWithoutStyles';
import { FlexContainer } from '../../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../../styles/TextsElements';
import SvgIcon from '../../SvgIcon';
import IconCurrency from '../../../assets/svg_no_compress/icon-currency.svg';
import { numberFormat } from '../../../helpers/numberFormat';
import { useStores } from '../../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { getAccountInitials } from '../../../helpers/getAccountInitials';

const NavBarAccountProfile = observer(() => {
  const { userProfileStore } = useStores();

  return (
    <FlexContainer alignItems="center">
      <FlexContainer alignItems="center" marginRight="20px">
        <FlexContainer marginRight="4px">
          <SvgIcon {...IconCurrency} />
        </FlexContainer>
        <PrimaryTextSpan fontSize="12px" color="#000" fontWeight={400}>
          {numberFormat(1200)}
        </PrimaryTextSpan>
      </FlexContainer>
      <ButtonWithoutStyles>
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
              userProfileStore.userAccount?.firstName,
              userProfileStore.userAccount?.lastName
            )}
          </PrimaryTextSpan>
        </FlexContainer>
      </ButtonWithoutStyles>
    </FlexContainer>
  );
});

export default NavBarAccountProfile;
