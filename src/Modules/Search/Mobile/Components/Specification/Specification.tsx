import React from "react";
import OverPage from "../../../../../Share/Components/Mobile/OverPage/OverPage";
import { filterType } from "../../../Hooks/Mobile/useSearchFilteringMobile";
import Page from "../../../../../Share/Components/Mobile/Page/Page";
import Toolbar from "../../../../../Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import BottomNavigation from "../../../../../Share/Components/Mobile/BottomNavigation/BottomNavigation";
import Button from "../../../../../Share/Components/Common/Button/Button";
import WrapperMobile from "../../../../../Share/Components/Mobile/WrapperMobile/WrapperMobile";
import { ISearchSpecification } from "../../../../../Share/Models/Search/ISearchSpecification";
import useSearchSpecificationMobile from "../../../Hooks/Mobile/useSearchSpcification";
import Checkbox from "../../../../../Share/Components/Common/Form/checkbox/Checkbox";
import style from "./Specification.module.sass";

interface ISearchSpecificationMobileProps {
  specifications: ISearchSpecification[];
  onSpecificationsSave: (newSpe: ISearchSpecification[]) => void;
  resetType: () => void;
  type: filterType;
  index: number;
}

const SearchSpecificationMobile = (props: ISearchSpecificationMobileProps) => {
  const hookSpecification = useSearchSpecificationMobile({
    specifications: props.specifications,
    resetType: props.resetType,
    onSpecificationsSave: props.onSpecificationsSave,
  });
  return (
    <OverPage
      isOpen={props.type === filterType.SPECIFICATION}
      onToggle={hookSpecification.onClose}
      fixed>
      <Page
        toolbar={() => (
          <Toolbar>
            <ToolbarTitle
              title="مشخصات"
              rightMenuButton={
                <ToolbarButton
                  icon="chevron-right"
                  onClick={hookSpecification.onClose}
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
                    onClick={hookSpecification.onClose}
                    isDisabled={hookSpecification.isActiveFilter()}>
                    پاک کردن
                  </Button>
                </div>
                <div className="col-8">
                  <Button
                    color="red"
                    radius="radius16"
                    size="medium"
                    className="col-12 fontWeight-700 fontSize-16"
                    onClick={hookSpecification.onSave}
                    isDisabled={hookSpecification.isActiveFilter()}>
                    اعمال فیلتر
                  </Button>
                </div>
              </div>
            </div>
          </BottomNavigation>
        )}>
        <div className="card card__noRadius h100 p-y-24">
          <WrapperMobile>
            <ul className={style.specificationListStep}>
              {hookSpecification.specifications[props.index]?.Attributes?.map(
                (specification, attIndex) => (
                  <li key={`${specification.Name}`}>
                    <Checkbox
                      title={specification.Name}
                      checked={specification.IsChecked}
                      onChange={() => {
                        hookSpecification.onSpecificationSelect(
                          props.index,
                          attIndex,
                        );
                      }}
                    />
                  </li>
                ),
              )}
            </ul>
          </WrapperMobile>
        </div>
      </Page>
    </OverPage>
  );
};

export default SearchSpecificationMobile;
