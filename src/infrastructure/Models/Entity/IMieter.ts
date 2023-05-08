import { ICity } from "./ICity";
import { IPicture } from "./IPicture";

export interface IMieter {
  ChatEnabled: boolean;
  ChatReplyRate: number;
  City: ICity;
  CustomerSatisfactionRate: number;
  Id: number;
  LogoPicture: IPicture; // imp
  Name: string;
  OnTimeDeliveryRate: number;
  Rate: number;
  ReviewCount: number;
  SeoName: string;
  Status: number;
  PhoneNumber: string;
  StoreName: string;
  Address: string;
  Score: number;
  Slogan: string;
  ProductPictures: Array<IPicture>;
  Picture: IPicture;
  ProductCount: number;
}
