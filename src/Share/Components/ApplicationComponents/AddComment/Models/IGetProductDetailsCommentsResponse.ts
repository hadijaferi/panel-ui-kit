import { IPicture } from "../../../../../infrastructure/Models/Entity/IPicture";

export interface IGetProductDetailsCommentsResponse {
  Name: string;
  EnglishName: string;
  CustomerRate: number;
  Picture: IPicture;
}
