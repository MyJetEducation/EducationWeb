import React, { useState } from 'react';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import LoaderForComponent from '../Preloader/LoaderForComponent';
import { useTranslation } from 'react-i18next';
import { ColorVarsEnum } from '../../enums/ColorVarsEnum';

const SkillsProgressProfile = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <FlexContainer
      maxWidth="652px"
      width="100%"
      flexDirection="column"
      height="fit-content"
      backgroundColor={`var(${ColorVarsEnum.BG_block})`}
      borderRadius="32px"
      padding="21px 32px"
      position="relative"
    >
      <PrimaryTextSpan
        color="#000"
        marginBottom="13px"
        fontWeight={700}
        fontSize="18px"
        lineHeight="28px"
        marginRight="10px"
      >
        {t('Skills Progress')}
      </PrimaryTextSpan>

      <FlexContainer justifyContent="space-between">
        <FlexContainer
          flexDirection="column"
          maxWidth="76px"
          alignItems="center"
        >
          <PrimaryTextSpan marginBottom="10px" fontSize="14px">
            Concentration
          </PrimaryTextSpan>
          <FlexContainer
            width="74px"
            height="61px"
            position="relative"
            padding="3px 8px 2px 10px"
          >
            <FlexContainer
              position="absolute"
              width="100%"
              height="100%"
              top="0"
              left="0"
              justifyContent="center"
              alignItems="center"
            >
              <PrimaryTextSpan
                fontWeight={700}
                fontSize="18px"
                lineHeight="28px"
                color="#777C85"
              >
                {10}%
              </PrimaryTextSpan>
            </FlexContainer>

            <CircularProgressbar
              value={80}
              styles={buildStyles({
                pathColor: '#777C85',
                rotation: 30,
                trailColor: 'transparent',
              })}
              strokeWidth={6}
            />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          flexDirection="column"
          maxWidth="76px"
          alignItems="center"
        >
          <PrimaryTextSpan marginBottom="10px" fontSize="14px">
            Perseverance
          </PrimaryTextSpan>
          <FlexContainer
            width="74px"
            height="61px"
            position="relative"
            padding="3px 8px 2px 10px"
          >
            <FlexContainer
              position="absolute"
              width="100%"
              height="100%"
              top="0"
              left="0"
              justifyContent="center"
              alignItems="center"
            >
              <PrimaryTextSpan
                fontWeight={700}
                fontSize="18px"
                lineHeight="28px"
                color="#777C85"
              >
                {10}%
              </PrimaryTextSpan>
            </FlexContainer>

            <CircularProgressbar
              value={80}
              styles={buildStyles({
                pathColor: '#777C85',
                rotation: 30,
                trailColor: 'transparent',
              })}
              strokeWidth={6}
            />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          flexDirection="column"
          maxWidth="76px"
          alignItems="center"
        >
          <PrimaryTextSpan marginBottom="10px" fontSize="14px">
            Thoughtfulness
          </PrimaryTextSpan>
          <FlexContainer
            width="74px"
            height="61px"
            position="relative"
            padding="3px 8px 2px 10px"
          >
            <FlexContainer
              position="absolute"
              width="100%"
              height="100%"
              top="0"
              left="0"
              justifyContent="center"
              alignItems="center"
            >
              <PrimaryTextSpan
                fontWeight={700}
                fontSize="18px"
                lineHeight="28px"
                color="#777C85"
              >
                {10}%
              </PrimaryTextSpan>
            </FlexContainer>

            <CircularProgressbar
              value={80}
              styles={buildStyles({
                pathColor: '#777C85',
                rotation: 30,
                trailColor: 'transparent',
              })}
              strokeWidth={6}
            />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          flexDirection="column"
          maxWidth="76px"
          alignItems="center"
        >
          <PrimaryTextSpan fontSize="14px" marginBottom="10px">
            Memory
          </PrimaryTextSpan>
          <FlexContainer
            width="74px"
            height="61px"
            position="relative"
            padding="3px 8px 2px 10px"
          >
            <FlexContainer
              position="absolute"
              width="100%"
              height="100%"
              top="0"
              left="0"
              justifyContent="center"
              alignItems="center"
            >
              <PrimaryTextSpan
                fontWeight={700}
                fontSize="18px"
                lineHeight="28px"
                color="#777C85"
              >
                {10}%
              </PrimaryTextSpan>
            </FlexContainer>

            <CircularProgressbar
              value={80}
              styles={buildStyles({
                pathColor: '#777C85',
                rotation: 30,
                trailColor: 'transparent',
              })}
              strokeWidth={6}
            />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          flexDirection="column"
          maxWidth="76px"
          alignItems="center"
        >
          <PrimaryTextSpan fontSize="14px" marginBottom="10px">
            Adaptability
          </PrimaryTextSpan>
          <FlexContainer
            width="74px"
            height="61px"
            position="relative"
            padding="3px 8px 2px 10px"
          >
            <FlexContainer
              position="absolute"
              width="100%"
              height="100%"
              top="0"
              left="0"
              justifyContent="center"
              alignItems="center"
            >
              <PrimaryTextSpan
                fontWeight={700}
                fontSize="18px"
                lineHeight="28px"
                color="#777C85"
              >
                {10}%
              </PrimaryTextSpan>
            </FlexContainer>

            <CircularProgressbar
              value={80}
              styles={buildStyles({
                pathColor: '#777C85',
                rotation: 30,
                trailColor: 'transparent',
              })}
              strokeWidth={6}
            />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          flexDirection="column"
          maxWidth="76px"
          alignItems="center"
        >
          <PrimaryTextSpan fontSize="14px" marginBottom="10px">
            Activity
          </PrimaryTextSpan>
          <FlexContainer
            width="74px"
            height="61px"
            position="relative"
            padding="3px 8px 2px 10px"
          >
            <FlexContainer
              position="absolute"
              width="100%"
              height="100%"
              top="0"
              left="0"
              justifyContent="center"
              alignItems="center"
            >
              <PrimaryTextSpan
                fontWeight={700}
                fontSize="18px"
                lineHeight="28px"
                color="#777C85"
              >
                {10}%
              </PrimaryTextSpan>
            </FlexContainer>

            <CircularProgressbar
              value={80}
              styles={buildStyles({
                pathColor: '#777C85',
                rotation: 30,
                trailColor: 'transparent',
              })}
              strokeWidth={6}
            />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>

      <LoaderForComponent isLoading={isLoading} />
    </FlexContainer>
  );
};

export default SkillsProgressProfile;
