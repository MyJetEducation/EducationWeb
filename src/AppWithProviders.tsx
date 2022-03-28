import React from 'react';
import MainApp from './MainApp';
import '../i18n';

const AppWithProviders = () => {
  // first init request must be there
  return <MainApp></MainApp>;
};

export default AppWithProviders;
