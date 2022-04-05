import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../routing/Pages';
import { FlexContainer } from '../../styles/FlexContainer';
import {
  AccentTextSpan,
  PrimaryLink,
  PrimaryTextSpan,
} from '../../styles/TextsElements';
import { TitleH1, TitleH2 } from '../../styles/Titles';

const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <FlexContainer padding="58px 0" flex="1" flexDirection="column">
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        marginBottom="56px"
      >
        <TitleH1 textAlign="center" marginBottom="36px">
          {t('About Us')}
        </TitleH1>

        <PrimaryTextSpan
          textAlign="center"
          color="#000"
          fontWeight={500}
          fontSize="18px"
          lineHeight="28px"
        >
          Мы предоставляем людям всех возрастов по всему миру простую обучающую
          программу по финансовым знаниям, инструменты и ресурсы для управления
          деньгами. Флагманская программа предлагает пошаговый учебный план,
          образовательные игры, видео и финансовые калькуляторы, а также
          презентации с кейсами по финансовой грамотности.
        </PrimaryTextSpan>
      </FlexContainer>

      <FlexContainer flexDirection="column" width="100%" marginBottom="52px">
        <FlexContainer justifyContent="center">
          <TitleH1 textAlign="center" marginBottom="36px">
            Что у нас есть?
          </TitleH1>
        </FlexContainer>

        <FlexContainer flexDirection="column" alignItems="center">
          <FlexContainer marginBottom="30px">
            <FlexContainer width="240px">
              <TitleH2>Про знания</TitleH2>
            </FlexContainer>
            <FlexContainer width="calc(100% - 240px)" flexDirection="column">
              {/*  */}
              <FlexContainer>
                <FlexContainer width="42px">
                  <PrimaryTextSpan
                    color="#000"
                    fontSize="28px"
                    lineHeight="36px"
                    fontWeight={500}
                  >
                    1.
                  </PrimaryTextSpan>
                </FlexContainer>
                <FlexContainer width="500px" padding="12px 0">
                  <PrimaryTextSpan
                    color="#777C85"
                    fontSize="16px"
                    lineHeight="24px"
                  >
                    Первый шаг, основа вас как грамотного богатого человека, это
                    изучение навыков и секретов миллионеров всего мира в
                    совокупности с базовыми финансовыми понятиями в жизни.
                    Истории про деньги, и про отношения человека с деньгами в
                    рассказах, в тестах и квизах. Для развития памяти и лучшей
                    запоминаемости мы даем задания на когнитивное развитие
                    мозга. Игровая форма подачи информации с возможностью
                    зарабатывать внутренние деньги программы.
                  </PrimaryTextSpan>
                </FlexContainer>
              </FlexContainer>
              {/*  */}
              <FlexContainer>
                <FlexContainer width="42px">
                  <PrimaryTextSpan
                    color="#000"
                    fontSize="28px"
                    lineHeight="36px"
                    fontWeight={500}
                  >
                    2.
                  </PrimaryTextSpan>
                </FlexContainer>
                <FlexContainer width="500px" padding="12px 0">
                  <PrimaryTextSpan
                    color="#777C85"
                    fontSize="16px"
                    lineHeight="24px"
                  >
                    Второй шаг, после подготовки по базовым финансовым знаниям,
                    это участие в профессиональном сообществе со специалистами
                    по направлениям Финансового Коучинга, Финансовой Психологии,
                    Инвестиционными консультантами, Трейдерами. У вас будет
                    пошаговый план действий от различных специалистов,
                    возможность задавать вопросы по проблемным для вас вопросам
                    и регулярная актуальная поддержка.
                  </PrimaryTextSpan>
                </FlexContainer>
              </FlexContainer>
              {/*  */}
            </FlexContainer>
          </FlexContainer>

          <FlexContainer>
            <FlexContainer width="240px">
              <TitleH2>Про бизнес:</TitleH2>
            </FlexContainer>
            <FlexContainer width="calc(100% - 240px)" flexDirection="column">
              {/*  */}
              <FlexContainer>
                <FlexContainer width="42px">
                  <PrimaryTextSpan
                    color="#000"
                    fontSize="28px"
                    lineHeight="36px"
                    fontWeight={500}
                  >
                    1.
                  </PrimaryTextSpan>
                </FlexContainer>
                <FlexContainer width="500px" padding="12px 0">
                  <PrimaryTextSpan
                    color="#777C85"
                    fontSize="16px"
                    lineHeight="24px"
                  >
                    <AccentTextSpan>
                      Возможность зарабатывать привлекая в программу новых
                      пользователей.
                    </AccentTextSpan>
                    &nbsp; Ваша активность поможет увеличивать свою прибыль и
                    даст возможность новым людям становиться более подкованными
                    в вопросе личных финансов. Бедных людей будет становиться
                    меньше.
                  </PrimaryTextSpan>
                </FlexContainer>
              </FlexContainer>
              {/*  */}
              <FlexContainer>
                <FlexContainer width="42px">
                  <PrimaryTextSpan
                    color="#000"
                    fontSize="28px"
                    lineHeight="36px"
                    fontWeight={500}
                  >
                    2.
                  </PrimaryTextSpan>
                </FlexContainer>
                <FlexContainer width="500px" padding="12px 0">
                  <PrimaryTextSpan
                    color="#777C85"
                    fontSize="16px"
                    lineHeight="24px"
                  >
                    <AccentTextSpan>
                      Возможность зарабатывать внутренний токен,
                    </AccentTextSpan>
                    &nbsp; который в последствии используете на покупку товаров
                    и услуг наших партнеров по поддержке улучшения финансовой
                    грамотности людей всего мира.
                  </PrimaryTextSpan>
                </FlexContainer>
              </FlexContainer>
              {/*  */}
              <FlexContainer>
                <FlexContainer width="42px">
                  <PrimaryTextSpan
                    color="#000"
                    fontSize="28px"
                    lineHeight="36px"
                    fontWeight={500}
                  >
                    3.
                  </PrimaryTextSpan>
                </FlexContainer>
                <FlexContainer width="500px" padding="12px 0">
                  <PrimaryTextSpan
                    color="#777C85"
                    fontSize="16px"
                    lineHeight="24px"
                  >
                    <AccentTextSpan>
                      Возможность зарабатывать с позиции профильного специалиста
                    </AccentTextSpan>
                  </PrimaryTextSpan>
                </FlexContainer>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer justifyContent="center" width="100%">
        <PrimaryLink to={Page.SIGN_UP}>{t('Let`s start')}</PrimaryLink>
      </FlexContainer>
    </FlexContainer>
  );
};

export default AboutUsPage;
