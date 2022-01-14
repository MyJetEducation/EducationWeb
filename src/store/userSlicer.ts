import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./index";

export interface UserState {
  token: string | null
}

const initialState: UserState = {
  token: localStorage.getItem("token") || null,
}

export const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token += action.payload
    }
  }
});

export const {setToken} = userSlicer.actions;

export const userTokenSelector = (state: RootState) => state.user.token;


export default userSlicer.reducer;

