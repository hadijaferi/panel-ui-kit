import React from "react";
import Page from "../../../../../Share/Components/Mobile/Page/Page";
import Button from "../../../../../Share/Components/Common/Button/Button";
import WrapperMobile from "../../../../../Share/Components/Mobile/WrapperMobile/WrapperMobile";
import { IBrand } from "../../../../../infrastructure/Models/Entity/IBrand";
import Checkbox from "../../../../../Share/Components/Common/Form/checkbox/Checkbox";
import OverPage from "../../../../../Share/Components/Mobile/OverPage/OverPage";
import Toolbar from "../../../../../Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import BottomNavigation from "../../../../../Share/Components/Mobile/BottomNavigation/BottomNavigation";
import useSearchBrandListMobile from "../../../Hooks/Mobile/useSearchBrandListMobile";
import { filterType } from "../../../Hooks/Mobile/useSearchFilteringMobile";
import style from "./BrandList.module.sass";
import Input from "../../../../../Share/Components/Common/Form/Input/Input";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";

interface ISearchBrandListMobileProps {
  type: filterType;
  resetType: () => void;
  brands: IBrand[];
  setBrands: (newBrands: IBrand[]) => void;
}

const SearchBrandListMobile = (props: ISearchBrandListMobileProps) => {
  const hookBrandList = useSearchBrandListMobile({
    brands: props.brands,
    resetType: props.resetType,
    setBrands: props.setBrands,
  });
  return (
    <OverPage
      isOpen={props.type === filterType.BRANDS}
      onToggle={hookBrandList.onReset}
      fixed>
      <Page
        toolbar={() => (
          <Toolbar>
            <ToolbarTitle
              title="برندها"
              rightMenuButton={
                <ToolbarButton
                  icon="chevron-right"
                  onClick={hookBrandList.onReset}
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
                    onClick={hookBrandList.onReset}
                    isDisabled={hookBrandList.disableClearButton()}>
                    پاک کردن
                  </Button>
                </div>
                <div className="col-8">
                  <Button
                    color="red"
                    radius="radius16"
                    size="medium"
                    className="col-12 fontWeight-700 fontSize-16"
                    onClick={hookBrandList.onSave}
                    isDisabled={hookBrandList.disableSaveButton()}>
                    اعمال فیلتر
                  </Button>
                </div>
              </div>
            </div>
          </BottomNavigation>
        )}>
        <div className="card card__noRadius h100">
          <WrapperMobile>
            <div className={style.searchBox}>
              <Input
                title="جستجو ..."
                icon="search"
                suffix={<Icon name="close" />}
                value={hookBrandList.search}
                onChange={event =>
                  hookBrandList.onSearchChange(event.target.value)
                }
              />
            </div>
            <ul className={style.brandListStep}>
              {hookBrandList.brands.map((brand: IBrand) => (
                <li key={`${brand.Name}`}>
                  <Checkbox
                    title={brand.Name}
                    checked={brand.IsChecked}
                    onChange={() => hookBrandList.onBrandChange(brand.Id)}
                  />
                </li>
              ))}
            </ul>
          </WrapperMobile>
        </div>
      </Page>
    </OverPage>
  );
};

export default SearchBrandListMobile;
