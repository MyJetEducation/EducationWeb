import React, { useMemo } from 'react';

import starter from '../assets/images/achievements/motivation.png';
import ignition from '../assets/images/achievements/achievement.png';
import voila from '../assets/images/achievements/success.png';
import welcome from '../assets/images/achievements/success.png';
import firstTouch from '../assets/images/achievements/success.png';
import complaisance from '../assets/images/achievements/certificate.png';
import Eyescatter from '../assets/images/achievements/achieving-goals.png';
import pjFry from '../assets/images/achievements/diploma.png';
import soEasy from '../assets/images/achievements/money.png';
import habitant from '../assets/images/achievements/medal.png';
import greenArrow from '../assets/images/achievements/bow-and-arrow.png';
import nowIKnow from '../assets/images/achievements/nowIKnow.png';
import takeYourTime from '../assets/images/achievements/wreath.png';
import ALongWay from '../assets/images/achievements/wreath.png';
import iHaveSeenThis from '../assets/images/achievements/seen.png';
import bender from '../assets/images/achievements/learning.png';
import theSeeker from '../assets/images/achievements/thumbs-up.png';
import theGreatChanger from '../assets/images/achievements/creation.png';
import weGotCompany from '../assets/images/achievements/competitor.png';
import companion from '../assets/images/achievements/companion.png';
import newBeginning from '../assets/images/achievements/newBeginning.png';
import badLuck from '../assets/images/achievements/badLuck.png';
import unstoppable from '../assets/images/achievements/badLuck.png';
import paradox from '../assets/images/achievements/paradox.png';
import spender from '../assets/images/achievements/spender.png';
import trinity from '../assets/images/achievements/trinity.png';
import bullseye from '../assets/images/achievements/bullseye.png';
import insister from '../assets/images/achievements/insister.png';
import perfectTiming from '../assets/images/achievements/insister.png';
import doubleQuick from '../assets/images/achievements/doubleQuick.png';
import rareCollector from '../assets/images/achievements/rareCollector.png';
import flash from '../assets/images/achievements/flash.png';
import youCantHide from '../assets/images/achievements/flash.png';
import faceTime from '../assets/images/achievements/faceTime.png';
import theHabitMaster from '../assets/images/achievements/theHabitMaster.png';
import checkMe from '../assets/images/achievements/checkMe.png';
import superRareCollector from '../assets/images/achievements/superRareCollector.png';
import allTheKingsMen from '../assets/images/achievements/allTheKingsMen.png';
import roundTheWorld from '../assets/images/achievements/roundTheWorld.png';
import dayByDay from '../assets/images/achievements/dayByDay.png';
import inStore from '../assets/images/achievements/inStore.png';
import ultraRareCollector from '../assets/images/achievements/ultraRareCollector.png';
import curious from '../assets/images/achievements/curious.png';
import taDam from '../assets/images/achievements/taDam.png';
import myPride from '../assets/images/achievements/myPride.png';
import split from '../assets/images/achievements/split.png';
import dwarf from '../assets/images/achievements/dwarf.png';
import stability from '../assets/images/achievements/stability.png';
import notSoHard from '../assets/images/achievements/notSoHard.png';
import { FlexContainer } from '../styles/FlexContainer';
import { PrimaryTextSpan } from '../styles/TextsElements';
import styled from '@emotion/styled-base';
import { AchievementsEnum } from '../enums/AchievementsEnum';

enum AchievementsTypeEnum {
  STANDART = 'standard',
  RARE = 'rare',
  SUPER_RARE = 'superRare',
  ULTRA_RARE = 'ultraRare',
  UNIQUE = 'unique',
}

export const ACHIEVEMENTS = [
  {
    id: AchievementsEnum.Starter,
    type: AchievementsTypeEnum.STANDART,
    name: 'Starter',
    icon: starter,
    description: 'закончил профилирование',
  },
  {
    id: AchievementsEnum.Ignition,
    type: AchievementsTypeEnum.STANDART,
    name: 'Ignition',
    icon: ignition,
    description: 'начал первый урок',
  },
  {
    id: AchievementsEnum.Voila,
    type: AchievementsTypeEnum.STANDART,
    name: 'Voila',
    icon: voila,
    description: 'закончил последний урок по первой дисциплине',
  },
  {
    id: AchievementsEnum.Welcome,
    type: AchievementsTypeEnum.STANDART,
    name: 'Welcome',
    icon: welcome,
    description: 'впервые пригласил друга',
  },
  {
    id: AchievementsEnum.Complaisance,
    type: AchievementsTypeEnum.STANDART,
    name: 'Complaisance',
    icon: complaisance,
  },
  {
    id: AchievementsEnum.FirstTouch,
    type: AchievementsTypeEnum.STANDART,
    name: 'First touch',
    icon: firstTouch,
  },
  {
    id: AchievementsEnum.Eyescatter,
    type: AchievementsTypeEnum.STANDART,
    name: 'Eyescatter',
    icon: Eyescatter,
  },
  {
    id: AchievementsEnum.PjFry,
    type: AchievementsTypeEnum.STANDART,
    name: 'P.J.Fry',
    icon: pjFry,
  },
  {
    id: AchievementsEnum.SoEasy,
    type: AchievementsTypeEnum.STANDART,
    name: 'So easy..',
    icon: soEasy,
  },
  {
    id: AchievementsEnum.Habitant,
    type: AchievementsTypeEnum.STANDART,
    name: 'Habitant',
    icon: habitant,
  },
  {
    id: AchievementsEnum.GreenArrow,
    type: AchievementsTypeEnum.STANDART,
    name: 'Green Arrow',
    icon: greenArrow,
  },
  {
    id: AchievementsEnum.NowIKnow,
    type: AchievementsTypeEnum.RARE,
    name: 'Now I know',
    icon: nowIKnow,
  },
  {
    id: AchievementsEnum.TakeYourTime,
    type: AchievementsTypeEnum.RARE,
    name: 'Take your time',
    icon: takeYourTime,
  },
  {
    id: AchievementsEnum.ALongWay,
    type: AchievementsTypeEnum.RARE,
    name: 'A long way',
    icon: ALongWay,
  },
  {
    id: AchievementsEnum.IveSeenThis,
    type: AchievementsTypeEnum.RARE,
    name: "I've seen this",
    icon: iHaveSeenThis,
  },
  {
    id: AchievementsEnum.Bender,
    type: AchievementsTypeEnum.RARE,
    name: 'Bender',
    icon: bender,
  },
  {
    id: AchievementsEnum.TheSeeker,
    type: AchievementsTypeEnum.RARE,
    name: 'The Seeker',
    icon: theSeeker,
  },
  {
    id: AchievementsEnum.TheGreatChanger,
    type: AchievementsTypeEnum.RARE,
    name: 'The great changer',
    icon: theGreatChanger,
  },
  {
    id: AchievementsEnum.WeGotCompany,
    type: AchievementsTypeEnum.RARE,
    name: 'We got company',
    icon: weGotCompany,
  },
  {
    id: AchievementsEnum.Companion,
    type: AchievementsTypeEnum.RARE,
    name: 'Companion',
    icon: companion,
  },
  {
    id: AchievementsEnum.NewBeginning,
    type: AchievementsTypeEnum.RARE,
    name: 'New Beginning',
    icon: newBeginning,
  },
  {
    id: AchievementsEnum.BadLuck,
    type: AchievementsTypeEnum.RARE,
    name: 'Bad Luck',
    icon: badLuck,
  },
  {
    id: AchievementsEnum.Unstoppable,
    type: AchievementsTypeEnum.RARE,
    name: 'Unstoppable',
    icon: unstoppable,
  },
  {
    id: AchievementsEnum.Paradox,
    type: AchievementsTypeEnum.RARE,
    name: 'Paradox',
    icon: paradox,
  },
  {
    id: AchievementsEnum.Spender,
    type: AchievementsTypeEnum.RARE,
    name: 'Spender',
    icon: spender,
  },
  {
    id: AchievementsEnum.Trinity,
    type: AchievementsTypeEnum.RARE,
    name: 'Trinity',
    icon: trinity,
  },
  {
    id: AchievementsEnum.Bullseye,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: 'Bullseye',
    icon: bullseye,
  },
  {
    id: AchievementsEnum.Insister,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: 'Insister',
    icon: insister,
  },
  {
    id: AchievementsEnum.PerfectTiming,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: 'Perfect timing',
    icon: perfectTiming,
  },
  {
    id: AchievementsEnum.DoubleQuick,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: 'Double Quick',
    icon: doubleQuick,
  },
  {
    id: AchievementsEnum.RareCollector,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: 'Rare collector',
    icon: rareCollector,
  },
  {
    id: AchievementsEnum.Flash,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: 'Flash',
    icon: flash,
  },
  {
    id: AchievementsEnum.YouCantHide,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: "You can't hide",
    icon: youCantHide,
  },
  {
    id: AchievementsEnum.FaceTime,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: 'FaceTime',
    icon: faceTime,
  },
  {
    id: AchievementsEnum.TheHabitMaster,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: 'The habit master',
    icon: theHabitMaster,
  },
  {
    id: AchievementsEnum.CheckMe,
    type: AchievementsTypeEnum.ULTRA_RARE,
    name: 'Check me',
    icon: checkMe,
  },
  {
    id: AchievementsEnum.SuperRareCollector,
    type: AchievementsTypeEnum.ULTRA_RARE,
    name: 'Super Rare collector',
    icon: superRareCollector,
  },
  {
    id: AchievementsEnum.AllTheKingsMen,
    type: AchievementsTypeEnum.ULTRA_RARE,
    name: "All the king's men",
    icon: allTheKingsMen,
  },
  {
    id: AchievementsEnum.RoundTheWorld,
    type: AchievementsTypeEnum.ULTRA_RARE,
    name: 'Round-the-world',
    icon: roundTheWorld,
  },
  {
    id: AchievementsEnum.DayByDay,
    type: AchievementsTypeEnum.ULTRA_RARE,
    name: 'Day by day',
    icon: dayByDay,
  },
  {
    id: AchievementsEnum.InStore,
    type: AchievementsTypeEnum.ULTRA_RARE,
    name: 'In store',
    icon: inStore,
  },
  {
    id: AchievementsEnum.UltraRareCollector,
    type: AchievementsTypeEnum.UNIQUE,
    name: 'Ultra rare collector',
    icon: ultraRareCollector,
  },
  {
    id: AchievementsEnum.Curious,
    type: AchievementsTypeEnum.UNIQUE,
    name: 'Curious',
    icon: curious,
  },
  {
    id: AchievementsEnum.TaDam,
    type: AchievementsTypeEnum.UNIQUE,
    name: 'Ta-Dam!',
    icon: taDam,
  },
  {
    id: AchievementsEnum.MyPride,
    type: AchievementsTypeEnum.UNIQUE,
    name: 'My pride',
    icon: myPride,
  },
  {
    id: AchievementsEnum.Split,
    type: AchievementsTypeEnum.UNIQUE,
    name: 'Split',
    icon: split,
  },
  {
    id: AchievementsEnum.Dwarf,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: 'Dwarf',
    icon: dwarf,
  },
  {
    id: AchievementsEnum.Stability,
    type: AchievementsTypeEnum.SUPER_RARE,
    name: 'Stability',
    icon: stability,
  },
  {
    id: AchievementsEnum.NotSoHard,
    type: AchievementsTypeEnum.UNIQUE,
    name: 'Not so hard',
    icon: notSoHard,
  },
];

interface Props {
  name: AchievementsEnum;
  isActive?: boolean;
  marginRight?: string;
}

const AchieventItem = ({ name, isActive = false, marginRight = '' }: Props) => {
  const achievementName = useMemo(() => {
    return ACHIEVEMENTS.find((el) => el.id === name)?.name || '';
  }, [name]);

  const achievementImage = useMemo(() => {
    return ACHIEVEMENTS.find((el) => el.id === name)?.icon || '';
  }, [name]);

  const bgColorByType = useMemo(() => {
    const type = ACHIEVEMENTS.find((el) => el.id === name)?.type;
    if (!isActive) {
      return '#F1F4F8';
    }
    switch (type) {
      case AchievementsTypeEnum.STANDART:
        return '#FE7201';
      case AchievementsTypeEnum.RARE:
        return '#FE221E';
      case AchievementsTypeEnum.SUPER_RARE:
        return '#FE6492';
      case AchievementsTypeEnum.ULTRA_RARE:
        return '#EB0778';
      case AchievementsTypeEnum.UNIQUE:
        return '#A131F3';
      default:
        return '#F1F4F8';
    }
  }, [name, isActive]);

  return (
    <FlexContainer
      width="56px"
      flexDirection="column"
      justifyContent="center"
      marginRight={marginRight}
    >
      <AchievementIconWrap backgroundColor={bgColorByType}>
        <img src={achievementImage} alt="" />
      </AchievementIconWrap>
      <PrimaryTextSpan color="#777C85" fontSize="12px" textAlign="center">
        {achievementName}
      </PrimaryTextSpan>
    </FlexContainer>
  );
};

export default AchieventItem;

const AchievementIconWrap = styled(FlexContainer)`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  img {
    max-width: 32px;
    height: auto;
  }
`;
