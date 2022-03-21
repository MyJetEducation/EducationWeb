import { configureStore } from '@reduxjs/toolkit';
import userSlicer from "./userSlicer";
import menuSlicer from "./menuSlicer";
import testSlicer from "./testSlicer";
import dashboardSlicer from "./dashboardSlicer";
import progressMenuSlicer from "./progressMenuSlicer";
import statsSlicer from "./statsBlock";
import retryUnitSlicer from "./retryUnitSLicer";
import tutorialsSlicer from "./tutorialsSlicer";
import countRetrySlicer from "./countRetryAttempts";
import achievementsSlicer from "./achievementSlicer";
import summarySlicer from "./summarySlicer";
import userInfoSlicer from "./userInfoSlicer";
import userProgressSlicer from "./userProgressSlicer";
import timeTokenSlicer from "./timeTokenSlicer";
import startedSlicer from "./startedSlicer";

export const store = configureStore({
  reducer: {
    user: userSlicer,
    menu: menuSlicer,
    test: testSlicer,
    statsBlock: statsSlicer,
    dashboard: dashboardSlicer,
    progressMenu: progressMenuSlicer,
    retry: retryUnitSlicer,
    tutorials: tutorialsSlicer,
    countRetry: countRetrySlicer,
    achievements: achievementsSlicer,
    summary: summarySlicer,
    userInfo: userInfoSlicer,
    userProgress: userProgressSlicer,
    timeToken: timeTokenSlicer,
    started: startedSlicer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch