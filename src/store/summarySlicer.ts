import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import req from "../services/request";
import {configEndpoint} from "../config";
import {RootState} from "./index";

import {ACHIEVEMENTS} from "../ui/Lesson/constans";

const initialState: any = {
  isLoading: false,
  achievements: null,
  data: null,
  error: null
}

export const summarySlicer = createSlice({
  name: "summary",
  initialState,
  reducers: {
    fetchSummary: (state) => {
      state.isLoading = true
    },
    fetchAchievementsResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.achievements = action.payload
    },
    fetchSummaryResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = action.payload
    },
    fetchSummaryReject: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
});

export const getSummaryAsync = (unit: string | undefined, tutorial: string | undefined) => async (dispatch: any) => {
  dispatch(fetchSummary())
  try {
    const data = await req(configEndpoint.unitSummary, {
      unit: unit,
      tutorial: tutorial
    });

    if (data.status > 300) {
      throw data
    }
    dispatch(fetchSummaryResolve(data.data))
    const receivedFilter = data.data?.achievements.map((item: any) => (
      item.toLowerCase().replace(/[^a-z]/ig, "")
    ));
    const received = ACHIEVEMENTS.filter((item) =>
      receivedFilter.includes(item.name.toLowerCase().replace(/[^a-z]/ig, "")
      )
    );
    dispatch(fetchAchievementsResolve(received))

  } catch (error) {
    dispatch(fetchSummaryReject("Some Error"))
  };
}

export const { fetchSummary, fetchSummaryReject, fetchSummaryResolve, fetchAchievementsResolve} = summarySlicer.actions;

export const isLoadingSummarySelector = (state: RootState) => state.summary.isLoading;
export const achievementsSummarySelector = (state: RootState) => state.summary.achievements;
export const summaryDataSelector = (state: RootState) => state.summary.data;
export const errorSummarySelector = (state: RootState) => state.summary.error;

export default summarySlicer.reducer;