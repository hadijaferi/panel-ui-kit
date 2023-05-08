import { IPicture } from "../../../../infrastructure/Models/Entity/IPicture";

export interface IMainSliderResponse {
  SlideId: number;
  DestinationUrl: string;
  Picture: IPicture;
}
