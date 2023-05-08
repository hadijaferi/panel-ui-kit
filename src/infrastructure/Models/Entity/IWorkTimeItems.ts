import { IWorkTimeItemsActiveTimes } from "./IWorkTimeItemsActiveTimes";

export interface IWorkTimeItems {
  Id: number;
  WeekDayId: number;
  IsActive: boolean;
  ActiveTimes: IWorkTimeItemsActiveTimes[];
}
