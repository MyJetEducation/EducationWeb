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
import { fonts } from './styles/fonts';
import { OperationApiResponseCodes } from './enums/OperationApiResponseCodes';
import { OBStyles } from './styles/OnboardingStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColorVars } from './styles/ColorVars';
import SkillsPopup from './components/ProfileItem/Popups/SkillPopup/SkillsPopup';
import PageTemplateContainer from './containers/PageTemplateContainer';

declare const window: any;

const MainApp: FC = () => {
  const { mainAppStore, userProfileStore } = useStores();
  const { i18n } = useTranslation();

  const postUserLog = async () => {
    try {
      const result = await mainAppStore.postUserTimeLog();
      if (result !== OperationApiResponseCodes.Ok) {
        mainAppStore.setTokenLogHandler('');
        mainAppStore.getUserTimeToken();
      }
    } catch (error) {}
  };

  useEffect(() => {
    let timerLog: NodeJS.Timer;

    (async () => {
      try {
        await mainAppStore.initApp();
      } catch (error) {}
    })();

    const windowResize = window.addEventListener('resize', () => {
      setFullHeightProperty();
    });

    const disposer = autorun(() => {
      if (mainAppStore.lang) {
        i18n.changeLanguage(mainAppStore.lang);
      }
      if (mainAppStore.isAuthorized && userProfileStore.emailVerified) {
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
      disposer();
      removeEventListener('resize', windowResize);
      clearInterval(timerLog);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Simple Education</title>
      </Helmet>

      <Router>
        <PageTemplateContainer>
          <RoutingLayout />
        </PageTemplateContainer>
      </Router>

      <Global
        styles={css`
          ${ColorVars};
          ${OBStyles};
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
