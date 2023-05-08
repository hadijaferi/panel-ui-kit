import { IGetProductDetailsResponse } from "../../../Share/Models/Product/IGetProductDetailsResponse";
import IPdpProductPriceModel from "../Desktop/Components/DetailContainer/Component/Config/Models/IPdpProductPriceModel";
import IAttributeValueItem from "../../../infrastructure/Models/Entity/IAttributeValueItem";

export default class ProductHelpers {
  data: IGetProductDetailsResponse | undefined;

  selectedColorVarietyId = -1;

  selectedSizeVarietyId = -1;

  constructor(data: IGetProductDetailsResponse | undefined) {
    if (data) {
      this.data = data;
    }
  }

  getDetails = () => this.data;

  getCurrentCombination = () => {
    const { selectedColorVarietyId, selectedSizeVarietyId } = this;
    const attributeId: undefined | number =
      this.getCombinationType() === "color"
        ? selectedColorVarietyId
        : selectedSizeVarietyId;
    return this.getCombinations()?.find(item => item.Id === attributeId);
  };

  hasCombination = () => {
    return (this.data?.AttributeCombinations ?? []).length > 0;
  };

  getCombinationType = (): string => {
    return this.getCombinations()[0]?.Type ?? "size";
  };

  getCombinationTypeName = (): string => {
    return this.getCombinations()[0]?.Type === "color" ? "رنگ" : "سایز";
  };

  getDefaultCombination = () => {
    return this.data?.AttributeCombinations[0];
  };

  getCombinations = () => {
    return this.data?.AttributeCombinations ?? [];
  };

  getCombinationItems = (): IAttributeValueItem[] => {
    const combinations = this.getCombinations();
    if (combinations) {
      return combinations.map(item => item.ProductAttributeValues[0]);
    }
    return [];
  };

  getSelectedCombinationName = () => {
    const combination = this.getCurrentCombination();
    if (combination) {
      return combination.ProductAttributeValues[0].Name;
    }
    return "";
  };

  getProductFullPrice = (): IPdpProductPriceModel => {
    let oldPrice = 0;
    let price = 0;
    if (this.hasCombination()) {
      const combination = this.getCurrentCombination();

      if (combination) {
        oldPrice = combination.OldOverriddenPrice;
        price = combination.OverriddenPrice;
      }
    } else {
      const product = this.data?.Product;
      if (product) {
        oldPrice = product.OldPrice;
        price = product.Price;
      }
    }
    return {
      price,
      oldPrice,
    };
  };
}
