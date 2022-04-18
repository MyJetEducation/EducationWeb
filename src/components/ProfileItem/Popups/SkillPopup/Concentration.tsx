import React from 'react';
import {PrimaryTextSpan} from "../../../../styles/TextsElements";
import {FlexContainer} from "../../../../styles/FlexContainer";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

import './Conc.css';
import styled from "@emotion/styled";

const Concentration = () => {
  return (


      <FlexContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        width="254px"
        height="254px"
      >
        <FlexContainer
          position="absolute"
          width="100%"
          height="100%"
          top="5px"
          left="-114px"
          justifyContent="center"
          alignItems="flex-end"
        >
          <FlexContainer
            width="198px"
            justifyContent="space-between"
            alignItems="center"
          >
            <FlexContainer
              width="161px"
              justifyContent="flex-end"
            >
              <PrimaryTextSpan
                fontSize="15px"
                lineHeight="20px"
                fontWeight={400}
                color="#000"
              >
                Concentration
              </PrimaryTextSpan>
            </FlexContainer>

            <FlexContainer
              width="37px"
              justifyContent="flex-end"
            >
              <PrimaryTextSpan
                fontWeight={600}
                fontSize="15px"
                lineHeight="20px"
                color="#000"
              >
                {10}%
              </PrimaryTextSpan>
            </FlexContainer>

          </FlexContainer>

        </FlexContainer>
        <Wrapper
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
        >
          <CircularProgressbar
            value={50}
            className="circular"
            styles={buildStyles({
              pathColor: "#000",
              trailColor: '#F1F4F8',
            })}
            strokeWidth={2}
          />
        </Wrapper>

      </FlexContainer>

  )
}

export default Concentration;

export const Wrapper = styled(FlexContainer)`
  transform: rotate3d(500, 0, 6, 180deg);
`