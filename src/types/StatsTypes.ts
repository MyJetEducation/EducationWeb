import {AchievementsEnum} from "../enums/AchievementsEnum";

export interface HabitItemType {
  index: number,
  count: number,
  progress: number
}

export interface DashboardProgressTypes {
  achievements: AchievementsEnum[];
  habit: HabitItemType;
  skillProgress: number;
  taskScore: number;
  tasks: number;
  testScore: number;
}