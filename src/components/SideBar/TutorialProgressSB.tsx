import React, {useMemo} from 'react';

import {FlexContainer} from "../../styles/FlexContainer";
import {PrimaryTextSpan} from "../../styles/TextsElements";
import {ProgressBar, ProgressBarTypesEnum} from "../../styles/ProgressBar";
import {useTranslation} from "react-i18next";
import styled from "@emotion/styled";
import SvgIcon from "../SvgIcon";

import IconUnits from '../../assets/svg/unit/icon-units.svg';
import IconVideo from '../../assets/svg/unit/icon-video.svg';
import IconTests from '../../assets/svg/unit/icon-tests.svg';

interface TutorialProgressSBProps {
  count: number,
  tutorial: []
}

const TutorialProgressSB: React.FC<TutorialProgressSBProps> = (props) => {
  const { t } = useTranslation();
  const {
    count,
  } = props;

  const progressCount = useMemo(() => {
    return count/6*100
  }, [count])

  return (
    <FlexContainer
      width={"100%"}
      height={"fit-content"}
      border={"2px solid #E0E5EB"}
      borderRadius={"32px"}
      flexDirection={"column"}
      padding={"21px 0 38px"}
    >

      <FlexContainer
        width={"100%"}
        justifyContent={"space-between"}
        marginBottom={"18px"}
        padding={"0 32px"}
      >
        <PrimaryTextSpan
          fontSize={"18px"}
          lineHeight={"28px"}
          color={"#000"}
          fontWeight={700}
        >
          {t('Progress')}
        </PrimaryTextSpan>
        <FlexContainer>
          <PrimaryTextSpan
            fontSize={"18px"}
            lineHeight={"28px"}
            color={"#000"}
            fontWeight={700}
          >
            {count}
          </PrimaryTextSpan>
          <PrimaryTextSpan
            fontSize={"18px"}
            lineHeight={"28px"}
            color={"#A8B0BA"}
            fontWeight={700}
          >
            /6
          </PrimaryTextSpan>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer
        padding={"21px 32px 0"}
        marginBottom={"26px"}
      >
        <ProgressBar progress={progressCount} type={ProgressBarTypesEnum.PRIMARY}/>
      </FlexContainer>

      <FlexContainer
        flexDirection={"column"}
      >
        <TutorialUnitItem>
          <FlexContainer
            padding={"12px 32px 9px"}
            alignItems={"flex-start"}
            position={"relative"}
          >
            <FlexContainer
              position={"absolute"}
              width={"2px"}
              height={"100%"}
              backgroundColor={"#000"}
              top={"0px"}
              left={"-2px"}
              zIndex={"1"}
            />
            <FlexContainer
              padding={"6px 0 0 0"}
              marginRight={"10px"}
            >
              <SvgIcon {...IconUnits} fillColor={"#C0C4C9"}/>
            </FlexContainer>
            <FlexContainer
              flexDirection={"column"}
            >
              <PrimaryTextSpan>
                1.1 Text:
              </PrimaryTextSpan>
              <PrimaryTextSpan>
                Your goal by S.M.A.R.T. and life cases
              </PrimaryTextSpan>
            </FlexContainer>
          </FlexContainer>
        </TutorialUnitItem>

        <TutorialUnitItem>
          <FlexContainer
            padding={"12px 32px 9px"}
            alignItems={"flex-start"}
            position={"relative"}
          >
            <FlexContainer
              position={"absolute"}
              width={"2px"}
              height={"100%"}
              backgroundColor={"#000"}
              top={"0px"}
              left={"-2px"}
              zIndex={"1"}
            />
            <FlexContainer
              padding={"6px 0 0 0"}
              marginRight={"10px"}
            >
              <SvgIcon {...IconTests} fillColor={"#C0C4C9"}/>
            </FlexContainer>
            <FlexContainer
              flexDirection={"column"}
            >
              <PrimaryTextSpan>
                1.2 Test:
              </PrimaryTextSpan>
              <PrimaryTextSpan>
                What is S.M.A.R.T.
              </PrimaryTextSpan>
            </FlexContainer>
          </FlexContainer>
        </TutorialUnitItem>

      </FlexContainer>

    </FlexContainer>
  )
}

export default TutorialProgressSB;

const TutorialUnitItem = styled(FlexContainer)`
  box-shadow: -2px 0px 0 0px #000;
  background-color: #F1F4F8;
`