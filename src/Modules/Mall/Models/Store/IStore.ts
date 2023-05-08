import { ILocation } from "../../../../infrastructure/Models/Entity/ILocation";
import { IMieter } from "../../../../infrastructure/Models/Entity/IMieter";
import { IPicture } from "../../../../infrastructure/Models/Entity/IPicture";

export interface IStore extends IMieter {
  VitrinPicture: IPicture;
  Logo: IPicture;
  Location: ILocation;
  PackageId: number;
}
