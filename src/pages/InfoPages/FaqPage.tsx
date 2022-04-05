import React from 'react';
import { useTranslation } from 'react-i18next';
import AccordionItem from '../../components/AccordionItem';
import FAQ_PAGE_DATA from '../../constants/Data/FaqPageData';
import Page from '../../routing/Pages';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryLink, PrimaryTextParagraph } from '../../styles/TextsElements';
import { TitleH1, TitleH2 } from '../../styles/Titles';

const FaqPage = () => {
  const { t } = useTranslation();
  return (
    <FlexContainer padding="58px 20px" flex="1" flexDirection="column">
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        marginBottom="40px"
      >
        <TitleH1 textTransform="uppercase" textAlign="center">
          {t('Faq')}
        </TitleH1>
      </FlexContainer>

      {FAQ_PAGE_DATA.map((block) => (
        <FlexContainer key={block.title} marginBottom="40px">
          <FlexContainer width="320px" padding="20px 16px 20px 80px">
            <TitleH2>{t(block.title)}</TitleH2>
          </FlexContainer>

          <FlexContainer flex="1" flexDirection="column">
            {block.items.map((item) => (
              <AccordionItem key={item.title} {...item} />
            ))}
          </FlexContainer>
        </FlexContainer>
      ))}

      <FlexContainer width="100%" justifyContent="flex-end">
        <FlexContainer
          width="700px"
          backgroundColor="#F1F4F8"
          borderRadius="32px"
          padding="40px 80px"
        >
          <FlexContainer flexDirection="column" width="384px">
            <TitleH2 marginBottom="12px">Остались вопросы?</TitleH2>
            <PrimaryTextParagraph
              fontSize="18px"
              color="#000"
              fontWeight={500}
              lineHeight="28px"
              marginBottom="48px"
            >
              Cвяжитесь с нашей командой поддержки удобными для вас способами
            </PrimaryTextParagraph>

            <PrimaryLink width="220px" to={Page.SIGN_UP}>
              {t('Contact support')}
            </PrimaryLink>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default FaqPage;
