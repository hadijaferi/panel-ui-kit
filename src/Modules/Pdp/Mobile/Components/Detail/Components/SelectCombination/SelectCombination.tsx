import React from "react";
import Selector from "../../../../../Components/Selector/Selector";
import { usePdpCombination } from "../../../../../Hooks/usePdpCombination";
import RadioButton from "../../../../../../../Share/Components/Common/Form/RadioButton/RadioButton";
import formatNumberToPrice from "../../../../../../../Share/Helpers/formatNumberToPrice";

export default function SelectCombinationMobile() {
  const combinationHelpers = usePdpCombination();
  const combinationType = combinationHelpers.getCombinationType();
  const selectedCombinationName = combinationHelpers.getSelectedCombinationName();
  const prettyCombinations = combinationHelpers.getPrettyCombinations();
  const currentPrettyCombination = prettyCombinations.find(
    combination => combination.title === selectedCombinationName,
  );

  return combinationHelpers.hasCombination() ? (
    <div className="card card__noRadius p-y-16">
      <div className="container">
        <div className="m-b-32">
          <div className="d-flex m-b-8">
            <div className="fontSize-16 fontWeight-700">
              انتخاب {combinationHelpers.getSelectedCombinationTypeName()}:
            </div>
            <div className="m-r-8">
              {combinationHelpers.getSelectedCombinationName()}
            </div>
          </div>
          <div>
            <Selector
              value={selectedCombinationName}
              onChange={value => {
                const id =
                  combinationHelpers.getCombinationByName(value)?.Id ?? -1;
                combinationHelpers.setSelectedVarietyId(id);
              }}
              items={prettyCombinations?.map(combination => {
                return {
                  title: combination.title,
                  value: combination.title,
                  color:
                    combinationType === "color"
                      ? combination.color ?? ""
                      : null,
                };
              })}
            />
          </div>
        </div>
        <div>
          <div className="fontSize-16 fontWeight-700 m-b-8">
            انتخاب گارانتی:
          </div>
          {currentPrettyCombination?.IdGuaranties?.map(item => {
            return (
              <div key={item.GuarantyId} className="d-flex flex-row">
                <div className="col-7">
                  <RadioButton
                    checked={
                      combinationHelpers.getSelectCombinationId() ===
                      item.combinationId
                    }
                    title={item.GuarantyName}
                    name={`comb_${currentPrettyCombination.uId}`}
                    onCheck={() => {
                      combinationHelpers.setSelectedVarietyId(
                        item.combinationId,
                      );
                    }}
                  />
                </div>

                <div className="col-5 fontWeight-700 fontSize-14">
                  {formatNumberToPrice(item.price)} تومان
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
