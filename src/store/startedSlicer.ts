import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import req from "../services/request";
import {configEndpoint} from "../config";

const initialState: any = {
  error: null
}


export const startedSlicer = createSlice({
  name: "started",
  initialState,
  reducers: {
    getFetchStarted: (state) => {
      state.error = null
    },
    getFetchResolveStarted: (state, action: PayloadAction<any>) => {
      state.error = action.payload
    },
    getFetchRejectStarted: (state, action: PayloadAction<any>) => {
      state.error = action.payload
    }
  }
});

export const {getFetchStarted, getFetchResolveStarted, getFetchRejectStarted} = startedSlicer.actions;

export const getStartedAsync = () => async (dispatch: any) => {
  dispatch(getFetchStarted)
  try {
    const data = await req(configEndpoint.started, {})
    dispatch(getFetchResolveStarted(data.data));
  } catch (error) {
    dispatch(getFetchRejectStarted(error))
  };
}

export default startedSlicer.reducer;

