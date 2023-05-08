import React, { Component } from "react";
import WrapperMobile from "../../../../Share/Components/Mobile/WrapperMobile/WrapperMobile";
import Button from "../../../../Share/Components/Common/Button/Button";
import OverPage from "../../../../Share/Components/Mobile/OverPage/OverPage";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import BottomNavigation from "../../../../Share/Components/Mobile/BottomNavigation/BottomNavigation";

interface ISearchFilteringMobileProps {
  showFilter: boolean;
  onShowFilterChange: () => void;
}


class SearchFilteringMobile extends Component<ISearchFilteringMobileProps> {

  render() {
    return (
      <>
        <OverPage
          isOpen={this.props.showFilter}
          onToggle={this.props.onShowFilterChange}
          fixed>
          <WrapperMobile>
            <div className="d-flex flex-x-between">
              <span>فیلتر</span>
              <Button theme="iconic" onClick={this.props.onShowFilterChange}>
                <Icon name="close" />
              </Button>
            </div>
            تست اورپیج
            <Button
              className="w100"
              size="medium"
              theme="bordered"
              color="blue"
              onClick={() => {}}>
              <div>بستن اورپیج</div>
            </Button>
            <BottomNavigation>
              <div>dsafas</div>
            </BottomNavigation>
          </WrapperMobile>
        </OverPage>
      </>
    );
  }
}

export default SearchFilteringMobile;
