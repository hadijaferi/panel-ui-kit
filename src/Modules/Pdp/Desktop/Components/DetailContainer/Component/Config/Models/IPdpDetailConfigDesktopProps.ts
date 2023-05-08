import { IProduct } from "../../../../../../../../infrastructure/Models/Entity/IProduct";
import { IBrand } from "../../../../../../../../infrastructure/Models/Entity/IBrand";
import { ICategory } from "../../../../../../../../infrastructure/Models/Entity/ICategory";
import IPdpProductPriceModel from "./IPdpProductPriceModel";
import IAttributeValueItem from "../../../../../../../../infrastructure/Models/Entity/IAttributeValueItem";
import IAttributeCombinationItem from "../../../../../../../../infrastructure/Models/Entity/IAttributeCombinationItem";

export interface IPdpDetailConfigProps {
  product?: IProduct;
  brand?: IBrand;
  category?: ICategory;

  // dynamic
  selectedColorVarietyId: number;
  selectedSizeVarietyId: number;
  setSelectedColorVarietyId: (id: number) => void;
  setSelectedSizeVarietyId: (id: number) => void;

  getProductLink: () => string;

  // helpers
  getProductId: () => number;
  getProductFullPrice: () => IPdpProductPriceModel;
  hasCombination: () => boolean;
  getCombinationType: () => string;

  getCombinationItems: () => IAttributeValueItem[];
  getCombinations: () => IAttributeCombinationItem[];
}
