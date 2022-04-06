import React, { useEffect, useMemo, useState } from 'react';

import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextParagraph } from '../../styles/TextsElements';
import { useTranslation } from 'react-i18next';
import { ProgressBar } from '../../styles/ProgressBar';
import { PrimaryTextSpan } from '../../styles/TextsElements';
import { ProgressBarTypesEnum } from '../../styles/ProgressBar';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStores';
import LoaderForComponent from '../Preloader/LoaderForComponent';
import { HABIT_LIST } from '../../constants/Data/HabitListData';

const ProgressSB = observer(() => {
  const { t } = useTranslation();
  const { userProfileStore } = useStores();

  const habitName = useMemo(() => {
    if (!userProfileStore.habit) {
      return '';
    }
    return (
      HABIT_LIST.find((item) => item.id === userProfileStore.habit?.index)
        ?.title || 'Habit'
    );
  }, [userProfileStore.habit]);

  return (
    <FlexContainer
      width={'100%'}
      height={'fit-content'}
      borderRadius={'32px'}
      border={'2px solid #E0E5EB'}
      padding={'21px 16px 16px 32px'}
      flexDirection={'column'}
      marginBottom={'20px'}
      position={'relative'}
      overflow="hidden"
    >
      <PrimaryTextParagraph
        fontSize={'18px'}
        lineHeight={'156%'}
        fontWeight={'bold'}
        color={'#000'}
        marginBottom={'16px'}
      >
        {t('Your Progress')}
      </PrimaryTextParagraph>
      <FlexContainer flexDirection={'column'}>
        <FlexContainer flexDirection={'column'} marginBottom={'34px'}>
          <ProgressBar
            marginBottom={'13px'}
            progress={userProfileStore.habit?.progress || 0}
            type={ProgressBarTypesEnum.PRIMARY}
          />
          <FlexContainer justifyContent={'space-between'}>
            <PrimaryTextSpan
              fontSize={'14px'}
              lineHeight={'21px'}
              fontWeight={400}
            >
              {t(habitName)}
            </PrimaryTextSpan>
            <PrimaryTextSpan
              fontSize={'14px'}
              lineHeight={'21px'}
              fontWeight={400}
            >
              {userProfileStore.habit?.progress}%
            </PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer flexDirection={'column'}>
          <ProgressBar
            marginBottom={'13px'}
            progress={userProfileStore.skillProgress || 0}
            type={ProgressBarTypesEnum.PRIMARY}
          />
          <FlexContainer justifyContent={'space-between'}>
            <PrimaryTextSpan
              fontSize={'14px'}
              lineHeight={'21px'}
              fontWeight={400}
            >
              {t('Skill total')}
            </PrimaryTextSpan>
            <PrimaryTextSpan
              fontSize={'14px'}
              lineHeight={'21px'}
              fontWeight={400}
            >
              {userProfileStore.skillProgress}%
            </PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
});

export default ProgressSB;
