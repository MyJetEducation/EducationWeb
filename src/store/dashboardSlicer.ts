import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import req from "../services/request";
import {configEndpoint} from "../config";
import {RootState} from "./index";

const initialState: any = {
  isLoading: false,
  data: null,
  error: null
}

export const dashboardSlicer = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchDashboard: (state) => {
      state.isLoading = true
    },
    fetchDashboardResolve: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = action.payload
    },
    fetchDashboardReject: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
});

export const getDashboardAsync = (tutorial: number) => async (dispatch: any) => {
  dispatch(fetchDashboard())
  try {
    const data = await req(configEndpoint.dashboard, {
      "tutorial": tutorial,
    });
    if (data.status > 300) {
      throw data
    }
    dispatch(fetchDashboardResolve(data.data))
  } catch (error) {
    dispatch(fetchDashboardReject("Some Error"))
  };
}

export const {fetchDashboard, fetchDashboardResolve, fetchDashboardReject} = dashboardSlicer.actions;

export const isLoadingDashboardSelector = (state: RootState) => state.dashboard.isLoading;
export const dataDashboardSelector = (state: RootState) => state.dashboard.data;
export const errorDashboardSelector = (state: RootState) => state.dashboard.error;


export default dashboardSlicer.reducer;

