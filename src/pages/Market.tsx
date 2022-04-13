import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MarketItem from '../components/MarketItem';
import AccountSettingsNav from '../components/SideBar/AccountSettingsNav';
import { useStores } from '../hooks/useStores';
import { FlexContainer } from '../styles/FlexContainer';
import { PageTitle } from '../styles/TextsElements';

const Market = observer(() => {
  const { t } = useTranslation();
  const { onBoardingStore } = useStores();

  const onClickNextObStep = () => {
    onBoardingStore.setNextStep();
    setTimeout(() => {
      onBoardingStore.setNextStep();
    }, 2000);
  };
  return (
    <FlexContainer flex="1" padding="32px 20px">
      <FlexContainer width="100%" justifyContent="space-between">
        {/* content */}
        <FlexContainer flexDirection="column">
          {/*  */}
          <FlexContainer marginBottom="24px">
            <PageTitle>{t('Market')}</PageTitle>
          </FlexContainer>
          {/*  */}
          <FlexContainer width="640px" flexDirection="column">
            <MarketItem
              isOBItem={true}
              obClickNext={onClickNextObStep}
              className={onBoardingStore.classNameList(['hint_7', 'hint_8'])}
            />
          </FlexContainer>
        </FlexContainer>
        {/* content */}

        {/* Sidebar */}
        <FlexContainer flexDirection={'column'} width="220px">
          sidebar
        </FlexContainer>
        {/* Sidebar */}
      </FlexContainer>
    </FlexContainer>
  );
});

export default Market;
