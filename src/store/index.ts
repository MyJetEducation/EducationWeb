import { configureStore } from '@reduxjs/toolkit';
import userSlicer from "./userSlicer";
import menuSlicer from "./menuSlicer";
import testSlicer from "./testSlicer";
import dashboardSlicer from "./dashboardSlicer";
import progressMenuSlicer from "./progressMenuSlicer";
// import timerSlicer from "./timerSlicer";

export const store = configureStore({
  reducer: {
    user: userSlicer,
    menu: menuSlicer,
    test: testSlicer,
    dashboard: dashboardSlicer,
    progressMenu: progressMenuSlicer,
    // timer: timerSlicer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch