import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Page from '../../routing/Pages';
import { FlexContainer } from '../../styles/FlexContainer';

const PUBLIC_MENU_LIST = [
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
];

const NavBarNavigation = () => {
  const { t } = useTranslation();
  // TODO: add change menu by page type and auth user

  return (
    <FlexContainer>
      {PUBLIC_MENU_LIST.map((item) => (
        <NavigationLink activeClassName="active" key={item.name} to={item.page}>
          {t(`${item.name}`)}
        </NavigationLink>
      ))}
    </FlexContainer>
  );
};

export default NavBarNavigation;

const NavigationLink = styled(NavLink)`
  display: inline-block;
  color: #000000;
  font-weight: 600;
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
