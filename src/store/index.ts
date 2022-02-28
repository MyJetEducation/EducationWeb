import { configureStore } from '@reduxjs/toolkit';
import userSlicer from "./userSlicer";
import menuSlicer from "./menuSlicer";
import testSlicer from "./testSlicer";
import dashboardSlicer from "./dashboardSlicer";
import progressMenuSlicer from "./progressMenuSlicer";
import progressDashboardSlicer from "./allProgressDashboard";
import retryUnitSlicer from "./retryUnitSLicer";
import tutorialsSlicer from "./tutorialsSlicer";

export const store = configureStore({
  reducer: {
    user: userSlicer,
    menu: menuSlicer,
    test: testSlicer,
    progress: progressDashboardSlicer,
    dashboard: dashboardSlicer,
    progressMenu: progressMenuSlicer,
    retry: retryUnitSlicer,
    tutorials: tutorialsSlicer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch