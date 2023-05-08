import IVitrinElement from "./IVitrinElement";

export default interface IVitrinBaseComponentProps extends IVitrinElement {
  vitrinType: "product" | "service";
}
