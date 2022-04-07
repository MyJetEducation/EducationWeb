import React from "react";
import {FlexContainer} from "../../styles/FlexContainer";
import {PrimaryTextSpan} from "../../styles/TextsElements";
import {useTranslation} from "react-i18next";

const LearningStatsProfile = () => {
  const {t} = useTranslation();
  return (
    <FlexContainer
      maxWidth="652px"
      width="100%"
      flexDirection="column"
      marginBottom="20px"
    >
      <FlexContainer
        width="100%"
        height="fit-content"
        border="2px solid #E0E5EB"
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
        >
          {t('Learning stats')}
        </PrimaryTextSpan>

        <FlexContainer>

          <FlexContainer
            flexDirection="column"
            marginRight="77px"
          >
            <PrimaryTextSpan
              fontWeight={600}
              fontSize="32px"
              lineHeight="40px"
              color="#0BCA1E"
              marginBottom="-7px"
            >
              90%
            </PrimaryTextSpan>
            <PrimaryTextSpan
              fontWeight={700}
              fontSize="18px"
              lineHeight="28px"
              color="#0BCA1E"
            >
              {t('Test score')}
            </PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer
            flexDirection="column"
            marginRight="61px"
          >
            <FlexContainer>
              <PrimaryTextSpan
                fontWeight={600}
                fontSize="32px"
                lineHeight="40px"
                color="#000"
                marginBottom="-7px"
              >
                1
              </PrimaryTextSpan>
              <PrimaryTextSpan
                fontWeight={600}
                fontSize="32px"
                lineHeight="40px"
                color="#A8B0BA"
                marginBottom="-7px"
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
              {t('Unit passed')}
            </PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer
            flexDirection="column"
            marginRight="74px"
          >
            <FlexContainer>
              <PrimaryTextSpan
                fontWeight={600}
                fontSize="32px"
                lineHeight="40px"
                color="#000"
                marginBottom="-7px"
              >
                1
              </PrimaryTextSpan>
              <PrimaryTextSpan
                fontWeight={600}
                fontSize="32px"
                lineHeight="40px"
                color="#A8B0BA"
                marginBottom="-7px"
              >
                /270
              </PrimaryTextSpan>
            </FlexContainer>

            <PrimaryTextSpan
              fontWeight={700}
              fontSize="18px"
              lineHeight="28px"
              color="#000"
            >
              {t('Tasks')}
            </PrimaryTextSpan>
          </FlexContainer>

          <FlexContainer
            flexDirection="column"
          >
            <PrimaryTextSpan
              fontWeight={600}
              fontSize="32px"
              lineHeight="40px"
              color="#000"
              marginBottom="-7px"
            >
              4
            </PrimaryTextSpan>

            <PrimaryTextSpan
              fontWeight={700}
              fontSize="18px"
              lineHeight="28px"
              color="#000"
            >
              {t('Days')}
            </PrimaryTextSpan>
          </FlexContainer>

        </FlexContainer>



      </FlexContainer>

    </FlexContainer>
  )
}

export default LearningStatsProfile;