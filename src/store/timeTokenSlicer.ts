import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./index";
import req from "../services/request";
import {configEndpoint} from "../config";

const initialState: any = {
  data: null,
  error: null
}


export const timeTokenSlicer = createSlice({
  name: "timeToken",
  initialState,
  reducers: {
    getFetchTimeToken: (state) => {
      state.error = null
    },
    getFetchResolveTimeToken: (state, action: PayloadAction<any>) => {
      state.data = action.payload
      state.error = null
    },
    getFetchRejectTimeToken: (state, action: PayloadAction<any>) => {
      state.data = null
      state.error = action.payload
    },
    getCleanTimeToken: (state) => {
      state.isLoading = false
      state.data = null
      state.error = null
    }
  }
});

export const {getFetchTimeToken, getFetchResolveTimeToken, getFetchRejectTimeToken, getCleanTimeToken} = timeTokenSlicer.actions;

export const getTimeTokenAsync = (tutorial: string | undefined, unit: string | undefined, task: string | undefined) => async (dispatch: any) => {
  const tutorialName = () => {
    switch (tutorial) {
      case "personal":
        return "1";
      case "behavioral":
        return "2";
      case "financial":
        return "3";
      case "finance":
        return "4";
      case "health":
        return "5";
      case "psychology":
        return "6";
      case "security":
        return "7";
      case "timemanagement":
        return "8";
      case "economics":
        return "9"
      default:
        return ""
    }
  };
  dispatch(getFetchTimeToken())
  try {
    const data = await req(configEndpoint.taskTime, {
      "tutorial": tutorialName(),
      "unit": Number(unit?.replace("unit", "")),
      "task": Number(task)
    })
    dispatch(getFetchResolveTimeToken(data.data));
    localStorage.setItem("tT", data.data);
  } catch (error) {
    dispatch(getFetchRejectTimeToken(error))
  };
}
export const timeTokenSelector = (state: RootState) => state.timeToken.data;
export const errorTimeTokenSelector = (state: RootState) => state.timeToken.error;

export default timeTokenSlicer.reducer;

