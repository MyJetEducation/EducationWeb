import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./index";

const initialState: any = {
  data: null
}

export const retryUnitSlicer = createSlice({
  name: "retry",
  initialState,
  reducers: {
    setUnit: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = action.payload
    }
  }
});

export const {setUnit} = retryUnitSlicer.actions;

export const retryUnitSelector = (state: RootState) => state.retry.data;

export default retryUnitSlicer.reducer;

