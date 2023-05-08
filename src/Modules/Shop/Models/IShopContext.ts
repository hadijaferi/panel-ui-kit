import { IVitrinPageTypes } from "../Constants/VitrinLinks";
import { IVitrinBaseResponse } from "./IVitrinBaseResponse";

export interface IShopContext {
  pageName: IVitrinPageTypes;
  vitrinType: "product" | "service";
  vitrinBase?: IVitrinBaseResponse;
}
