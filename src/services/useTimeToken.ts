import req from "./request";
import {configEndpoint} from "../config";
import {useLocation} from "react-router-dom";

export const useGetTimeToken = async (tutorial: string, unit: number, task: number) => {
  const location: any = useLocation();
  const data = await req(configEndpoint.taskTime, {
    "tutorial": tutorial,
    "unit": unit,
    "task": task
  })
  if (!location.state?.readonly === true) {
    localStorage.setItem("timeToken", data.data);
  }
  return data
}