import React, { Component } from "react";
import Factory from "../../Factory";
import BottomSheet from "../../../../Share/Components/Mobile/BottomSheet/BottomSheet";
import { SearchSortRequest } from "../../../../Share/Models/Search/ISearchRequest";
import style from "./Sorting.module.sass";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import Button from "../../../../Share/Components/Common/Button/Button";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";

interface ISearchSortingMobileProps {
  showSorting: boolean;
  onShowSortingChange: () => void;
  onSetSorting: (selectedSortId: SearchSortRequest) => void;
  selectedSortId: SearchSortRequest;
}

class SearchSortingMobile extends Component<ISearchSortingMobileProps> {
  render() {
    return (
      <BottomSheet
        fixed
        isOpen={this.props.showSorting}
        onToggle={this.props.onShowSortingChange}>
        <div className="d-flex flex-x-between flex-y-center p-t-16 p-x-16">
          <div className="fontSize-16 fontWeight-500 p-t-2">
            مرتب سازی بر اساس
          </div>
          <Button theme="iconic" onClick={this.props.onShowSortingChange}>
            <Icon name="close" />
          </Button>
        </div>
        <ul className={style.sortingListStep}>
          {Factory.searchSortingList().map(sort => (
            <li
              className={generateClassName([
                sort.id === this.props.selectedSortId && style.active,
              ])}>
              <div onClick={() => this.props.onSetSorting(sort.id || 0)}>
                {sort.title}
              </div>
            </li>
          ))}
        </ul>
      </BottomSheet>
    );
  }
}

export default SearchSortingMobile;
