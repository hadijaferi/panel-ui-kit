import { IVitrinElementTypes } from "./IVitrinElementTypes";
import { IVitrinProductTypes } from "./IVitrinProductTypes";
import { IVitrinServiceTypes } from "./IVitrinServiceTypes";

interface IVitrinBaseElement {
  VitrinElementId: number;
  DisplayOrder: number;
  VitrinServiceElementTypeId: IVitrinServiceTypes;
  VitrinProductElementTypeId: IVitrinProductTypes;
  VitrinElementTypeId: IVitrinElementTypes;
  VitrinElementName: string;
  isLoading: boolean;
  isError: boolean;
}

export default interface IVitrinElement extends IVitrinBaseElement {
  [prop: string]: any;
}
