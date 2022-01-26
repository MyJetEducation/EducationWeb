import { configureStore } from '@reduxjs/toolkit';
import counterSlicer from "./counterSlicer";
import userSlicer from "./userSlicer";
import menuSlicer from "./menuSlicer";
import testSlicer from "./testSlicer";
import dashboardSlicer from "./dashboardSlicer";
import progressMenuSlicer from "./progressMenuSlicer";

export const store = configureStore({
  reducer: {
    counter: counterSlicer,
    user: userSlicer,
    menu: menuSlicer,
    test: testSlicer,
    dashboard: dashboardSlicer,
    progressMenu: progressMenuSlicer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch