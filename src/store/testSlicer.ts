import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./index";

const initialState = {
  disableButton: false,
}
export const testSlicer = createSlice({
  name: "test",
  initialState,
  reducers: {
    setDisabledBtn: (state, action: PayloadAction<boolean>) => {
      state.disableButton = action.payload
    }
  }
});

export const {setDisabledBtn} = testSlicer.actions;

export const testSelector = (state: RootState) => state.test.disableButton;


export default testSlicer.reducer;

