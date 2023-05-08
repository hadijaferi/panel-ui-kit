import React from "react";
import Skeleton from "react-loading-skeleton";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import style from "./Desktop.module.sass";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import Checkbox from "../../../../../Share/Components/Common/Form/checkbox/Checkbox";
import Button from "../../../../../Share/Components/Common/Button/Button";
import { IBrand } from "../../../../../infrastructure/Models/Entity/IBrand";
import useSearchBrandList from "../../../Hooks/Desktop/useSearchBrandList";

export interface ISearchBrandListDesktopProps {
  brands: IBrand[];
  loading: boolean;
  onBrandIdsFilterChange: (brands: IBrand[]) => void;
}

const SearchBrandListDesktop = (props: ISearchBrandListDesktopProps) => {
  const hookBrandList = useSearchBrandList();
  /* ================== loading ui ================== */
  if (props.loading) {
    return (
      <div className={generateClassName([style.acBrandList, "card", "m-b-16"])}>
        <div className={style.head}>برند ها</div>
        <div>
          <div className={style.search}>
            <Icon
              name="search"
              className="m-l-8 m-b-4 colorGray-979797"
              size="large"
            />
            <input type="search" disabled placeholder="جستجو" />
          </div>
          <hr className="" />
          <ul
            className={generateClassName([
              style.listStep,
              style.scrollList,
              hookBrandList.seeMore && style.active,
            ])}>
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
  if (props.brands.length === 0) {
    return null;
  }
  /* ============================================ */
  /* ====================== brands ui ====================== */
  return (
    <div className={generateClassName([style.acBrandList, "card", "m-b-16"])}>
      <div className={style.head}>برند ها</div>
      <div>
        <div className={style.search}>
          <Icon
            name="search"
            className="m-l-8 m-b-4 colorGray-979797"
            size="large"
          />
          <input
            type="search"
            placeholder="جستجو"
            value={hookBrandList.search}
            onChange={e => hookBrandList.onSearchChange(e.target.value)}
          />
        </div>
        <hr className="" />
        <ul
          className={generateClassName([
            style.listStep,
            style.scrollList,
            hookBrandList.seeMore && style.active,
          ])}>
          {hookBrandList.getBrandsWithFilter(props.brands).map(brand => (
            <li key={`${brand.Name}`}>
              <Checkbox
                title={brand.Name}
                checked={brand.IsChecked}
                onChange={() => {
                  const { onBrandChange } = hookBrandList;
                  props.onBrandIdsFilterChange(
                    onBrandChange(brand.Id, props.brands),
                  );
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      {props.brands.length >= 7 && (
        <div className={style.footer}>
          <Button theme="text" onClick={hookBrandList.onSeeMoreChange}>
            {hookBrandList.seeMore ? (
              <>
                <Icon name="minus" size="small" className="m-l-4" />
                <span>بستن</span>
              </>
            ) : (
              <>
                <Icon name="plus" size="small" className="m-l-4" />
                <span>برند های بیشتر</span>
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
  /* ============================================ */
};

export default SearchBrandListDesktop;
