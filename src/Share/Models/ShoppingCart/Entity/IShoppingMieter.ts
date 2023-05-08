import { IPicture } from "../../../../infrastructure/Models/Entity/IPicture";

export default interface IShoppingMieter {
  Id: number,
  Name: string,
  FreeShippingOverXValue: number,
  FreeShippingOverXEnabled: boolean,
  Picture: IPicture
}
