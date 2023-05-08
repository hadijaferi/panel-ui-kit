import React from "react";
import Link from "next/link";
import WrapperMobile from "../../../../../Share/Components/Mobile/WrapperMobile/WrapperMobile";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import Button from "../../../../../Share/Components/Common/Button/Button";
import OverPage from "../../../../../Share/Components/Mobile/OverPage/OverPage";
import useCategoryList, {
  ISearchCategoryChildList,
} from "../../../Hooks/useCategoryList";
import { ICategory } from "../../../../../infrastructure/Models/Entity/ICategory";
import { IBreadcrumb } from "../../../../../infrastructure/Models/Entity/IBreadcrumb";
import Toolbar from "../../../../../Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../../../../Share/Components/Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import Page from "../../../../../Share/Components/Mobile/Page/Page";
import { filterType } from "../../../Hooks/Mobile/useSearchFilteringMobile";

interface ISearchCategoryListMobileProps {
  type: filterType;
  resetType: () => void;
  categories: ICategory[];
  breadCrumbs: IBreadcrumb[];
}

const SearchCategoryListMobile = (props: ISearchCategoryListMobileProps) => {
  const hookCategory = useCategoryList({
    breadCrumbs: props.breadCrumbs,
    categories: props.categories,
    loading: false,
  });

  const categoryUi = (category: ISearchCategoryChildList): React.ReactNode => {
    if (category?.Child === undefined) {
      return (
        <div>
          <ul>
            <li>
              {category?.Categories?.map(cate =>
                cate.IsChecked ? (
                  <Button
                    theme="forButtonLink"
                    className="fontWeight-700 m-b-8"
                    key={`catalog${cate.Name}`}>
                    <Icon name="chevron-down" size="medium" className="m-x-8" />
                    <span>{cate.Name}</span>
                  </Button>
                ) : (
                  <Link href={`/search/${cate.Id}`}>
                    <a
                      className="d-block"
                      key={`catalog${cate.Name}`}
                      onClick={props.resetType}>
                      {cate.Name}
                    </a>
                  </Link>
                ),
              )}
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div>
        <ul>
          <li>
            <Button theme="forButtonLink" className="m-b-8">
              <Icon name="chevron-left" className="m-x-8" />
              <span>{category.Name}</span>
            </Button>
            <div className="p-x-16">{categoryUi(category.Child)}</div>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <OverPage
      isOpen={props.type === filterType.CATEGORY}
      onToggle={props.resetType}
      fixed>
      <Page
        toolbar={() => (
          <Toolbar>
            <ToolbarTitle
              title="دسته بندی"
              rightMenuButton={
                <ToolbarButton icon="chevron-right" onClick={props.resetType} />
              }
            />
          </Toolbar>
        )}>
        <div className="card card__noRadius h100 p-y-24">
          <WrapperMobile>
            <div>{categoryUi(hookCategory.categoriesChild)}</div>
          </WrapperMobile>
        </div>
      </Page>
    </OverPage>
  );
};

export default SearchCategoryListMobile;
