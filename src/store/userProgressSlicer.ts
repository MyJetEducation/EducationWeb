import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./index";
import req from "../services/request";
import {configEndpoint} from "../config";

import {ProgressDashboardState} from "../domain/Dashboard/progressDashboard";
//:TODO make correct interface
const initialState: any = {
  data: null,
  isLoading: false,
  error: null
}

export const userProgressSlicer = createSlice({
  name: "userProgress",
  initialState,
  reducers: {
    getFetch: (state) => {
      state.isLoading = true
    },
    getFetchResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = action.payload
    },
    getFetchReject: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = null
    }
  }
});

export const {getFetch, getFetchResolve, getFetchReject} = userProgressSlicer.actions;

export const userProgressAsync = () => async (dispatch: any) => {
  dispatch(getFetch())
  try {
    const data = await req(configEndpoint.userProgress, {});
    dispatch(getFetchResolve(data.data));
  } catch (error) {
    dispatch(getFetchReject(error))
  };
}
export const userTaskScoreSelector = (state: RootState) => state.userProgress.data;

export default userProgressSlicer.reducer;

