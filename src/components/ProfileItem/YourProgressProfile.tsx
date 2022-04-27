import React, { useState } from 'react';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';
import LoaderForComponent from '../Preloader/LoaderForComponent';
import { useTranslation } from 'react-i18next';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SvgIcon from '../SvgIcon';
import IconSkill from '../../assets/svg/icon-skill.svg';
import { ColorVarsEnum } from '../../enums/ColorVarsEnum';

const YourProgressProfile = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <FlexContainer
      maxWidth="652px"
      width="100%"
      flexDirection="column"
      marginBottom="20px"
      position="relative"
    >
      <FlexContainer
        width="100%"
        height="fit-content"
        backgroundColor={`var(${ColorVarsEnum.BG_block})`}
        borderRadius="32px"
        padding="21px 32px"
        flexDirection="column"
      >
        <PrimaryTextSpan
          color="#000"
          marginBottom="13px"
          fontWeight={700}
          fontSize="18px"
          lineHeight="28px"
          marginRight="10px"
        >
          {t('Achievements')}
        </PrimaryTextSpan>

        <FlexContainer>
          <FlexContainer
            flexDirection="column"
            maxWidth="144px"
            marginRight="20px"
          >
            <FlexContainer
              padding="3px 8px 2px 10px"
              marginBottom="22px"
              flexDirection="column"
            >
              <FlexContainer>
                <PrimaryTextSpan
                  fontWeight={600}
                  fontSize="32px"
                  lineHeight="40px"
                  color="#000000"
                >
                  1
                </PrimaryTextSpan>
                <PrimaryTextSpan
                  fontWeight={600}
                  fontSize="32px"
                  lineHeight="40px"
                  color="#A8B0BA"
                >
                  /9
                </PrimaryTextSpan>
              </FlexContainer>

              <PrimaryTextSpan
                fontWeight={700}
                fontSize="18px"
                lineHeight="28px"
                color="#000"
              >
                Habbits
              </PrimaryTextSpan>
            </FlexContainer>

            <FlexContainer
              width="74px"
              height="61px"
              position="relative"
              padding="3px 8px 2px 10px"
              marginBottom="10px"
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

            <PrimaryTextSpan
              fontWeight={400}
              fontSize="14px"
              lineHeight="21px"
              padding="0 0 0 8px"
            >
              Привычка вести учет доходов
            </PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer flexDirection="column" marginRight="32px">
            <FlexContainer
              width="138px"
              padding="3px 8px 2px 10px"
              backgroundColor="#F1F4F8"
              borderRadius="16px"
              position="relative"
              flexDirection="column"
              marginBottom="22px"
            >
              <FlexContainer position={'absolute'} top={'8px'} right={'8px'}>
                <SvgIcon {...IconSkill} fillColor="#A8B0BA" />
              </FlexContainer>
              <FlexContainer>
                <PrimaryTextSpan
                  fontWeight={600}
                  fontSize="32px"
                  lineHeight="40px"
                  color="#000000"
                >
                  1
                </PrimaryTextSpan>
                <PrimaryTextSpan
                  fontWeight={600}
                  fontSize="32px"
                  lineHeight="40px"
                  color="#A8B0BA"
                  marginBottom={'-5px'}
                >
                  /6
                </PrimaryTextSpan>
              </FlexContainer>

              <PrimaryTextSpan
                fontWeight={700}
                fontSize="18px"
                lineHeight="28px"
                color="#000"
              >
                Skill
              </PrimaryTextSpan>
            </FlexContainer>

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
            maxWidth="144px"
            marginRight="20px"
          >
            <FlexContainer
              padding="3px 8px 2px 10px"
              marginBottom="22px"
              flexDirection="column"
            >
              <FlexContainer>
                <PrimaryTextSpan
                  fontWeight={600}
                  fontSize="32px"
                  lineHeight="40px"
                  color="#000000"
                >
                  1
                </PrimaryTextSpan>
                <PrimaryTextSpan
                  fontWeight={600}
                  fontSize="32px"
                  lineHeight="40px"
                  color="#A8B0BA"
                >
                  /9
                </PrimaryTextSpan>
              </FlexContainer>

              <PrimaryTextSpan
                fontWeight={700}
                fontSize="18px"
                lineHeight="28px"
                color="#000"
              >
                Knowledge
              </PrimaryTextSpan>
            </FlexContainer>

            <FlexContainer
              width="74px"
              height="61px"
              position="relative"
              padding="3px 8px 2px 10px"
              marginBottom="10px"
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

            <PrimaryTextSpan
              fontWeight={400}
              fontSize="14px"
              lineHeight="21px"
              padding="0 0 0 8px"
            >
              Личные финансы
            </PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <LoaderForComponent isLoading={isLoading} />
    </FlexContainer>
  );
};

export default YourProgressProfile;
