import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../routing/Pages';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryLink, PrimaryTextSpan } from '../../styles/TextsElements';
import { TitleH1, TitleH2 } from '../../styles/Titles';

const WhyUsPage = () => {
  const { t } = useTranslation();

  return (
    <FlexContainer padding="58px 0" flex="1" flexDirection="column">
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        marginBottom="36px"
      >
        <TitleH1 textAlign="center" marginBottom="36px">
          {t('Why Us?')}
        </TitleH1>

        <PrimaryTextSpan
          color="#000"
          fontSize="18px"
          lineHeight="28px"
          fontWeight={500}
          textAlign="center"
        >
          Основатель проекта имеет историю рабочего взаимодействия с людьми из
          разных стран, которые зачастую ищут ответы на вопросы:
        </PrimaryTextSpan>
      </FlexContainer>

      <FlexContainer
        width={'100%'}
        justifyContent="flex-end"
        marginBottom="44px"
      >
        <FlexContainer flexDirection={'column'} maxWidth={'660px'}>
          <FlexContainer marginBottom="22px" alignItems="flex-start">
            <PrimaryTextSpan
              fontSize="28px"
              fontWeight={500}
              color="#000"
              lineHeight="1"
              marginRight="20px"
            >
              1.
            </PrimaryTextSpan>
            <PrimaryTextSpan fontSize="16px" color="#000" lineHeight="24px">
              как мне зарабатывать больше денег?
            </PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer marginBottom="22px">
            <PrimaryTextSpan
              fontSize="28px"
              fontWeight={500}
              color="#000"
              lineHeight="1"
              marginRight="20px"
            >
              2.
            </PrimaryTextSpan>
            <PrimaryTextSpan fontSize="16px" color="#000" lineHeight="24px">
              как мне правильно распоряжаться своим доходом, чтоб через год я
              мог начать инвестировать без займов, кредитов, долгов
            </PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer>
            <PrimaryTextSpan
              fontSize="28px"
              fontWeight={500}
              color="#000"
              lineHeight="1"
              marginRight="20px"
            >
              3.
            </PrimaryTextSpan>
            <PrimaryTextSpan fontSize="16px" color="#000" lineHeight="24px">
              научить разбираться в финансовых вопросах для себя/своей семьи и
              самостоятельно принимать решения, не поддаваясь на рекламные
              уловки.
            </PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer
        width="100%"
        justifyContent="flex-start"
        marginBottom="52px"
      >
        <FlexContainer width="740px">
          <FlexContainer marginRight="20px">
            <PrimaryTextSpan
              fontSize="48px"
              fontWeight={500}
              lineHeight="1"
              color="#000"
            >
              “
            </PrimaryTextSpan>
          </FlexContainer>

          <TitleH2>
            Мы разработали проект с оглядкой на то, что за три простых шага вам
            станут понятны и привычны действия богатых людей, которые учились
            управлять своими денежными средствами на протяжении многих лет.
          </TitleH2>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer
        padding={'0 0 0 40px'}
        width={'100%'}
        justifyContent={'space-between'}
      >
        <PrimaryTextSpan maxWidth={'220px'}>
          Для финансового благополучия каждому человеку нужно:
        </PrimaryTextSpan>
        <FlexContainer
          flexDirection={'column'}
          maxWidth={'660px'}
          flex={'1'}
          padding={'40px 0 0 0'}
        >
          <FlexContainer marginBottom="22px" alignItems="flex-start">
            <PrimaryTextSpan
              fontSize="28px"
              fontWeight={500}
              color="#000"
              lineHeight="1"
              marginRight="20px"
            >
              1.
            </PrimaryTextSpan>
            <PrimaryTextSpan fontSize="16px" color="#000" lineHeight="24px">
              зарабатывать денежные средства
            </PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer marginBottom="22px">
            <PrimaryTextSpan
              fontSize="28px"
              fontWeight={500}
              color="#000"
              lineHeight="1"
              marginRight="20px"
            >
              2.
            </PrimaryTextSpan>
            <PrimaryTextSpan fontSize="16px" color="#000" lineHeight="24px">
              грамотно ими распоряжаться и накапливать
            </PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer marginBottom={'47px'}>
            <PrimaryTextSpan
              fontSize="28px"
              fontWeight={500}
              color="#000"
              lineHeight="1"
              marginRight="20px"
            >
              3.
            </PrimaryTextSpan>
            <PrimaryTextSpan fontSize="16px" color="#000" lineHeight="24px">
              грамотно инвестировать
            </PrimaryTextSpan>
          </FlexContainer>
          <FlexContainer maxWidth={'540px'} marginBottom={'53px'}>
            <PrimaryTextSpan>
              Специалисты в области Money Management, Financial Psychology,
              Credits and Investments, Business Advisors помогли составить
              теоретические и практические задания для каждого, кто станет нашим
              клиентом. А также специалисты-партнеры проекта готовы делиться
              своим опытом, чтобы Вы становились финансово более уверенными в
              своих действиях каждый день.
            </PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer justifyContent="center" width="100%">
        <PrimaryLink to={Page.SIGN_UP}>{t('Let`s start')}</PrimaryLink>
      </FlexContainer>
    </FlexContainer>
  );
};

export default WhyUsPage;
