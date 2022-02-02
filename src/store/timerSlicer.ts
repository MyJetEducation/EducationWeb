import { createSlice } from '@reduxjs/toolkit'
import {RootState} from "./index";
import req from "../utils/request";
import {configEndpoint} from "../config";

const initialState: any = {
  start: Date,
}

export const timerSlicer = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setStartTimer: (state) => {
      state.start = new Date()
    },
  }
});

export const setEndTimeAsync = () => async (dispatch: any, getState: () => RootState) => {
  const end: any = new Date();
  const startTime: any = getState().timer.start;
  await req(configEndpoint.unit1Text, {
    "isRetry": true,
    "duration": end - startTime
  })
}

export const {setStartTimer} = timerSlicer.actions;

export const startTimeSelector = (state: RootState) => state.timer.start;

export default timerSlicer.reducer;