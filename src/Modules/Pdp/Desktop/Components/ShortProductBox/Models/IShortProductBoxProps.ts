import { IPicture } from "../../../../../../infrastructure/Models/Entity/IPicture";

export default interface IShortProductBoxProps {
  selectedProductCountToAdd: number;
  calculateTotalPrice: () => number;
  combinationName: string;
  combinationTypeName: string;
  productName: string;
  productFirstImage: IPicture;
  hasCombination: boolean;
}
