import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./index";
import {ARRAY} from "../Pages/FreeLesson/constans";


const initialState: any = localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key") as string) : ARRAY

export const menuSlicer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    validChange: (state, action: PayloadAction<string>) => {
      state[action.payload].valid = true;
      console.log("####: state", state);
      // setMenu((prevState: any) => {
      //   const copyState = [...prevState];
      //   copyState[currentIndex].valid = true;
      //   return copyState;
      // })
    }
  }
});

export const validChangeAsync = (id: string) => (dispatch: any) => {
  dispatch(validChange(id))
  return Promise.resolve()
}

export const {validChange} = menuSlicer.actions;

export const menuSelector = (state: RootState) => state.menu;
export const currentIdSelector = (id: string) => (state: RootState) => state.menu.findIndex((item: any) => item?.id === id);


export default menuSlicer.reducer;

