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

export const getDashboardAsync = (tutorial: number) => async (dispatch: any, getState: any) => {
  dispatch(fetchDashboard())
  try {
    const result = await req(configEndpoint.dashboard, {
      "tutorial": tutorial,
    });
    if (result.status > 300) {
      throw result
    }
    const {dashboard: {data}} = getState();
    if (data === null) {
      dispatch(fetchDashboardResolve({
        [tutorial]: result.data
      }));
    } else {
      dispatch(fetchDashboardResolve({
        ...data,
        [tutorial]: result.data
      }));
    }

  } catch (error) {
    dispatch(fetchDashboardReject("Some Error"))
  };
}

export const {fetchDashboard, fetchDashboardResolve, fetchDashboardReject} = dashboardSlicer.actions;

export const isLoadingDashboardSelector = (state: RootState) => state.dashboard.isLoading;
export const dataDashboardSelector = (state: RootState) => state.dashboard.data;
export const currentDataDashboardSelector = (id: string | number) => (state: RootState) => {
  if (!state.dashboard.data) {
    return null
  };
  return state.dashboard.data[id];
};

export const errorDashboardSelector = (state: RootState) => state.dashboard.error;


export default dashboardSlicer.reducer;

