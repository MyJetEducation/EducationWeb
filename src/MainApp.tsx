import React, { useEffect, FC } from 'react';
import { Global, css } from '@emotion/core';
import { reboot } from './styles/reboot';
import RoutingLayout from './routing/RoutingLayout';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-dates/lib/css/_datepicker.css';
import { useStores } from './hooks/useStores';
import { useTranslation } from 'react-i18next';
import { autorun } from 'mobx';
import Helmet from 'react-helmet';
import { setFullHeightProperty } from './helpers/setFullHeightProperty';
import PageTemplateContainer from './containers/PageTemplateContainer';
import { fonts } from './styles/fonts';

declare const window: any;

const MainApp: FC = () => {
  const { mainAppStore } = useStores();
  const { i18n } = useTranslation();

  useEffect(() => {
    const windowResize = window.addEventListener('resize', () => {
      setFullHeightProperty();
    });

    autorun(() => {
      if (mainAppStore.lang) {
        i18n.changeLanguage(mainAppStore.lang);
      }
    });

    return () => {
      removeEventListener('resize', windowResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>DOFINFO</title>
      </Helmet>

      <Router>
        <RoutingLayout />
      </Router>

      <Global
        styles={css`
          ${reboot};
          ${fonts};

          html {
            font-size: 14px;
            font-family: 'Gilroy', sans-serif;
          }
          body {
            overflow: hidden;
          }
        `}
      />
    </>
  );
};

export default MainApp;
