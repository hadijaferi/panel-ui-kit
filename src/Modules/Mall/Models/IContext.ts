import { IFloor } from "../../../infrastructure/Models/Entity/IFloor";

export interface IMallContext {
  theme: Theme;
  isOpenDoor: boolean;
  section: Sections;
  floors: IFloor[];
  selectedFloor: IFloor;
  setOpenDoor: (isOpen: boolean) => void;
  setSection: (section: Sections) => void;
  setTheme: (theme: Theme) => void;
  setSelectedFloor: (floor: IFloor) => void;
  setFloors: (floors: IFloor[]) => void;
}

export type Sections = "floors" | "searchMall";
export type Theme = "mallThemeDark" | "mallThemeLight";
