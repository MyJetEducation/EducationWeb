import React, {useEffect, useMemo, useState} from "react";

import {FlexContainer} from "../../styles/FlexContainer";
import {useTranslation} from "react-i18next";
import {PrimaryTextSpan} from "../../styles/TextsElements";
import {AchievementsEnum} from "../../enums/AchievementsEnum";
import AchievementItem from "../AchievementItem";
import {useStores} from "../../hooks/useStores";
import LoaderForComponent from "../Preloader/LoaderForComponent";
import {TextAccentLink} from "../../styles/TextsElements";
import {observer} from "mobx-react-lite";

const AchievementsProfile = observer(() => {
  const {t} = useTranslation();
  const { userProfileStore } = useStores();

  const [isLoading, setIsLoading] = useState(false);

  const getAchievements = async () => {
    setIsLoading(true);
    try {
      const result = await userProfileStore.getAchievement();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const achievementList = useMemo(() => {
    const list = userProfileStore.userAchievements.slice(0, 3);
    return list;
  }, [userProfileStore.userAchievements]);

  useEffect(() => {
    getAchievements();
  }, []);
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
        border="2px solid #E0E5EB"
        borderRadius="32px"
        padding="21px 32px"
        flexDirection="column"
      >
        <FlexContainer
          alignItems="center"
          marginBottom="13px"
        >
          <PrimaryTextSpan
            color="#000"
            fontWeight={700}
            fontSize="18px"
            lineHeight="28px"
            marginRight="10px"
          >
            {t('Achievements')}
          </PrimaryTextSpan>
          <FlexContainer>
            <PrimaryTextSpan color="#A8B0BA" fontSize="18px" fontWeight={600}>{`${
              userProfileStore.totalActiveAchievementsCount
            } ${t('of')} ${
              userProfileStore.totalAchievementsCount
            }`}</PrimaryTextSpan>
          </FlexContainer>

        </FlexContainer>


        <FlexContainer
          alignItems="flex-start"
          justifyContent={
            achievementList.length < 3 ? 'flex-start' : 'space-between'
          }
        >
          {achievementList.map((el: AchievementsEnum) => (
            <AchievementItem
              marginRight={achievementList.length < 3 ? '24px' : ''}
              key={el}
              isActive={true}
              name={el}
            />
          ))}
        </FlexContainer>


        <TextAccentLink
          to={"/profile/achievements"}
          fontSize="14px"
        >
          {t('Show all')}
        </TextAccentLink>
      </FlexContainer>
      <LoaderForComponent isLoading={isLoading} />
    </FlexContainer>
  )
})

export default AchievementsProfile;