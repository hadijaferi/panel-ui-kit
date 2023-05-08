import React from "react";
import Page from "../../../../../Share/Components/Mobile/Page/Page";
import Toolbar from "../../../../../Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import BottomNavigation from "../../../../../Share/Components/Mobile/BottomNavigation/BottomNavigation";
import Button from "../../../../../Share/Components/Common/Button/Button";
import WrapperMobile from "../../../../../Share/Components/Mobile/WrapperMobile/WrapperMobile";
import OverPage from "../../../../../Share/Components/Mobile/OverPage/OverPage";
import RangeSlider from "../../../../../Share/Components/Common/RangeSlider/RangeSlider";
import useSearchPriceRangeMobile from "../../../Hooks/Mobile/useSearchPriceRangeMobile";
import { filterType } from "../../../Hooks/Mobile/useSearchFilteringMobile";

interface ISearchPriceRangeMobileProps {
  type: filterType;
  highestPrice: number;
  resetType: () => void;
  onPriceRangeChange: (newFrom: number, newTo: number) => void;
  from: number;
  to: number;
}

const SearchPriceRangeMobile = (props: ISearchPriceRangeMobileProps) => {
  const hookPriceRange = useSearchPriceRangeMobile({
    highestPrice: props.highestPrice,
    onPriceRangeChange: props.onPriceRangeChange,
    from: props.from,
    to: props.to,
    resetType: props.resetType,
  });

  return (
    <OverPage
      isOpen={props.type === filterType.PRICE_RANGE}
      onToggle={hookPriceRange.onCloseFilter}
      fixed>
      <Page
        toolbar={() => (
          <Toolbar>
            <ToolbarTitle
              title="محدوده قیمت"
              rightMenuButton={
                <ToolbarButton
                  icon="chevron-right"
                  onClick={hookPriceRange.onCloseFilter}
                />
              }
            />
          </Toolbar>
        )}
        bottomNavigation={() => (
          <BottomNavigation>
            <div className="p-8">
              <div className="d-flex flex-y-center">
                <div className="col-4">
                  <Button
                    theme="text"
                    className="fontSize-16 colorGray-5e5e5e"
                    onClick={hookPriceRange.onResetPriceRange}
                    isDisabled={hookPriceRange.isActiveFilter()}>
                    پاک کردن
                  </Button>
                </div>
                <div className="col-8">
                  <Button
                    color="red"
                    radius="radius16"
                    size="medium"
                    className="col-12 fontWeight-700 fontSize-16"
                    onClick={hookPriceRange.onSavePriceRangeChange}
                    isDisabled={hookPriceRange.isActiveFilter()}>
                    ثبت
                  </Button>
                </div>
              </div>
            </div>
          </BottomNavigation>
        )}>
        <div className="card card__noRadius h100 p-y-32">

        <WrapperMobile>
            <div className="d-flex flex-x-between m-b-16 p-x-8 fontWeight-700">
              <span>
                <span className="m-l-4">{hookPriceRange.value[1]}</span>
                <span>تومان</span>
              </span>
              <span>
                <span className="m-l-4">{hookPriceRange.value[0]}</span>
                <span>تومان</span>
              </span>
            </div>
            <div className="d-flex flex-x-center">
              <RangeSlider
                min={0}
                max={hookPriceRange.highestPrice}
                values={hookPriceRange.value}
                onChange={hookPriceRange.onRangePriceChange}
                step={1}
              />
            </div>
        </WrapperMobile>
        </div>

      </Page>
    </OverPage>
  );
};

export default SearchPriceRangeMobile;
