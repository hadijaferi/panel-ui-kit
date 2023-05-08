import { ILayouts } from "../../../infrastructure/Models/Theme/ILayouts";
import { IVitrinPageTypes } from "../Constants/VitrinLinks";
import { IVitrinBaseResponse } from "./IVitrinBaseResponse";

export interface IShopPageProps {
  username: string;
  pageName: IVitrinPageTypes;
  vitrinType: "product" | "service";
  vitrinBase: IVitrinBaseResponse;
  Layout: ILayouts;
}
