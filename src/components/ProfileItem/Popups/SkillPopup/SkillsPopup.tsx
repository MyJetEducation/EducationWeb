import React from 'react';
import {FlexContainer} from "../../../../styles/FlexContainer";
import styled from "@emotion/styled";
import Concentration from "./Concentration";
import {PrimaryTextSpan} from "../../../../styles/TextsElements";
import Perseverance from "./Perseverance";
import Thoughtfulness from "./Thoughtfulness";
import Memory from "./Memory";
import Adaptability from "./Adaptability";
import Activity from "./Activity";

const SkillsPopup = () => {
  return (
    <FlexContainer
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      width="456px"
      height="456px"
    >
      <FlexContainer
        position="absolute"
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <FlexContainer
          width="204px"
          height="204px"
          borderRadius="50%"
          backgroundColor="#F1F4F8"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <PrimaryTextSpan
            fontWeight={700}
            fontSize="80px"
            lineHeight="60px"
            color="#000"
            marginBottom="16px"
          >
            1
          </PrimaryTextSpan>
          <PrimaryTextSpan
            fontWeight={700}
            fontSize="18px"
            lineHeight="28px"
            color="#000"
            textTransform="uppercase"
          >
            SKILLS MAP
          </PrimaryTextSpan>

        </FlexContainer>
      </FlexContainer>

      <Concentration/>
      <Perseverance/>
      <Thoughtfulness/>
      <Memory/>
      <Adaptability/>
      <Activity/>

    </FlexContainer>
  )
}

export default SkillsPopup;