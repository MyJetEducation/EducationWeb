import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import req from "../services/request";
import {configEndpoint} from "../config";
import {RootState} from "./index";

import {ACHIEVEMENTS} from "../ui/Lesson/constans";

const initialState: any = {
  isLoading: false,
  received: null,
  unreceived: null,
  data: null,
  error: null
}

export const achievementsSlicer = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    fetchAchievements: (state) => {
      state.isLoading = true
    },
    fetchAchievementsResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.received = action.payload
    },
    fetchUnAchievementsResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.unreceived = action.payload
    },
    fetchAchievementsReject: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
});

export const getAchievementsAsync = () => async (dispatch: any) => {
  dispatch(fetchAchievements())
  try {
    const data = await req(configEndpoint.getAchievements, {});
    if (data.status > 300) {
      throw data
    }
    const receivedFilter = data.data?.userAchievements.map((item: any) => (
      item.toLowerCase().replace(/[^a-z]/ig, "")
    ));
    const unreceivedFilter = data.data?.unreceivedAchievements.map((item: any) => (
      item.toLowerCase().replace(/[^a-z]/ig, "")
    ));
    const received = ACHIEVEMENTS.filter((item) =>
      receivedFilter.includes(item.name.toLowerCase().replace(/[^a-z]/ig, "")
      )
    );
    const unreceived = ACHIEVEMENTS.filter((item) =>
      unreceivedFilter.includes(item.name.toLowerCase()
        .replace(/[^a-z]/ig, "")
      )
    );
    dispatch(fetchAchievementsResolve(received))
    dispatch(fetchUnAchievementsResolve(unreceived))
  } catch (error) {
    dispatch(fetchAchievementsReject("Some Error"))
  };
}

export const {fetchAchievements, fetchAchievementsResolve, fetchAchievementsReject, fetchUnAchievementsResolve} = achievementsSlicer.actions;

export const isLoadingAchievementsSelector = (state: RootState) => state.achievements.isLoading;
export const achievementsSelector = (state: RootState) => state.achievements.received;
export const unAchievementsSelector = (state: RootState) => state.achievements.unreceived;
export const errorAchievementsSelector = (state: RootState) => state.achievements.error;

export default achievementsSlicer.reducer;