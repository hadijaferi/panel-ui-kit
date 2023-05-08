import { IPicture } from "../../../../infrastructure/Models/Entity/IPicture";

export default interface IShoppingProduct {
  Id: number,
  Name: string,
  Picture: IPicture,
  InStock: boolean,
  Price: number,
  OldPrice: number,
  AdditionalShippingCharge: number
}
