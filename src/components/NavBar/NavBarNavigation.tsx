import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useRouteMatch } from 'react-router-dom';
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
      },
    ],
  },
};

const NavBarNavigation = observer(() => {
  const { t } = useTranslation();
  const { mainAppStore } = useStores();
  const [menuList, setMenuList] = useState<any>(MENU.PUBLIC);

  const isPublicPage = useRouteMatch([...Object.values(Page.PUBLIC), Page.HOME])
    ?.isExact;

  const activeMenu = useMemo(() => {
    if (isPublicPage) {
      return MENU.PUBLIC;
    }
    if (mainAppStore.isAuthorized) {
      return MENU.INNER;
    }
    return MENU.PUBLIC;
  }, [isPublicPage]);

  useEffect(() => {
    setMenuList(activeMenu);
  }, [isPublicPage]);

  return (
    <FlexContainer>
      {menuList.data.map((item: any) => (
        <NavigationLink activeClassName="active" key={item.name} to={item.page}>
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
  &:not(&:last-of-type) {
    margin-right: 26px;
  }
  &:after {
    content: '';
    width: 100%;
    height: 4px;
    left: 0;
    bottom: -28px;
    position: absolute;
    display: inline-block;
    transition: all 0.3s ease;
    background-color: transparent;
  }
  &:hover {
    text-decoration: none;
    color: #2e2e2e;
  }
  &.active {
    &:after {
      background-color: #000000;
    }
  }
`;
