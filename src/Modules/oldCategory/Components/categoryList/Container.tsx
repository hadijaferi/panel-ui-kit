import React, { Component } from "react";
import dynamic from "next/dynamic";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";
import {
  ISearchCategoryChildList,
  ISearchCategoryListProps,
} from "./Models/ISearchCategoryListProps";
import { ISearchCategoryListContainerState } from "./Models/IContainerState";
import { ISearchCategoryListContainerProps } from "./Models/IContainerProps";
import { ICategory } from "../../../../infrastructure/Models/Entity/ICategory";

// import dynamic pages
const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

class SearchCategoryListContainer extends Component<
  ISearchCategoryListContainerProps,
  ISearchCategoryListContainerState
> {
  state: ISearchCategoryListContainerState = {
    seeMore: true,
  };

  filterCategoryList = (): ICategory[] => {
    const { breadCrumbs = [], categories = [] } = this.props;
    const categoryLength = breadCrumbs.length + categories.length;
    if (this.state.seeMore && categoryLength > 10) {
      return categories.filter(category => category.IsChecked);
    }
    return categories;
  };

  categoryChildList = (index: number): ISearchCategoryChildList => {
    if (index + 1 === this.props.breadCrumbs.length) {
      return {
        Id: this.props.breadCrumbs[index]?.Id,
        DisplayOrder: this.props.breadCrumbs[index]?.DisplayOrder,
        Name: this.props.breadCrumbs[index]?.Name,
        Categories: this.filterCategoryList(),
        Child: undefined,
      };
    }
    return {
      Id: this.props.breadCrumbs[index].Id,
      DisplayOrder: this.props.breadCrumbs[index].DisplayOrder,
      Name: this.props.breadCrumbs[index].Name,
      Child: this.categoryChildList(index + 1),
      Categories: [],
    };
  };

  onSeeMoreChange = () => {
    const { seeMore } = this.state;
    this.setState({ seeMore: !seeMore });
  };

  categoryProps = (): ISearchCategoryListProps => {
    const { breadCrumbs = [], categories = [] } = this.props;
    return {
      categoriesChild: this.categoryChildList(0),
      seeMore: this.state.seeMore,
      onSeeMoreChange: this.onSeeMoreChange,
      categoryLength: breadCrumbs.length + categories.length,
    };
  };

  render() {
    return (
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(Sample: any) => <Sample {...this.categoryProps()} />}
      </BaseResponsive>
    );
  }
}

export default SearchCategoryListContainer;
