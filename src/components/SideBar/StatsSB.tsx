import React from 'react';

import { FlexContainer } from '../../styles/FlexContainer';
import {
  PrimaryTextParagraph,
  PrimaryTextSpan,
} from '../../styles/TextsElements';

import IconSkill from '../../assets/svg/icon-skill.svg';
import SvgIcon from '../SvgIcon';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';

const StatsSB = observer(() => {
  const { t } = useTranslation();
  const { userProfileStore, onBoardingStore } = useStores();

  return (
    <FlexContainer
      className={onBoardingStore.classNameList('hint_3')}
      marginBottom="20px"
    >
      <FlexContainer
        width="100%"
        height="216px"
        borderRadius="32px"
        border="2px solid #E0E5EB"
        padding="21px 16px 16px 18px"
        flexDirection="column"
        position="relative"
        overflow="hidden"
      >
        <PrimaryTextParagraph
          fontSize="18px"
          lineHeight="156%"
          fontWeight="bold"
          color="#000"
          marginBottom="13px"
          padding="0 0 0 14px"
        >
          {t('Stats')}
        </PrimaryTextParagraph>
        <FlexContainer flexWrap="wrap">
          <FlexContainer
            flexDirection="column"
            width="108px"
            padding="0 0 0 14px"
            marginRight="14px"
            marginBottom="9px"
          >
            <PrimaryTextSpan
              color="#0BCA1E"
              fontSize="32px"
              lineHeight="125%"
              fontWeight={600}
              marginBottom="-7px"
            >
              {userProfileStore.testScore}%
            </PrimaryTextSpan>
            <PrimaryTextSpan
              color="#0BCA1E"
              fontSize="18px"
              lineHeight="156%"
              fontWeight="bold"
            >
              {t('Task Score')}
            </PrimaryTextSpan>
          </FlexContainer>
          <FlexContainer
            width="108px"
            padding="0 0 0 14px"
            flexDirection="column"
          >
            <PrimaryTextSpan
              color="#000"
              fontSize="32px"
              lineHeight="125%"
              fontWeight={600}
              marginBottom="-7px"
            >
              {userProfileStore.taskCount}
            </PrimaryTextSpan>
            <PrimaryTextSpan
              color="#000"
              fontSize="18px"
              lineHeight="156%"
              fontWeight="bold"
            >
              {t('Tasks')}
            </PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer
            width="108px"
            flexDirection="column"
            padding="0 0 0 14px"
            marginRight="14px"
          >
            <PrimaryTextSpan
              color="#000"
              fontSize="32px"
              lineHeight="125%"
              fontWeight={600}
              marginBottom="-7px"
            >
              {userProfileStore.habit?.index}
            </PrimaryTextSpan>
            <PrimaryTextSpan
              color="#000"
              fontSize="18px"
              lineHeight="156%"
              fontWeight="bold"
            >
              {t('Habit')}
            </PrimaryTextSpan>
          </FlexContainer>
          <FlexContainer
            flexDirection="column"
            width="138px"
            backgroundColor="#F1F4F8"
            borderRadius="16px"
            padding="0 8px 7px 14px"
            position="relative"
          >
            <FlexContainer position="absolute" top="8px" right="8px">
              <SvgIcon {...IconSkill} fillColor="#A8B0BA" />
            </FlexContainer>
            <PrimaryTextSpan
              color="#000"
              fontSize="32px"
              lineHeight="125%"
              fontWeight={600}
              marginBottom="-7px"
            >
              {userProfileStore.skillProgress}
            </PrimaryTextSpan>
            <PrimaryTextSpan
              color="#000"
              fontSize="18px"
              lineHeight="156%"
              fontWeight="bold"
            >
              {t('Skill')}
            </PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
});

export default StatsSB;
