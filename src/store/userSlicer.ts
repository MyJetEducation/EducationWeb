import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./index";
import req from "../services/request";
import {configEndpoint} from "../config";

import {UserState} from "../domain/auth";

const initialState: UserState = {
  token: localStorage.getItem("token") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  isLoading: false,
  data: null,
  error: null
}

export const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    getFetch: (state) => {
      state.isLoading = true
    },
    getFetchResolve: (state, action: PayloadAction<{token: string, refreshToken: string}>) => {
      state.isLoading = false
      state.data = action.payload
      state.error = null
    },
    getFetchReject: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = null
      state.error = action.payload
    },
    resetUser: (state) => {
      state.isLoading = false
      state.data = null
      state.error = null
    }
  }
});

export const {getFetch, getFetchResolve, getFetchReject, resetUser} = userSlicer.actions;

export const getFetchUserAsync = (values: {userName: string, password: string}, callback?: () => void) => async (dispatch: any) => {
  dispatch(getFetch())
  try {
    const data = await req(configEndpoint.authLogin, values);
    console.log("####: data", data);
    callback && callback();
  } catch (error) {
    dispatch(getFetchReject(error))
  };
}

export const userIsLoadingSelector = (state: RootState) => state.user.isLoading;
export const userErrorSelector = (state: RootState) => state.user.error;
export const userTokenSelector = (state: RootState) => state.user.data?.token;
export const userRefreshTokenSelector = (state: RootState) => state.user.data?.refreshToken;

export default userSlicer.reducer;

