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
    },
    progressMenuValidChange: (state, action: PayloadAction<string>) => {
      state.data[action.payload].valid = true;
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
    const items = JSON.parse(data.data.items[0].value);
    console.log("####: items", items);
    dispatch(fetchProgressMenuResolve(items))
  } catch (error) {
    dispatch(fetchProgressMenuReject("Some Error"))
  };
}

export const setProgressMenuAsync = (currentIndex: string) => async (dispatch: any, getState: () => RootState)  => {
  dispatch(progressMenuValidChange(currentIndex));
  await req(configEndpoint.putKeyValue, {
    "items": [
      {
        "key": "progressMenuUnit1",
        "value": JSON.stringify(getState().progressMenu.data)
      }
    ]
  });
}

export const {fetchProgressMenu, fetchProgressMenuResolve, fetchProgressMenuReject, progressMenuValidChange} = progressMenuSlicer.actions;

export const currentIdSelector = (id: string) => (state: RootState) => state.menu.findIndex((item: any) => item?.id === id);
export const progressMenuSelector = (state: RootState) => state.progressMenu;

export default progressMenuSlicer.reducer;