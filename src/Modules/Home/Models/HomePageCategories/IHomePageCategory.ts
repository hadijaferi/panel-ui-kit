import { IPicture } from "../../../../infrastructure/Models/Entity/IPicture";

export interface IHomePageCategory {
  Id: number;
  Name: string;
  Type: number;
  Count: number;
  Picture: Partial<IPicture>;
}
