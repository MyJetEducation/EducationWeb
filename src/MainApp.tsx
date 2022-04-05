import React, { useEffect, FC } from 'react';
import { Global, css } from '@emotion/core';
import { reboot } from './styles/reboot';
import RoutingLayout from './routing/RoutingLayout';
import { BrowserRouter as Router } from 'react-router-dom';
import { useStores } from './hooks/useStores';
import { useTranslation } from 'react-i18next';
import { autorun } from 'mobx';
import Helmet from 'react-helmet';
import { setFullHeightProperty } from './helpers/setFullHeightProperty';
import PageTemplateContainer from './containers/PageTemplateContainer';
import { fonts } from './styles/fonts';
import { OperationApiResponseCodes } from './enums/OperationApiResponseCodes';

declare const window: any;

const MainApp: FC = () => {
  const { mainAppStore } = useStores();
  const { i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        await mainAppStore.initApp();
      } catch (error) {}
    })();

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

  const postUserLog = async () => {
    try {
      const result = await mainAppStore.postUserTimeLog();
      if (result === OperationApiResponseCodes.InvalidTimeToken) {
        mainAppStore.setTokenLogHandler('');
        mainAppStore.getUserTimeToken();
      }
    } catch (error) {}
  };

  useEffect(() => {
    let timerLog: NodeJS.Timer;

    autorun(() => {
      if (mainAppStore.isAuthorized) {
        timerLog = setInterval(() => {
          postUserLog();
        }, 10000);
      } else {
        if (timerLog) {
          clearInterval(timerLog);
        }
      }
    });

    return () => {
      clearInterval(timerLog);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>DOFINFO</title>
      </Helmet>

      <Router>
        <PageTemplateContainer>
          <RoutingLayout />
        </PageTemplateContainer>
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
          &::-webkit-scrollbar {
            width: 6px;
            background-color: transparent;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: #c1c7cf;
          }
        `}
      />
    </>
  );
};

export default MainApp;
