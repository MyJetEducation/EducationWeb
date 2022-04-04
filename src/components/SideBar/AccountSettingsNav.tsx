import { Observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FULL_VH, CONTENT_WIDTH } from '../../constants/global';
import { useStores } from '../../hooks/useStores';
import Page from '../../routing/Pages';
import { ButtonWithoutStyles } from '../../styles/ButtonWithoutStyles';
import { FlexContainer } from '../../styles/FlexContainer';
import { StatusBadge } from '../../styles/StatusBadge';
import { PrimaryTextSpan } from '../../styles/TextsElements';
import SvgIcon from '../SvgIcon';

import IconProfile from '../../assets/svg/account/icon-profile.svg';
import IconAccountSettings from '../../assets/svg/account/icon-account-setting.svg';
import IconPayments from '../../assets/svg/account/icon-payments.svg';
import IconReferrals from '../../assets/svg/account/icon-referrals.svg';
import IconLogOut from '../../assets/svg/account/icon-logout.svg';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const AccountSettingsNav = () => {
  const { t } = useTranslation();
  const { mainAppStore, userProfileStore } = useStores();

  const handleClickLogOut = () => {
    mainAppStore.signOut();
  };

  return (
    <FlexContainer width="100%" flexDirection="column">
      <FlexContainer marginBottom="12px" flexDirection="column">
        <Observer>
          {() => (
            <>
              <PrimaryTextSpan
                color="#000"
                fontWeight={500}
                fontSize="24px"
                marginBottom="2px"
              >
                {`${userProfileStore.userAccount?.firstName} ${userProfileStore.userAccount?.lastName}`}
              </PrimaryTextSpan>
              <StatusBadge>Status</StatusBadge>
            </>
          )}
        </Observer>
      </FlexContainer>

      {/*  */}
      <FlexContainer flexDirection="column" padding="10px 0">
        <ProfileNavLink to={Page.ACCOUNT.PROFILE} activeClassName="active">
          <FlexContainer marginRight="12px">
            <SvgIcon {...IconProfile} fillColor="#777C85" />
          </FlexContainer>
          <PrimaryTextSpan color="#777C85" fontSize="18px" fontWeight={500}>
            {t('Profile')}
          </PrimaryTextSpan>
        </ProfileNavLink>
        <ProfileNavLink to={Page.ACCOUNT.SETTINGS} activeClassName="active">
          <FlexContainer marginRight="12px">
            <SvgIcon {...IconAccountSettings} fillColor="#777C85" />
          </FlexContainer>
          <PrimaryTextSpan color="#777C85" fontSize="18px" fontWeight={500}>
            {t('Account settings')}
          </PrimaryTextSpan>
        </ProfileNavLink>
        <ProfileNavLink to={Page.ACCOUNT.PAYMENTS} activeClassName="active">
          <FlexContainer marginRight="12px">
            <SvgIcon {...IconPayments} fillColor="#777C85" />
          </FlexContainer>
          <PrimaryTextSpan color="#777C85" fontSize="18px" fontWeight={500}>
            {t('Payments')}
          </PrimaryTextSpan>
        </ProfileNavLink>
        <ProfileNavLink to={Page.ACCOUNT.REFERRALS} activeClassName="active">
          <FlexContainer marginRight="12px">
            <SvgIcon {...IconReferrals} fillColor="#777C85" />
          </FlexContainer>
          <PrimaryTextSpan color="#777C85" fontSize="18px" fontWeight={500}>
            {t('Referrals')}
          </PrimaryTextSpan>
        </ProfileNavLink>
      </FlexContainer>
      {/*  */}

      <LogOutBtn onClick={handleClickLogOut}>
        <FlexContainer padding="20px 26px" alignItems="center">
          <FlexContainer marginRight="12px">
            <SvgIcon {...IconLogOut} fillColor="#777C85" />
          </FlexContainer>
          <PrimaryTextSpan color="#777C85" fontSize="18px" fontWeight={500}>
            {t('Log out')}
          </PrimaryTextSpan>
        </FlexContainer>
      </LogOutBtn>
    </FlexContainer>
  );
};

export default AccountSettingsNav;

const ProfileNavLink = styled(NavLink)`
  display: flex;
  padding: 16px 20px;
  align-items: center;
  text-decoration: none;
  border: 2px solid #fff;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: none;
    color: #3f4146;
    svg {
      fill: #3f4146;
    }
  }
  &.active {
    border-color: #000;
    span {
      color: #000;
    }
    svg {
      fill: #000;
    }
  }
`;

const LogOutBtn = styled(ButtonWithoutStyles)`
  transition: all 0.3s ease;
  &:hover {
    text-decoration: none;
    span {
      color: #000;
    }
    svg {
      fill: #000;
    }
  }
`;
