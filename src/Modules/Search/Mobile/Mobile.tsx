import React, { useState } from "react";
import Page from "../../../Share/Components/Mobile/Page/Page";
import SearchSortingMobile from "./Components/Sorting/Sorting";
import BottomNavigation from "../../../Share/Components/Mobile/BottomNavigation/BottomNavigation";
import TabBar from "../../../Share/Components/Mobile/TabBar/TabBar";
import Toolbar from "../../../Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../../Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../../Share/Components/Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import ToolbarMenu from "../../../Share/Components/Mobile/Toolbar/Components/ToolbarMenu/ToolbarMenu";
import ToolbarSearch from "../../../Share/Components/Mobile/Toolbar/Components/ToolbarSearch/ToolbarSearch";
import SearchFilteringMobile from "./Components/Filtering/Filtering";
import Icon from "../../../Share/Components/Common/Icon/Icon";
import Factory from "../Factory";
import ProductBox from "../../../Share/Components/Common/ProductBox/ProductBox";
import formatProductLink from "../../../Share/Helpers/Links/formatProductLink";
import { LINKS } from "../../../Share/Constants/LINKS";
import { IAppBarTab } from "../../../Share/Components/Mobile/TabBar/ITabBarProps";
import { SearchSortRequest } from "../../../Share/Models/Search/ISearchRequest";
import useSearch, { ISearchContainerProps } from "../Hooks/useSearch";
import generateClassName from "../../../Share/Helpers/Dom/generateClassName";
import style from "./Mobile.module.sass";

const SearchPageMobile = (props: ISearchContainerProps) => {
  const hookSearch = useSearch(props);
  // const boxLoading = [...new Array(20)];
  const [showSorting, setShowSorting] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const appBarItems: IAppBarTab[] = [
    {
      id: 0,
      title: "خانه",
      icon: "m-home",
    },
    {
      id: 1,
      title: "دسته بندی",
      icon: "category",
      activeIcon: "save",
    },
    {
      id: 2,
      title: "سبدخرید",
      icon: "cart",
    },
    {
      id: 3,
      title: "گفتگو",
      icon: "chat",
    },
  ];

  const onShowSortingChange = () => {
    setShowSorting(!showSorting);
  };

  const onSetSorting = (selectedSortId: SearchSortRequest) => {
    setShowSorting(false);
    hookSearch.onSortChange(selectedSortId);
  };

  const onShowFilterChange = () => {
    setShowFilter(!showFilter);
  };

  const findCategoryName = () => {
    return hookSearch.categories.find(category => category.IsChecked)?.Name;
  };

  return (
    <Page
      bottomSheet={() => (
        <SearchSortingMobile
          showSorting={showSorting}
          onShowSortingChange={onShowSortingChange}
          onSetSorting={onSetSorting}
          selectedSortId={hookSearch.filter.Sort}
        />
      )}
      bottomNavigation={() => (
        <BottomNavigation>
          <TabBar activeId={0} tabs={appBarItems} onTabBarChange={() => {}} />
        </BottomNavigation>
      )}
      toolbar={() => (
        <Toolbar>
          <ToolbarTitle
            title={findCategoryName()}
            rightMenuButton={
              <ToolbarButton icon="chevron-right" onClick={() => {}} />
            }
          />

          <ToolbarMenu>
            <ToolbarSearch
              searchValue="---- "
              onSearchChange={() => {}}
              searchIsOpen={false}
              onSearchToggle={() => {}}
            />
          </ToolbarMenu>
        </Toolbar>
      )}>
      <div className="p-t-16">
        <SearchFilteringMobile
          specifications={hookSearch.specifications}
          brands={hookSearch.brands}
          filter={hookSearch.filter}
          showFilter={showFilter}
          onShowFilterChange={onShowFilterChange}
          breadCrumbs={hookSearch.breadCrumbs}
          categories={hookSearch.categories}
          from={hookSearch.filter.PriceRangeFrom}
          highestPrice={hookSearch.highestPrice}
          to={hookSearch.filter.PriceRangeTo}
          onFullFilterChange={hookSearch.onFullFilterChange}
        />
        <div className="container">
          <div>{hookSearch.loading && "loading"}</div>
          <div className="d-flex m-b-16">
            <div className="col-6 m-l-8">
              <div
                className={generateClassName(["card", style.upBox])}
                onClick={() => onShowSortingChange()}>
                <Icon name="sort-up" className="m-l-8" />
                <span className="fontWeight-500">
                  {
                    Factory.searchSortingList().find(
                      sort => sort.id === hookSearch.filter.Sort,
                    )?.title
                  }
                </span>
                <Icon name="chevron-down" className="m-r-8" />
              </div>
            </div>
            <div className="col-6">
              <div
                className={generateClassName(["card", style.upBox])}
                onClick={onShowFilterChange}>
                <Icon name="adjust-horizontal-alt" className="m-l-8" />
                <span className="fontWeight-500">
                  فیلتر
                  <span className="m-r-4">(5)</span>
                </span>
              </div>
            </div>
          </div>
          {hookSearch.products.map((product: any, index: number) => (
            <div
              key={`${product.Id}${product.Name}${index}`}
              className={style.productItems}>
              <ProductBox
                product={product}
                theme="mobile"
                link={
                  product.Name === "product"
                    ? formatProductLink(LINKS.PRODUCT, product)
                    : formatProductLink(LINKS.SERVICE, product)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default SearchPageMobile;
