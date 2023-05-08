import React from "react";
import Button from "../../../../../Share/Components/Common/Button/Button";
import OverPage from "../../../../../Share/Components/Mobile/OverPage/OverPage";
import Page from "../../../../../Share/Components/Mobile/Page/Page";
import Toolbar from "../../../../../Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarMenu from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarMenu/ToolbarMenu";
import ToolbarButton from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import BottomNavigation from "../../../../../Share/Components/Mobile/BottomNavigation/BottomNavigation";
import SearchBrandListMobile from "../BrandList/BrandList";
import SearchFilterBoxMobile from "../FilterBox/FilterBox";
import SearchCategoryListMobile from "../CategoryList/CategoryList";
import SearchPriceRangeMobile from "../PriceRange/PriceRange";
import useSearchFilteringMobile, {
  filterType,
  ISearchFilteringMobileProps,
} from "../../../Hooks/Mobile/useSearchFilteringMobile";
import SearchSpecificationMobile from "../Specification/Specification";
import Price from "../../../../../Share/Components/Common/Price/Price";

const SearchFilteringMobile = (props: ISearchFilteringMobileProps) => {
  const hookFiltering = useSearchFilteringMobile(props);

  return (
    <OverPage
      isOpen={props.showFilter}
      onToggle={hookFiltering.closeFilter}
      fixed>
      <Page
        toolbar={() => (
          <Toolbar>
            <ToolbarTitle title="فیلتر" />
            <ToolbarMenu>
              <ToolbarButton icon="close" onClick={hookFiltering.closeFilter} />
            </ToolbarMenu>
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
                    onClick={hookFiltering.clearBrandFilter}>
                    پاک کردن
                  </Button>
                </div>
                <div className="col-8">
                  <Button
                    onClick={hookFiltering.onSubFilter}
                    color="red"
                    radius="radius16"
                    size="medium"
                    className="col-12 fontWeight-700 fontSize-16">
                    اعمال فیلتر
                  </Button>
                </div>
              </div>
            </div>
          </BottomNavigation>
        )}>
        <>
          {/*= =============== category ================ */}
          {props.breadCrumbs.length !== 0 && props.categories.length !== 0 && (
            <>
              <SearchCategoryListMobile
                type={hookFiltering.type}
                resetType={hookFiltering.closeFilter}
                categories={props.categories}
                breadCrumbs={props.breadCrumbs}
              />
              <SearchFilterBoxMobile
                isActiveFilter={false}
                name="دسته بندی"
                onSelect={() => hookFiltering.setType(filterType.CATEGORY)}
              />
            </>
          )}
          {/*= ========================================= */}
          {/*= ================ brands ================= */}
          {props.brands.length !== 0 && (
            <>
              <SearchBrandListMobile
                type={hookFiltering.type}
                resetType={hookFiltering.onResetType}
                brands={hookFiltering.brands}
                setBrands={hookFiltering.setBrands}
              />
              <SearchFilterBoxMobile
                isActiveFilter={hookFiltering?.isActiveFilterBrands()}
                name="برندها"
                onSelect={() => hookFiltering.setType(filterType.BRANDS)}>
                {hookFiltering.brands
                  .filter(brand => brand.IsChecked)
                  .map(showBrand => (
                    <div>{showBrand.Name}</div>
                  ))}
              </SearchFilterBoxMobile>
            </>
          )}
          {/*= ========================================== */}
          {/*= ============== price range =============== */}
          {props.highestPrice > 0 && (
            <>
              <SearchPriceRangeMobile
                type={hookFiltering.type}
                resetType={hookFiltering.onResetType}
                onPriceRangeChange={hookFiltering.onPriceRangeChange}
                from={hookFiltering.from}
                to={hookFiltering.to}
                highestPrice={props.highestPrice}
              />
              <SearchFilterBoxMobile
                isActiveFilter={hookFiltering.isActiveFilterPriceRange()}
                name="محدوده قیمت"
                onSelect={() => hookFiltering.setType(filterType.PRICE_RANGE)}>
                <div>
                  <span className="m-l-4">از</span>
                  <Price
                    price={hookFiltering.from}
                    className="m-l-4"
                    showCurrency={false}
                  />
                  <span className="m-l-4">تا</span>
                  <Price
                    price={hookFiltering.to}
                    className="m-l-4"
                    showCurrency={false}
                  />
                  <span>تومان</span>
                </div>
              </SearchFilterBoxMobile>
            </>
          )}
          {/*= ========================================== */}
          {/*= ============= specification ============== */}
          {props?.specifications?.length > 0 && (
            <>
              <SearchSpecificationMobile
                specifications={hookFiltering.specifications}
                resetType={hookFiltering.onResetType}
                index={hookFiltering.currentSelectSpecificationIndex}
                type={hookFiltering.type}
                onSpecificationsSave={hookFiltering.onSpecificationsSave}
              />
              {props.specifications.map((specification, specificationIndex) => (
                <SearchFilterBoxMobile
                  isActiveFilter={hookFiltering.isActiveFilterSpecification(
                    specificationIndex,
                  )}
                  name={specification.Name}
                  key={`${specification.Name}${specificationIndex}`}
                  onSelect={() =>
                    hookFiltering.selectSpecification(specificationIndex)
                  }>
                  {hookFiltering.specifications[
                    specificationIndex
                  ].Attributes.filter(spe => spe.IsChecked).map(showBrand => (
                    <div>{showBrand.Name}</div>
                  ))}
                </SearchFilterBoxMobile>
              ))}
            </>
          )}
          {/*= ========================================== */}
        </>
      </Page>
    </OverPage>
  );
};

export default SearchFilteringMobile;
