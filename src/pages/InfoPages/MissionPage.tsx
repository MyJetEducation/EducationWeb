import React from 'react';
import { useTranslation } from 'react-i18next';
import SvgIcon from '../../components/SvgIcon';
import Page from '../../routing/Pages';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryLink, PrimaryTextSpan } from '../../styles/TextsElements';
import { TitleH1 } from '../../styles/Titles';

const MissionPage = () => {
  const { t } = useTranslation();
  return (
    <FlexContainer padding="58px 0" flex="1" flexDirection="column">
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        marginBottom="36px"
      >
        <TitleH1 textAlign="center">{t('Mission')}</TitleH1>
      </FlexContainer>

      <FlexContainer width="100%" justifyContent="flex-end" marginBottom="44px">
        <FlexContainer width="660px" flexDirection="column">
          <PrimaryTextSpan
            color="#000"
            fontSize="18px"
            fontWeight={500}
            marginBottom="22px"
          >
            Цель функционирования организации:
          </PrimaryTextSpan>

          <FlexContainer marginBottom="22px" alignItems="flex-start">
            <PrimaryTextSpan
              fontSize="28px"
              fontWeight={500}
              color="#000"
              lineHeight="1"
              marginRight="20px"
            >
              –
            </PrimaryTextSpan>
            <PrimaryTextSpan fontSize="16px" color="#000" lineHeight="24px">
              научить людей экономическому типу мышления
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
              –
            </PrimaryTextSpan>
            <PrimaryTextSpan fontSize="16px" color="#000" lineHeight="24px">
              научить людей экономическому типу мышления сменить вектор от
              потребительского к рациональному и экологичному
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
              –
            </PrimaryTextSpan>
            <PrimaryTextSpan fontSize="16px" color="#000" lineHeight="24px">
              научить разбираться в финансовых вопросах для себя/своей семьи и
              самостоятельно принимать решения, не поддаваясь на рекламные
              уловки.
            </PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer width="100%" marginBottom="44px">
        <FlexContainer width="660px">
          <PrimaryTextSpan>
            Мы трансформируем финансовые знания в привычки. Финансовое
            образование является естественной базой знаний каждого человека, и в
            нашей программе вы будете привыкать делать правильный выбор каждый
            день. В мире есть много ловушек, из-за которых люди бездумно тратят
            деньги и так никогда не достигают своей мечты. А порой накопив
            какие-то деньги вы не знаете как их грамотно приумножить.
          </PrimaryTextSpan>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer width="100%" justifyContent="flex-end" marginBottom="52px">
        <FlexContainer width="660px">
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
          <FlexContainer flexDirection="column">
            <PrimaryTextSpan
              fontSize="28px"
              fontWeight={500}
              color="#000"
              lineHeight="36px"
              marginBottom="72px"
            >
              В WeFin мы объединяем все ваши знания шаг за шагом и вы осознанно
              приближаетесь к тому, о чем мечтали.
            </PrimaryTextSpan>

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

export default MissionPage;
