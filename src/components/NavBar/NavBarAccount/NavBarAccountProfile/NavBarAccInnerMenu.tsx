import styled from '@emotion/styled';
import { Observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { CONTENT_WIDTH, FULL_VH } from '../../../../constants/global';
import { useStores } from '../../../../hooks/useStores';
import Page from '../../../../routing/Pages';
import { FlexContainer } from '../../../../styles/FlexContainer';
import { StatusBadge } from '../../../../styles/StatusBadge';
import { PrimaryTextSpan } from '../../../../styles/TextsElements';
import Modal from '../../../Modal';

import IconProfile from '../../../../assets/svg/account/icon-profile.svg';
import IconAccountSettings from '../../../../assets/svg/account/icon-account-setting.svg';
import IconPayments from '../../../../assets/svg/account/icon-payments.svg';
import IconReferrals from '../../../../assets/svg/account/icon-referrals.svg';
import IconLogOut from '../../../../assets/svg/account/icon-logout.svg';

import SvgIcon from '../../../SvgIcon';
import { ButtonWithoutStyles } from '../../../../styles/ButtonWithoutStyles';

interface NavBarAccInnerMenuProps {
  isActive: boolean;
  onClose: () => void;
}
const NavBarAccInnerMenu = ({ isActive, onClose }: NavBarAccInnerMenuProps) => {
  if (!isActive) {
    return null;
  }

  const { t } = useTranslation();
  const { mainAppStore, userProfileStore } = useStores();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickLogOut = () => {
    mainAppStore.signOut();
    onClose();
  };

  const handleClickOutside = (e: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Modal>
      <FlexContainer
        position="fixed"
        zIndex="2"
        top="0"
        left="0"
        width="100vw"
        height={`calc(${FULL_VH})`}
        backgroundColor="rgba(0,0,0, 0.3)"
        justifyContent="center"
      >
        <FlexContainer
          width={CONTENT_WIDTH}
          justifyContent="flex-end"
          alignItems="flex-start"
          padding="70px 20px 0"
        >
          <FlexContainer
            ref={wrapperRef}
            backgroundColor="#fff"
            borderRadius="24px"
            boxShadow="0px 2px 2px rgba(0, 0, 0, 0.15), 0px 4px 16px rgba(0, 0, 0, 0.25)"
            width="220px"
            flexDirection="column"
          >
            <FlexContainer padding="24px 24px 16px" flexDirection="column">
              <Observer>
                {() => (
                  <>
                    <PrimaryTextSpan
                      color="#000"
                      fontWeight={500}
                      fontSize="16px"
                      marginBottom="2px"
                    >
                      {`${userProfileStore.userAccount?.firstName || ''} ${
                        userProfileStore.userAccount?.lastName || ''
                      }`}
                    </PrimaryTextSpan>
                    <StatusBadge>Status</StatusBadge>
                  </>
                )}
              </Observer>
            </FlexContainer>
            <FlexContainer background="#E0E5EB" height="1px" width="100%" />
            {/*  */}
            <FlexContainer flexDirection="column" padding="10px 0">
              <ProfileNavLink
                to={Page.ACCOUNT.PROFILE}
                activeClassName="active"
                onClick={onClose}
              >
                <FlexContainer marginRight="12px">
                  <SvgIcon {...IconProfile} fillColor="#777C85" />
                </FlexContainer>
                <PrimaryTextSpan
                  color="#777C85"
                  fontSize="16px"
                  fontWeight={500}
                >
                  {t('Profile')}
                </PrimaryTextSpan>
              </ProfileNavLink>
              <ProfileNavLink
                to={Page.ACCOUNT.SETTINGS}
                activeClassName="active"
                onClick={onClose}
              >
                <FlexContainer marginRight="12px">
                  <SvgIcon {...IconAccountSettings} fillColor="#777C85" />
                </FlexContainer>
                <PrimaryTextSpan
                  color="#777C85"
                  fontSize="16px"
                  fontWeight={500}
                >
                  {t('Account settings')}
                </PrimaryTextSpan>
              </ProfileNavLink>
            </FlexContainer>
            {/*  */}
            <FlexContainer background="#E0E5EB" height="1px" width="100%" />

            <ButtonWithoutStyles onClick={handleClickLogOut}>
              <FlexContainer padding="20px 26px" alignItems="center">
                <FlexContainer marginRight="12px">
                  <SvgIcon {...IconLogOut} fillColor="#777C85" />
                </FlexContainer>
                <PrimaryTextSpan
                  color="#777C85"
                  fontSize="16px"
                  fontWeight={500}
                >
                  {t('Log out')}
                </PrimaryTextSpan>
              </FlexContainer>
            </ButtonWithoutStyles>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Modal>
  );
};

export default NavBarAccInnerMenu;

const ProfileNavLink = styled(NavLink)`
  display: flex;
  padding: 10px 26px;
  text-decoration: none;
  transition: all 0.4s ease;
  &:hover {
    text-decoration: none;
    color: #3f4146;
    svg {
      fill: #3f4146;
    }
  }
  &.active {
    span {
      color: #000;
    }
    svg {
      fill: #000;
    }
  }
`;
