import req from "./request";
import {configEndpoint} from "../config";
import {useLocation} from "react-router-dom";
import {useMemo} from "react";

export const useGetTimeToken = async (tutorial: string, unit: number, task: number) => {
  const tutorialName = useMemo(() => {
    switch (tutorial) {
      case "personal":
        return "1";
      case "behavioral":
        return "2";
      case "financial":
        return "3";
      case "finance":
        return "4";
      case "health":
        return "5";
      case "psychology":
        return "6";
      case "security":
        return "7";
      case "timemanagement":
        return "8";
      case "economics":
        return "9"
      default:
        return ""
    }
  }, []);

  const location: any = useLocation();
  const data = await req(configEndpoint.taskTime, {
    "tutorial": tutorialName,
    "unit": unit,
    "task": task
  })
  if (!location.state?.readonly === true) {
    localStorage.setItem("timeToken", data.data);
  }
  return data
}