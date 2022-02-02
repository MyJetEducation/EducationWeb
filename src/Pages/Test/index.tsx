import React, {Suspense, useEffect, useState} from 'react';
import { useTranslation} from 'react-i18next';
import {use} from "i18next";


function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <button type="button" onClick={() => changeLanguage('de')}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
      </div>
      <div>{t('description.part2')}</div>
      <div>{t('description.block.one')}</div>
      <div>{t('description.block.two')}</div>
    </div>
  );
}

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

export default function TestTranslate() {
  const [ seconds, setSeconds ] = React.useState(0);

  React.useEffect(() => {
    setTimeout(setSeconds, 1000, seconds + 1);
    return clearTimeout(seconds);
  }, [seconds]);

  return (
    <Suspense fallback={<Loader />}>
      <Page />
      <h1>{seconds}</h1>
    </Suspense>
  );
}