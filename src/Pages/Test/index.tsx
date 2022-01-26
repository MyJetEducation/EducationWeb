import React, { Suspense } from 'react';
import { useTranslation} from 'react-i18next';


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
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}