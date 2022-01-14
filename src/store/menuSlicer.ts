import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./index";
import {ARRAY} from "../Pages/FreeLesson/constans";


const initialState: any = localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key") as string) : ARRAY

export const menuSlicer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    validChange: (state, action: PayloadAction<string>) => {
      state[action.payload].valid = true

      // setMenu((prevState: any) => {
      //   const copyState = [...prevState];
      //   copyState[currentIndex].valid = true;
      //   return copyState;
      // })
    }
  }
});

export const {validChange} = menuSlicer.actions;

export const menuSelector = (state: RootState) => state.menu;


export default menuSlicer.reducer;

