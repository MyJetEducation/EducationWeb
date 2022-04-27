import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import AccountSettingsNav from '../components/SideBar/AccountSettingsNav';
import { FlexContainer } from '../styles/FlexContainer';
import { PageTitle } from '../styles/TextsElements';
import CenterContainer from './CenterContainer';

interface Props {
  pageTitle: string;
}

const AccountSettingsContainer: FC<Props> = ({ children, pageTitle }) => {
  const { t } = useTranslation();
  return (
    <CenterContainer padding="32px 0">
      <FlexContainer width="100%" justifyContent="space-between">
        {/* content */}
        <FlexContainer flexDirection="column">
          {/*  */}
          <FlexContainer marginBottom="24px">
            <PageTitle>{t(pageTitle)}</PageTitle>
          </FlexContainer>
          {/*  */}
          <FlexContainer width="640px" flexDirection="column">
            {children}
          </FlexContainer>
        </FlexContainer>
        {/* content */}

        {/* Sidebar */}
        <FlexContainer flexDirection={'column'} width="220px">
          <AccountSettingsNav />
        </FlexContainer>
        {/* Sidebar */}
      </FlexContainer>
    </CenterContainer>
  );
};

export default AccountSettingsContainer;
