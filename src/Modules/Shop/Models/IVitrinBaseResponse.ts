import { IPicture } from "../../../infrastructure/Models/Entity/IPicture";
import IVitrinElement from "./IVitrinElement";

interface IVitrinTimeItem {
  StartHour: number;
  StartMinute: number;
  EndHour: number;
  EndMinute: number;
}
interface IVitrinHead {
  VendorId: number;
  ShortDescription: string;
  Description: string;
  Picture: IPicture;
  IsVerify: boolean;
  CommentCount: number;
  FollowerCount: number;
  VitrinType: number;
  StoreName: string;
  BusinessCategoryName: string;
  VitrinId: string;
  CustomerId: string;
  StoreInfo: {
    DisplayAddress: string;
    Phone: string;
    WorkingTime: {
      TimePeriods: IVitrinTimeItem[];
      IsOpen: boolean;
    };
  };
  VitrinElements: IVitrinElement[];
}

export type IVitrinBaseResponse = IVitrinHead;
