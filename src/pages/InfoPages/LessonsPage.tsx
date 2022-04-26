import React from 'react';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';
import { useTranslation } from 'react-i18next';
import { TitleH1 } from '../../styles/Titles';

const LessonsPage = () => {
  const { t } = useTranslation();
  return (
    <FlexContainer padding="58px 0" flex="1" flexDirection="column">
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        marginBottom="36px"
      >
        <TitleH1 textAlign="center" marginBottom="36px">
          {t('Lessons')}
        </TitleH1>

        <PrimaryTextSpan
          color="#000"
          fontSize="18px"
          lineHeight="28px"
          fontWeight={500}
          textAlign="center"
        >
          Как проходит обучение и что мы даем?
        </PrimaryTextSpan>
      </FlexContainer>

      <FlexContainer
        justifyContent={'space-between'}
        maxWidth={'780px'}
        width={'100%'}
        margin={'0 auto 40px'}
      >
        <PrimaryTextSpan
          fontSize={'28px'}
          lineHeight={'36px'}
          fontWeight={600}
          color={'#000'}
          whiteSpace={'nowrap'}
        >
          1 ступень,
        </PrimaryTextSpan>
        <FlexContainer flexDirection={'column'} maxWidth={'540px'}>
          <PrimaryTextSpan marginBottom={'34px'}>
            базовая, это основы финансовой грамотности в современном мире,
            состоит из 9 дисциплин. Вы проходите эти дисциплины в игровой форме.
            Материал подаем исходя из того, какая у вас потребность в знаниях
            сейчас, и что вы хотите от нашего проекта. По мере прохождения
            дисциплин вы зарабатываете игровые деньги, за которые можете
            осуществлять покупки у нас в проекте. Также вы зарабатываете статусы
            в проекте и ачивменты, которые имеют как ментальную, так и
            финансовую ценность.
          </PrimaryTextSpan>
          <PrimaryTextSpan>
            9 дисциплин состоят из 15 уроков. Уроки состоят из текстовых
            материалов, видео, тестов, квизов, игр. Пройти каждый урок можно в
            том случае, если вдумчиво ответить на все вопросы. Каждый урок
            занимает менее 15 минут вашего времени и оставляет информационный
            шлейф, который нужно спокойно обдумать. Мы рекомендуем проходить по
            одному уроку каждый день, чтоб повысить качество усвоения материала.
            Через каждые 10 уроков, перед 11-м, вы проходите экзамен, за
            прохождение которого можете получить редкие ачивменты и награды.
          </PrimaryTextSpan>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer
        justifyContent={'space-between'}
        maxWidth={'780px'}
        width={'100%'}
        margin={'0 auto'}
      >
        <PrimaryTextSpan
          fontSize={'28px'}
          lineHeight={'36px'}
          fontWeight={600}
          color={'#000'}
          whiteSpace={'nowrap'}
        >
          2 ступень,
        </PrimaryTextSpan>
        <FlexContainer flexDirection={'column'} maxWidth={'540px'}>
          <PrimaryTextSpan marginBottom={'40px'}>
            с углублением в разрешение различных задач клиента, доступна только
            после прохождения базовых знаний. В мире является нормальной
            практика отсечения неквалифицированных инвесторов с целью сбережения
            их денег центральными банками разных стран. Такая практика стала
            нормальной с недавних пор. Причина в том, что мошенники завлекают
            людей тратить деньги на инвестиции, когда они даже не понимают как
            грамотно инвестировать. Поэтому мы допускаем клиентов к обсуждению
            финансовых вопросов удостоверившись, что базовые знания по
            современной финансовой грамотности получены и прохождение было
            успешным.
          </PrimaryTextSpan>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        maxWidth={'780px'}
        margin={'0 auto 22px'}
        width={'100%'}
        justifyContent={'flex-start'}
      >
        <PrimaryTextSpan
          fontSize={'28px'}
          lineHeight={'36px'}
          fontWeight={600}
          color={'#000'}
          maxWidth={'400px'}
        >
          Всех клиентов мы разделили на три группы.
        </PrimaryTextSpan>
      </FlexContainer>

      <FlexContainer width={'100%'} justifyContent="flex-end">
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
              Те, кто хотят зарабатывать больше денег
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
              Те, кто хотят научиться грамотно распоряжаться своими деньгами и
              приумножать их
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
              Состоятельные люди, которым нужны знания по современным
              инвестициям и сопровождение инвестиционными идеями от специалистов
            </PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default LessonsPage;
