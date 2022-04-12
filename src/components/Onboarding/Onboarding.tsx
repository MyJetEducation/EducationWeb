import React from "react";
import {FlexContainer} from "../../styles/FlexContainer";
import {PrimaryTextSpan} from "../../styles/TextsElements";

import maskot from "../../assets/images/maskot.png";

interface OnboardingProps {
  text: string
}

const Onboarding = (props: OnboardingProps) => {
  return (
    <FlexContainer
      width="268px"
      flexDirection="column"
    >
      <FlexContainer
        width="100%"
        backgroundColor="#000"
        borderRadius="32px"
        height="fir-content"
        padding="20px"
        marginBottom="-40px"
      >
        <PrimaryTextSpan
          fontWeight={700}
          fontSize="18px"
          lineHeight="28px"
          color="#FFFFFF"
        >
          Let's make our first purchase. It's free
        </PrimaryTextSpan>
      </FlexContainer>
      <FlexContainer
        width="100%"
        justifyContent="center"
        zIndex="-1"
        position="relative"
      >
        <FlexContainer
          position="absolute"
          top="46px"
          left="46px"
          width="14px"
          height="14px"
          borderRadius="50%"
          backgroundColor="#000"
        />
        <FlexContainer
          position="absolute"
          top="66px"
          left="66px"
          width="6px"
          height="6px"
          borderRadius="50%"
          backgroundColor="#000"
        />
        <img src={maskot} alt="maskot"/>
      </FlexContainer>

    </FlexContainer>
  )
}

export default Onboarding;