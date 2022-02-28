import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import req from "../services/request";
import {configEndpoint} from "../config";
import {RootState} from "./index";

const initialState: any = {
  isLoading: false,
  data: null,
  error: null
}

export const tutorialsSlicer = createSlice({
  name: "tutorials",
  initialState,
  reducers: {
    fetchTutorials: (state) => {
      state.isLoading = true
    },
    fetchTutorialsResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = action.payload
    },
    fetchTutorialsReject: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
});

export const getTutorialsAsync = () => async (dispatch: any) => {
  dispatch(fetchTutorials())
  try {
    const data = await req(configEndpoint.tutorials, {});
    if (data.status > 300) {
      throw data
    }
    dispatch(fetchTutorialsResolve(data.data))
  } catch (error) {
    dispatch(fetchTutorialsReject("Some Error"))
  };
}

export const {fetchTutorials, fetchTutorialsResolve, fetchTutorialsReject} = tutorialsSlicer.actions;

export const isLoadingTutorialsSelector = (state: RootState) => state.tutorials.isLoading;
export const dataTutorialsSelector = (state: RootState) => state.tutorials.data?.tutorials;
export const errorTutorialsSelector = (state: RootState) => state.tutorials.error;


export default tutorialsSlicer.reducer;

