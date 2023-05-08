import React from "react";
import Link from "next/link";
import { AcLoadingModal } from "../../../Share/Components/Desktop/AcLoadingModal/AcLoadingModal";
import Icon from "../../../Share/Components/Common/Icon/Icon";
import style from "./Desktop.module.sass";
import Checkbox from "../../../Share/Components/Common/Form/checkbox/Checkbox";
import SearchPriceRangeContainer from "./Components/PriceRange/PriceRange";
import SearchSpecificationContainer from "./Components/Specification/Specification";
import TabSelect from "../../../Share/Components/Common/TabSelect/TabSelect";
import Factory from "../Factory";
import notFound from "../../../Resources/image/notFound.png";
import generateClassName from "../../../Share/Helpers/Dom/generateClassName";
import ProductBox from "../../../Share/Components/Common/ProductBox/ProductBox";
import PBSkeleton from "../../../Share/Components/Common/ProductBox/Skeleton";
import ListPagination from "../../../Share/Components/Common/ListPagination/ListPagination";
import useSearch, { ISearchContainerProps } from "../Hooks/useSearch";
import SearchCategoryListContainer from "./Components/CategoryList/CategoryList";
import BrandList from "./Components/BrandList/BrandList";

const SearchPageDesktop = (props: ISearchContainerProps) => {
  const hookSearch = useSearch(props);
  const boxLoading = [...new Array(20)];
  const { hasBreadcrumb } = props;

  return (
    <div className="container">
      <AcLoadingModal isOpen={hookSearch.loading} />
      {/* ====================== breadcrumb ====================== */}
      {hasBreadcrumb !== false && (
        <div className="breadcrumb p-24">
          <ul>
            <li>
              <Link href="/">
                <a>پاساژ انلاین آدرس کلیک</a>
              </Link>
              <Icon name="left" />
            </li>
            {hookSearch.breadCrumbs?.map(breadCrumb => (
              <li key={breadCrumb.Id}>
                <a href={`/search/${breadCrumb.Id}`}>{breadCrumb.Name}</a>
                <Icon name="left" />
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* ============================================ */}
      <div className={style.wrapper}>
        {/* ====================== filtering ====================== */}
        <aside>
          <SearchCategoryListContainer
            breadCrumbs={hookSearch.breadCrumbs}
            categories={hookSearch.categories}
            loading={hookSearch.firstLoading}
          />
          <BrandList
            brands={hookSearch.brands}
            loading={hookSearch.firstLoading}
            onBrandIdsFilterChange={hookSearch.onBrandIdsFilterChange}
          />
          <div className="m-b-16">
            <div className="card p-16 d-flex flex-x-between">
              <span className="fontSize-14 fontWeight-400">
                فقط کالاهای موجود
              </span>
              <Checkbox
                theme="slide"
                checked={hookSearch.filter.Available}
                onClick={hookSearch.onAvailableChange}
                title=""
              />
            </div>
          </div>
          <div className="m-b-16">
            <div className="card p-16 d-flex flex-x-between">
              <span className="fontSize-14 fontWeight-400">
                فقط کالاهای اصل
              </span>
              <Checkbox
                theme="slide"
                checked={hookSearch.filter.Original}
                onClick={hookSearch.onOriginalChange}
                title=""
              />
            </div>
          </div>
          <SearchPriceRangeContainer
            from={hookSearch.filter.PriceRangeFrom}
            to={hookSearch.filter.PriceRangeTo}
            highestPrice={hookSearch.highestPrice}
            onRangePriceFilter={hookSearch.onPriceRangeFilter}
          />
          <SearchSpecificationContainer
            specifications={hookSearch.specifications}
            onSpecificationChange={hookSearch.onSpecificationChange}
          />
        </aside>
        {/* ============================================ */}
        <section>
          <div className="m-b-32">
            <TabSelect
              title="مرتب سازی بر اساس:"
              sticky
              icon="list-layout"
              onChange={hookSearch.onSortChange}
              activeTab={hookSearch.filter.Sort}
              item={Factory.searchSortingList()}
            />
          </div>
          {hookSearch.firstLoading ? (
            <div
              className={generateClassName([
                style.categoryItemsWrap,
                "m-b-64",
              ])}>
              {/* ====================== first loading ====================== */}
              {boxLoading.map((_d, index) => (
                <PBSkeleton key={`productSkeleton${index}`} />
              ))}
              {/* ============================================ */}
            </div>
          ) : (
            <>
              {/* ====================== product not fount ====================== */}
              {hookSearch.products.length === 0 && (
                <div className="text-center d-flex flex-column flex-over-center h50vh">
                  <div className="m-b-24">
                    <img src={notFound} alt="" />
                  </div>
                  <div className="fontSize-24 fontWeight-500 colorGray-5e5e5e">
                    نتیجه ای یافت نشد
                  </div>
                </div>
              )}
              {/* ============================================ */}
              {/* ====================== products ====================== */}
              {hookSearch.products.length > 0 && (
                <div
                  className={generateClassName([
                    style.categoryItemsWrap,
                    "m-b-64",
                  ])}>
                  {hookSearch.products.map((product, index) => (
                    <ProductBox
                      product={product}
                      link={hookSearch.productServiceLink(product)}
                      key={`${product.Id}${product.Name}${index}`}
                    />
                  ))}
                </div>
              )}
              {/* ============================================ */}
              {/* ====================== pagination ====================== */}
              {hookSearch.filter.TotalItems > 20 && (
                <div className="d-flex flex-x-center">
                  <ListPagination
                    pagination={hookSearch.filter}
                    onPaginationChange={hookSearch.onPaginationChange}
                  />
                </div>
              )}
              {/* ============================================ */}
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default SearchPageDesktop;
