import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import style from "./Category.module.sass";
import Button from "../../../../../Share/Components/Common/Button/Button";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import useCategoryList, {
  ISearchCategoryChildList,
  ISearchCategoryListContainerProps,
} from "../../../Hooks/useCategoryList";
import formatSearchLink from "../../../../../Share/Helpers/Links/formatSearchLink";

const SearchCategoryListDesktop = (
  props: ISearchCategoryListContainerProps,
) => {
  const hookCategory = useCategoryList(props);
  const categoryUi = (category: ISearchCategoryChildList): React.ReactNode => {
    if (category?.Child === undefined) {
      return (
        <ul>
          <li>
            {category?.Categories?.map(cate =>
              cate.IsChecked ? (
                <Button
                  theme="forButtonLink"
                  className="fontWeight-700 m-b-8"
                  key={`catalog${cate.Name}`}>
                  <span>{cate.Name}</span>
                  <Icon name="chevron-down" size="medium" className="m-x-8" />
                </Button>
              ) : (
                <Link
                  key={`catalog${cate.Name}`}
                  href={formatSearchLink({ CategoryId: cate.Id })}>
                  <a className="d-block">{cate.Name}</a>
                </Link>
              ),
            )}
          </li>
        </ul>
      );
    }
    return (
      <div>
        <ul>
          <li>
            <Link href={formatSearchLink({ CategoryId: category.Id })}>
              <a className="m-b-8">
                <span>{category.Name}</span>
                <Icon name="chevron-left" className="m-x-8" />
              </a>
            </Link>
            <div className="p-x-16">{categoryUi(category.Child)}</div>
          </li>
        </ul>
      </div>
    );
  };

  /* ================== loading ui ================== */
  if (props.loading) {
    return (
      <div
        className={generateClassName([style.acCategoryList, "card", "m-b-16"])}>
        <div className={style.head}>
          <div>دسته بندی نتایج</div>
        </div>
        <div className="p-8">
          <ul>
            <li>
              <Button theme="forButtonLink" className="m-b-8">
                <Skeleton width={80} />
                <Icon name="chevron-left" className="m-x-8" />
              </Button>
              <div className="p-x-16">
                <ul>
                  <li>
                    <Skeleton width={80} />
                  </li>
                  <li>
                    <Skeleton width={80} />
                  </li>
                  <li>
                    <Skeleton width={80} />
                  </li>
                  <li>
                    <Skeleton width={80} />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={style.footer}>
          <div className="d-flex flex-x-center">
            <Skeleton width={100} />
          </div>
        </div>
      </div>
    );
  }
  /* ============================================ */
  /* ================== not fount ui ================== */
  if (props.breadCrumbs.length === 0 && props.categories.length === 0) {
    return null;
  }
  /* ============================================ */
  /* ====================== category ui ====================== */
  return (
    <div
      className={generateClassName([style.acCategoryList, "card", "m-b-16"])}>
      <div className={style.head}>
        <div>دسته بندی نتایج</div>
      </div>
      <div className="p-16">{categoryUi(hookCategory.categoriesChild)}</div>
      {hookCategory.categoryLength > 10 && (
        <div className={style.footer}>
          <Button theme="text" onClick={hookCategory.onSeeMoreChange}>
            {hookCategory.seeMore ? (
              <>
                <Icon name="plus" size="small" className="m-l-4" />
                <span>دسته بندی های بیشتر</span>
              </>
            ) : (
              <>
                <Icon name="minus" size="small" className="m-l-4" />
                <span>بستن</span>
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
  /* ============================================ */
};

export default SearchCategoryListDesktop;
