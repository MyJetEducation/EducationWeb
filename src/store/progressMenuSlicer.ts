import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./index";
import req from "../utils/request";
import {configEndpoint} from "../config";

const initialState: any = {
  isLoading: false,
  data: [],
  error: null
}

export const progressMenuSlicer = createSlice({
  name: "progressMenu",
  initialState,
  reducers: {
    fetchProgressMenu: (state) => {
      state.isLoading = true
    },
    fetchProgressMenuResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = action.payload
    },
    fetchProgressMenuReject: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
});

export const progressMenuAsync = () => async (dispatch: any) => {
  dispatch(fetchProgressMenu())
  try {
    const data = await req(configEndpoint.getKeyValue, {
      "keys": [
        "progressMenuUnit1"
      ]
    });
    const items = JSON.parse(data.data.items[0].value)
    dispatch(fetchProgressMenuResolve(items))
  } catch (error) {
    dispatch(fetchProgressMenuReject("Some Error"))
  };
}

export const {fetchProgressMenu, fetchProgressMenuResolve, fetchProgressMenuReject} = progressMenuSlicer.actions;

export const progressMenuSelector = (state: RootState) => state.progressMenu;
export const currentIdProgressMenuSelector = (id: string) => (state: RootState) => state.progressMenu.findIndex((item: any) => item?.id === id);

export default progressMenuSlicer.reducer;

