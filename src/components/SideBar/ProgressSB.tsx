import React, {useEffect, useMemo, useState} from 'react';

import {FlexContainer} from '../../styles/FlexContainer';
import {PrimaryTextParagraph} from "../../styles/TextsElements";
import {useTranslation} from "react-i18next";
import {ProgressBar} from "../../styles/ProgressBar";
import {PrimaryTextSpan} from "../../styles/TextsElements";
import {ProgressBarTypesEnum} from "../../styles/ProgressBar";
import {observer} from "mobx-react-lite";
import {useStores} from "../../hooks/useStores";
import LoaderForComponent from "../Preloader/LoaderForComponent";

export const HABIT_LIST = [
  {
    id: 1,
    title: "The habit to keep track of income / expenses"
  },
  {
    id: 2,
    title: "The habit of budgeting"
  },
  {
    id: 3,
    title: "The habit of making a financial plan"
  },
  {
    id: 4,
    title: "The habit of exploring passive income opportunities"
  },
  {
    id: 5,
    title: "The habit of forming savings"
  },
  {
    id: 6,
    title: "The habit of keeping a diary"
  },
  {
    id: 7,
    title: "The habit of investing"
  },
  {
    id: 8,
    title: "The habit of budgeting for all events"
  },
  {
    id: 9,
    title: "The habit of analyzing events around you"
  },
]

const ProgressSB = observer(() => {
  const { t } = useTranslation();
  const {userProfileStore} = useStores();
  const [isLoading, setIsLoading] = useState(false);

  const getProgress = async () => {
    setIsLoading(true)
    try {
      const result = userProfileStore.getDashboardProgress();
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    };
  }
  const habitName = useMemo(() => {
    if (!userProfileStore.habit) {
      return ""
    }
    return HABIT_LIST.find((item) => item.id === userProfileStore.habit?.index)?.title || ""
  }, [userProfileStore.habit]);

  useEffect(() => {
    getProgress()
  }, [])

  return (
    <FlexContainer
      width={"100%"}
      height={"fit-content"}
      borderRadius={"32px"}
      border={"2px solid #E0E5EB"}
      padding={"21px 16px 16px 32px"}
      flexDirection={"column"}
      marginBottom={"20px"}
      position={"relative"}
    >
      <PrimaryTextParagraph
        fontSize={"18px"}
        lineHeight={"156%"}
        fontWeight={"bold"}
        color={"#000"}
        marginBottom={"16px"}
      >
        {t('Your Progress')}
      </PrimaryTextParagraph>
      <FlexContainer
        flexDirection={"column"}
      >
        <FlexContainer
          flexDirection={"column"}
          marginBottom={"34px"}
        >
          <ProgressBar marginBottom={"13px"} progress={userProfileStore.habit?.progress || 0} type={ProgressBarTypesEnum.PRIMARY}/>
          <FlexContainer
            justifyContent={"space-between"}
          >
            <PrimaryTextSpan
              fontSize={"14px"}
              lineHeight={"21px"}
              fontWeight={400}
            >
              {t(habitName)}
            </PrimaryTextSpan>
            <PrimaryTextSpan
              fontSize={"14px"}
              lineHeight={"21px"}
              fontWeight={400}
            >
              {userProfileStore.habit?.progress}%
            </PrimaryTextSpan>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          flexDirection={"column"}
        >
          <ProgressBar
            marginBottom={"13px"}
            progress={userProfileStore.skillProgress}
            type={ProgressBarTypesEnum.PRIMARY}
          />
          <FlexContainer justifyContent={"space-between"}>
            <PrimaryTextSpan
              fontSize={"14px"}
              lineHeight={"21px"}
              fontWeight={400}
            >
              {t('Skill total')}
            </PrimaryTextSpan>
            <PrimaryTextSpan
              fontSize={"14px"}
              lineHeight={"21px"}
              fontWeight={400}
            >
              {userProfileStore.skillProgress}%
            </PrimaryTextSpan>
          </FlexContainer>

        </FlexContainer>
      </FlexContainer>
      <LoaderForComponent isLoading={isLoading} />
    </FlexContainer>
  )
})

export default ProgressSB;