import React, { Component } from "react";
import ProductBox from "../../Share/Components/Common/ProductBox/ProductBox";
import { ISearchProps } from "./Models/ISearchProps";
import Toolbar from "../../Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../Share/Components/Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import ToolbarMenu from "../../Share/Components/Mobile/Toolbar/Components/ToolbarMenu/ToolbarMenu";
import ToolbarSearch from "../../Share/Components/Mobile/Toolbar/Components/ToolbarSearch/ToolbarSearch";
import Page from "../../Share/Components/Mobile/Page/Page";
import BottomNavigation from "../../Share/Components/Mobile/BottomNavigation/BottomNavigation";
import TabBar from "../../Share/Components/Mobile/TabBar/TabBar";
import { IAppBarTab } from "../../Share/Components/Mobile/TabBar/ITabBarProps";
import formatProductLink from "../../Share/Helpers/Links/formatProductLink";
import { LINKS } from "../../Share/Constants/LINKS";
import Factory from "./Factory";
import { SearchSortRequest } from "../../Share/Models/Search/ISearchRequest";
import SearchSortingMobile from "./Mobile/Sorting/Sorting";
import Icon from "../../Share/Components/Common/Icon/Icon";
import SearchFilteringMobile from "./Mobile/Filtering/Filtering";

interface ISearchPageMobileState {
  showSorting: boolean;
  showFilter: boolean;
}

class SearchPageMobile extends Component<ISearchProps, ISearchPageMobileState> {
  state: ISearchPageMobileState = {
    showSorting: false,
    showFilter: false,
  };

  appBarItems: IAppBarTab[] = [
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

  onShowSortingChange = () => {
    const { showSorting } = this.state;
    this.setState({ showSorting: !showSorting });
  };

  onSetSorting = (selectedSortId: SearchSortRequest) => {
    this.setState(
      {
        showSorting: false,
      },
      () => {
        this.props.onSortChange(selectedSortId);
      },
    );
  };

  onShowFilterChange = () => {
    const { showFilter } = this.state;
    this.setState({ showFilter: !showFilter });
  };

  render() {
    return (
      <Page
        bottomSheet={() => (
          <>
            <SearchSortingMobile
              showSorting={this.state.showSorting}
              onShowSortingChange={this.onShowSortingChange}
              onSetSorting={this.onSetSorting}
              selectedSortId={this.props.filter.Sort}
            />
          </>
        )}
        bottomNavigation={() => (
          <BottomNavigation>
            <TabBar
              activeId={0}
              tabs={this.appBarItems}
              onTabBarChange={() => {}}
            />
          </BottomNavigation>
        )}
        toolbar={() => (
          <Toolbar>
            <ToolbarTitle
              title="تست تولبار"
              rightMenuButton={
                <ToolbarButton icon="arrow-right" onClick={() => {}} />
              }
            />

            <ToolbarMenu>
              <ToolbarButton
                className="pos-relative"
                icon="cart"
                onClick={() => {}}>
                <span>%</span>
              </ToolbarButton>

              <ToolbarSearch
                searchValue="---- "
                onSearchChange={() => {}}
                searchIsOpen={false}
                onSearchToggle={() => {}}
              />
            </ToolbarMenu>
          </Toolbar>
        )}>
        <>
          <SearchFilteringMobile
            showFilter={this.state.showFilter}
            onShowFilterChange={this.onShowFilterChange}
          />
          <div className="container">
            <div className="d-flex m-b-16">
              <div className="col-6 m-l-8">
                <div
                  className="card p-y-8 text-center"
                  onClick={() => this.onShowSortingChange()}>
                  <Icon name="bag" className="m-l-4" />
                  <span className="fontWeight-500">
                    {
                      Factory.searchSortingList().find(
                        sort => sort.id === this.props.filter.Sort,
                      )?.title
                    }
                  </span>
                  <Icon name="chevron-down" className="m-r-4" />
                </div>
              </div>
              <div className="col-6">
                <div
                  className="card p-y-8 text-center"
                  onClick={this.onShowFilterChange}>
                  <Icon name="bag" className="m-l-4" />
                  <span className="fontWeight-500">
                    فیلتر
                    <span className="m-r-4">(5)</span>
                  </span>
                </div>
              </div>
            </div>
            {this.props.products.map((product, index) => (
              <div
                key={`${product.Id}${product.Name}${index}`}
                className="m-b-16">
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
        </>
      </Page>
    );
  }
}

export default SearchPageMobile;
