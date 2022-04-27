import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { ColorVarsEnum } from '../../enums/ColorVarsEnum';
import { useStores } from '../../hooks/useStores';
import Page from '../../routing/Pages';
import { FlexContainer } from '../../styles/FlexContainer';

const MENU = {
  PUBLIC: {
    type: 'public',
    data: [
      {
        name: 'About Us',
        page: Page.PUBLIC.ABOUT_US,
      },
      {
        name: 'Mission',
        page: Page.PUBLIC.MISSION,
      },
      {
        name: 'Why Us?',
        page: Page.PUBLIC.WHY_US,
      },
      {
        name: 'Lessons',
        page: Page.PUBLIC.LESSONS,
      },
      {
        name: 'FAQ',
        page: Page.PUBLIC.FAQ,
      },
    ],
  },

  INNER: {
    type: 'inner',
    data: [
      {
        name: 'Education',
        page: Page.DASHBOARD,
        className: 'hint_9',
      },
      {
        name: 'Tools',
        page: Page.INNER.TOOL,
      },
      {
        name: 'Notes',
        page: Page.INNER.NOTES,
      },
      {
        name: 'Market',
        page: Page.INNER.MARKET,
        className: 'hint_6',
      },
    ],
  },
};
// className="ob_item active_hint hint_5"
const NavBarNavigation = observer(() => {
  const { t } = useTranslation();
  const { mainAppStore, onBoardingStore } = useStores();

  const activeMenu = useMemo(() => {
    if (mainAppStore.isAuthorized) {
      return MENU.INNER;
    }
    return null;
  }, [mainAppStore.isAuthorized]);

  if (!activeMenu) {
    return null;
  }
  return (
    <FlexContainer justifyContent="center">
      {activeMenu.data.map((item: any) => (
        <NavigationLink
          activeClassName="active"
          className={onBoardingStore.classNameList(item.className || '')}
          key={item.name}
          to={item.page}
        >
          {t(`${item.name}`)}
        </NavigationLink>
      ))}
    </FlexContainer>
  );
});

export default NavBarNavigation;

const NavigationLink = styled(NavLink)`
  display: inline-block;
  color: #000000;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  position: relative;
  padding: 4px 12px;
  border-radius: 16px;
  &:not(&:last-of-type) {
    margin-right: 12px;
  }
  &:hover {
    text-decoration: none;
    color: #2e2e2e;
  }
  &.active {
    background-color: ${`var(${ColorVarsEnum.BG_block})`};
  }
`;
