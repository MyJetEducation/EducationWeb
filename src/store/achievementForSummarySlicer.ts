import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import req from "../services/request";
import {configEndpoint} from "../config";
import {RootState} from "./index";

import {ACHIEVEMENTS} from "../ui/Lesson/constans";

const initialState: any = {
  isLoading: false,
  received: null,
  data: null,
  error: null
}

export const achievementsForSummarySlicer = createSlice({
  name: "achievementsForSummary",
  initialState,
  reducers: {
    fetchAchievementsForSummary: (state) => {
      state.isLoading = true
    },
    fetchAchievementsForSummaryResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.received = action.payload
    },
    fetchAchievementsForSummaryReject: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
});

export const getAchievementsForSummaryAsync = (unit: string | undefined, tutorial: string | undefined) => async (dispatch: any) => {
  dispatch(fetchAchievementsForSummary())
  try {
    const data = await req(configEndpoint.unitSummary, {
      unit: unit,
      tutorial: tutorial
    });
    if (data.status > 300) {
      throw data
    }
    const receivedFilter = data.data?.achievements.map((item: any) => (
      item.toLowerCase().replace(/[^a-z]/ig, "")
    ));
    const received = ACHIEVEMENTS.filter((item) =>
      receivedFilter.includes(item.name.toLowerCase().replace(/[^a-z]/ig, "")
      )
    );

    dispatch(fetchAchievementsForSummaryResolve(received))
  } catch (error) {
    dispatch(fetchAchievementsForSummaryReject("Some Error"))
  };
}

export const {fetchAchievementsForSummary, fetchAchievementsForSummaryResolve, fetchAchievementsForSummaryReject} = achievementsForSummarySlicer.actions;

export const isLoadingAchievementsSelector = (state: RootState) => state.achievementsForSummary.isLoading;
export const achievementsForSummarySelector = (state: RootState) => state.achievementsForSummary.received;
export const achievementsForSummaryDataSelector = (state: RootState) => state.achievementsForSummary.data;
export const errorAchievementsSelector = (state: RootState) => state.achievementsForSummary.error;

export default achievementsForSummarySlicer.reducer;