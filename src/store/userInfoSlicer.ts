import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import req from "../services/request";
import {configEndpoint} from "../config";
import {RootState} from "./index";

const initialState: any = {
  isLoading: false,
  data: null,
  error: null
}

export const userInfoSlicer = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    fetchUserInfo: (state) => {
      state.isLoading = true
    },
    fetchUserInfoResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = action.payload
    },
    fetchUserInfoReject: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
});

export const getUserInfoAsync = () => async (dispatch: any) => {
  dispatch(fetchUserInfo())
  try {
    const data = await req(configEndpoint.getUserInfo, {});
    if (data.status > 300) {
      throw data
    }
    dispatch(fetchUserInfoResolve(data.data))
  } catch (error) {
    dispatch(fetchUserInfoReject("Some Error"))
  };
}

export const { fetchUserInfo, fetchUserInfoResolve, fetchUserInfoReject} = userInfoSlicer.actions;

export const isLoadingSummarySelector = (state: RootState) => state.userInfo.isLoading;
export const userInfoSelector = (state: RootState) => state.userInfo.data;
export const errorSummarySelector = (state: RootState) => state.userInfo.error;

export default userInfoSlicer.reducer;