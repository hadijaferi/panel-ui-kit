import React, { Component } from "react";
import Link from "next/link";
import style from "./Desktop.module.sass";
import SearchBrandListContainer from "./Components/BrandList/Container";
import SearchPriceRangeContainer from "./Components/PriceRange/Container";
import SearchSpecificationContainer from "./Components/Specification/Container";
import SearchCategoryListContainer from "./Components/categoryList/Container";
import { ISearchProps } from "./Models/ISearchProps";
import Factory from "./Factory";
import generateClassName from "../../Share/Helpers/Dom/generateClassName";
import TabSelect from "../../Share/Components/Common/TabSelect/TabSelect";
import Icon from "../../Share/Components/Common/Icon/Icon";
import ProductBox from "../../Share/Components/Common/ProductBox/ProductBox";
import ListPagination from "../../Share/Components/Common/ListPagination/ListPagination";
import { AcLoadingModal } from "../../Share/Components/Desktop/AcLoadingModal/AcLoadingModal";
import Checkbox from "../../Share/Components/Common/Form/checkbox/Checkbox";
import notFound from "../../Resources/image/notFound.png";

class SearchPageDesktop extends Component<ISearchProps> {
  render() {
    return (
      <div className="container">
        <AcLoadingModal isOpen={this.props.loading} />
        <div className="breadcrumb p-24">
          <ul>
            <li>
              <Link href="/">
                <a>پاساژ انلاین آدرس کلیک</a>
              </Link>
              <Icon name="left" />
            </li>
            {this.props.breadCrumbs?.map(breadCrumb => (
              <li key={breadCrumb.Id}>
                <a href={`/search/${breadCrumb.Id}`}>{breadCrumb.Name}</a>
                <Icon name="left" />
              </li>
            ))}
          </ul>
        </div>
        <div className={style.wrapper}>
          <aside>
            {this.props.categories.length !== 0 && (
              <div className="m-b-16">
                <SearchCategoryListContainer
                  categories={this.props.categories}
                  breadCrumbs={this.props.breadCrumbs}
                />
              </div>
            )}
            {this.props.brands.length !== 0 && (
              <div className="m-b-16">
                <SearchBrandListContainer
                  brands={this.props.brands}
                  onBrandIdsFilterChange={this.props.onBrandIdsFilterChange}
                />
              </div>
            )}
            <div className="m-b-16">
              <div className="card p-16 d-flex flex-x-between">
                <span className="fontSize-14 fontWeight-400">
                  فقط کالاهای موجود
                </span>
                <Checkbox
                  theme="slide"
                  checked={this.props.filter.Available}
                  onClick={this.props.onAvailableChange}
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
                  checked={this.props.filter.Original}
                  onClick={this.props.onOriginalChange}
                  title=""
                />
              </div>
            </div>

            {this.props.highestPrice > 0 && (
              <div className="m-b-16">
                <SearchPriceRangeContainer
                  from={this.props.filter.PriceRangeFrom}
                  to={this.props.filter.PriceRangeTo}
                  highestPrice={this.props.highestPrice}
                  onRangePriceFilter={this.props.onPriceRangeFilter}
                />
              </div>
            )}
            {this.props.specifications.length !== 0 && (
              <div className="m-b-16">
                <SearchSpecificationContainer
                  specifications={this.props.specifications}
                  onSpecificationChange={this.props.onSpecificationChange}
                />
              </div>
            )}
          </aside>
          <section>
            <div className="m-b-32">
              <TabSelect
                title="مرتب سازی بر اساس:"
                sticky
                icon="list-layout"
                onChange={this.props.onSortChange}
                activeTab={this.props.filter.Sort}
                item={Factory.searchSortingList()}
              />
            </div>
            <>
              {this.props.products.length === 0 && (
                <div className="text-center d-flex flex-column flex-over-center h50vh">
                  <div className="m-b-24">
                    <img src={notFound} alt="" />
                  </div>
                  <div className="fontSize-24 fontWeight-500 colorGray-5e5e5e">
                    نتیجه ای یافت نشد
                  </div>
                </div>
              )}
              {this.props.products.length > 0 && (
                <div
                  className={generateClassName([
                    style.categoryItemsWrap,
                    "m-b-64",
                  ])}>
                  {this.props.products.map((product, index) => (
                    <ProductBox
                      product={product}
                      link={this.props.productServiceLink(product)}
                      key={`${product.Id}${product.Name}${index}`}
                    />
                  ))}
                </div>
              )}
              {this.props.filter.TotalItems > 20 && (
                <div className="d-flex flex-x-center">
                  <ListPagination
                    pagination={this.props.filter}
                    onPaginationChange={this.props.onPaginationChange}
                  />
                </div>
              )}
            </>
          </section>
        </div>
      </div>
    );
  }
}

export default SearchPageDesktop;
