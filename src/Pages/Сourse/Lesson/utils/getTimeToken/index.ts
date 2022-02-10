import req from "../../../../../utils/request";
import {configEndpoint} from "../../../../../config";

export const useGetTimeToken = async (tutorial: string, unit: number, task: number) => {
  const data = await req(configEndpoint.taskTime, {
    "tutorial": tutorial,
    "unit": unit,
    "task": task
  })

  localStorage.setItem("timeToken", data.data)
}