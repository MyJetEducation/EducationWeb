import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import req from "../services/request";
import {configEndpoint} from "../config";
import {RootState} from "./index";

const initialState: any = {
  isLoading: false,
  data: null,
  error: null
}

export const countRetrySlicer = createSlice({
  name: "countRetry",
  initialState,
  reducers: {
    fetchCountRetry: (state) => {
      state.isLoading = true
    },
    fetchCountRetryResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = action.payload
    },
    fetchCountRetryReject: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
});

export const getCountRetryAsync = () => async (dispatch: any) => {
  dispatch(fetchCountRetry())
  try {
    const data = await req(configEndpoint.inRetryAttempts, {});
    if (data.status > 300) {
      throw data
    }
    dispatch(fetchCountRetryResolve(data.data))
  } catch (error) {
    dispatch(fetchCountRetryReject("Some Error"))
  }
  ;
}

export const {fetchCountRetry, fetchCountRetryResolve, fetchCountRetryReject} = countRetrySlicer.actions;

export const dataCountRetrySelector = (state: RootState) => state.countRetry.data;


export default countRetrySlicer.reducer;

