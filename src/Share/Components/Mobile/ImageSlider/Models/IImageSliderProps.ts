import { IPicture } from "../../../../../infrastructure/Models/Entity/IPicture";

export interface IImageSliderProps {
  images: IPicture[];
  imageSize: number;
  showLength?: number;
}
