import { useSelector } from "react-redux";
import { IRootState } from "../../../Share/Store/Reducer";
import usePdpHelpers from "./usePdpHelpers";

interface ICombinationGuaranty {
  combinationId: number;
  GuarantyId: number;
  GuarantyName: string;
  price: number;
}

interface ICombinationItem {
  uId: number;
  title: string;
  value: string;
  color?: string;
  IdGuaranties: ICombinationGuaranty[]; // <combinationId ,guarantyId >
}

export const usePdpCombination = () => {
  const helper = usePdpHelpers();

  const selectedColorId = useSelector(
    (state: IRootState) => state.product.selectedColorVarietyId,
  );
  const selectedSizeId = useSelector(
    (state: IRootState) => state.product.selectedSizeVarietyId,
  );

  const details = helper.getDetails();
  const guarantyList = details?.Guaranties;
  const getSelectCombinationId = () => {
    if (helper.getCombinationType() === "color") {
      return selectedColorId;
    }
    return selectedSizeId;
  };

  const getCombinations = () => helper.getCombinations();
  const combinations = getCombinations();

  const getSelectedCombinationTypeName = () => helper.getCombinationTypeName();
  const getSelectedCombinationName = () => helper.getSelectedCombinationName();
  const getCombinationType = (): string => {
    return combinations[0]?.Type ?? "size";
  };
  const hasCombination = () => helper.hasCombination();

  const getPrettyCombinations = () => {
    const items: ICombinationItem[] = [];

    for (let i = 0; i < combinations.length; i += 1) {
      const combinationItem = combinations[i];
      const findObjIndex = items.findIndex(
        item => item.title === combinationItem.ProductAttributeValues?.[0].Name,
      );

      const findGuaranty = guarantyList?.find(
        guaranty => guaranty.Id === combinationItem.GuarantyId,
      );
      if (findObjIndex !== -1) {
        const fundedItem = items[findObjIndex];
        items[findObjIndex].IdGuaranties = [
          ...fundedItem.IdGuaranties,
          {
            combinationId: combinationItem.Id,
            GuarantyId: combinationItem.GuarantyId,
            GuarantyName: findGuaranty?.Name ?? "",
            price: combinationItem.OverriddenPrice,
          },
        ];
      } else {
        const combinationAttrValue =
          combinationItem.ProductAttributeValues?.[0];
        if (combinationAttrValue) {
          items.push({
            uId: i,
            IdGuaranties: [
              {
                combinationId: combinationItem.Id,
                GuarantyId: combinationItem.GuarantyId,
                GuarantyName: findGuaranty?.Name ?? "",
                price: combinationItem.OverriddenPrice,
              },
            ],
            title: combinationAttrValue.Name,
            color: combinationAttrValue.ColorSquaresRgb,
            value: combinationAttrValue.Name,
          });
        }
      }
    }
    return items;
  };
  const getCombinationByName = (name: string) => {
    return combinations.find(
      item => item.ProductAttributeValues?.[0].Name === name,
    );
  };
  const setSelectedVarietyId = (id: number) => {
    const combinationType = getCombinationType();
    if (combinationType === "color") {
      helper.setSelectedColorVarietyId(id);
    } else {
      helper.setSelectedSizeVarietyId(id);
    }
  };
  const getCurrentPrettyCombination = () =>
    getPrettyCombinations().find(
      combination => combination.title === getSelectedCombinationName(),
    );
  const getSelectedGuaranty = () => {
    const prettyCombination = getCurrentPrettyCombination();
    const combination = prettyCombination?.IdGuaranties.find(
      guaranty => guaranty.combinationId === getSelectCombinationId(),
    );
    if (combination) {
      return {
        label: combination.GuarantyName,
        value: combination.combinationId,
      };
    }
    return null;
  };
  const getLabelValueGuarantyItems = () => {
    return getCurrentPrettyCombination()?.IdGuaranties.map(item => {
      return {
        label: item.GuarantyName,
        value: item.combinationId,
      };
    });
  };
  // values
  return {
    details,
    guarantyList,

    hasCombination,
    getSelectCombinationId,
    getCombinations,
    getSelectedCombinationTypeName,
    getSelectedCombinationName,
    getPrettyCombinations,
    getCombinationByName,
    getCurrentPrettyCombination,
    getSelectedGuaranty,
    getLabelValueGuarantyItems,

    SetSelectedColor: helper.setSelectedColorVarietyId,
    SetSelectedSize: helper.setSelectedColorVarietyId,
    setSelectedVarietyId,
    getCombinationType: helper.getCombinationType,
  };
};
