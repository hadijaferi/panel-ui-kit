import React, { Component } from "react";
import dynamic from "next/dynamic";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";
import { ISearchBrandListProps } from "./Models/ISearchBrandListProps";
import ISearchBrandListContainerState from "./Models/IContainerState";
import ISearchBrandListContainerProps from "./Models/IContainerProps";

// import dynamic pages
const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

class SearchBrandListContainer extends Component<
  ISearchBrandListContainerProps,
  ISearchBrandListContainerState
> {
  state: ISearchBrandListContainerState = {
    search: "",
    seeMore: false,
  };

  onBrandSelect = (id: number) => {
    const { brands } = this.props;
    const findIndex = brands.findIndex(brand => brand.Id === id);
    if (findIndex !== -1) {
      brands[findIndex].IsChecked = !brands[findIndex].IsChecked;
      this.props.onBrandIdsFilterChange(brands);
    }
  };

  onSearchChange = (search: string) => {
    this.setState({ search });
  };

  filterBrands = () => {
    const brands = this.props.brands.filter(brand =>
      brand.Name.includes(this.state.search),
    );
    return brands;
  };

  onSeeMoreChange = () => {
    const { seeMore } = this.state;
    this.setState({ seeMore: !seeMore });
  };

  brandListProps = (): ISearchBrandListProps => {
    return {
      brands: this.filterBrands(),
      onBrandChange: this.onBrandSelect,
      search: this.state.search,
      onSearchChange: this.onSearchChange,
      seeMore: this.state.seeMore,
      onSeeMoreChange: this.onSeeMoreChange,
      totalBrand: this.props.brands.length,
    };
  };

  render() {
    return (
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(BrandList: any) => <BrandList {...this.brandListProps()} />}
      </BaseResponsive>
    );
  }
}

export default SearchBrandListContainer;
