import { IPicture } from "./IPicture";

export interface IBrand {
  Id: number;
  Name: string;
  PictureUrl: IPicture;
  IsChecked: boolean;
}
