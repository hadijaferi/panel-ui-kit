import React, { Component } from "react";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import BaseResponsive from "../../infrastructure/BaseComponents/BaseResponsive";
import Service from "../../Share/Services/Search";
import { ISearchProps } from "./Models/ISearchProps";
import { IPagination } from "../../infrastructure/Models/IPagination";
import {
  ISearchRequest,
  SearchSortRequest,
} from "../../Share/Models/Search/ISearchRequest";
import { ISearchContainerState } from "./Models/IContainerState";
import { ISearchContainerProps } from "./Models/IContainerProps";
import Factory from "./Factory";
import { ISearchResponse } from "../../Share/Models/Search/ISearchResponse";
import { IBrand } from "../../infrastructure/Models/Entity/IBrand";
import { ISearchSpecification } from "../../Share/Models/Search/ISearchSpecification";
import { ISearchSpecificationAttribute } from "../../Share/Models/Search/ISearchSpecificationAttribute";
import { IProduct } from "../../infrastructure/Models/Entity/IProduct";
import { LINKS } from "../../Share/Constants/LINKS";
import formatProductLink from "../../Share/Helpers/Links/formatProductLink";
import formatSearchLink from "../../Share/Helpers/Links/formatSearchLink";

const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

class SearchPageContainer extends Component<
  ISearchContainerProps,
  ISearchContainerState
> {
  state: ISearchContainerState = {
    brands: this.props.SearchResponse?.Brands,
    categories: this.props.SearchResponse?.Categories,
    highestPrice: this.props.SearchResponse?.HighestPrice,
    loading: false,
    priceRange: this.props.SearchResponse?.PriceRange,
    products: this.props.SearchResponse?.Products,
    specifications: this.props.SearchResponse?.Specifications,
    breadCrumbs: this.props.SearchResponse.BreadCrumbs,
    filter: {
      ...this.props.queryParameters,
      ...this.props.SearchResponse?.Pagination,
    },
  };

  setSuccessResponse = (
    response: ISearchResponse,
    filter: ISearchRequest = this.state.filter,
  ) => {
    filter.PageSize = response?.Pagination?.PageSize || 0;
    filter.MaxPageSize = response?.Pagination?.MaxPageSize || 0;
    filter.TotalItems = response?.Pagination?.TotalItems || 0;
    filter.PageIndex = response?.Pagination?.PageIndex || 0;
    this.setState({
      brands: response?.Brands || [],
      categories: response?.Categories || [],
      highestPrice: response?.HighestPrice || 0,
      priceRange: response?.PriceRange || 0,
      products: response?.Products || [],
      specifications: response?.Specifications || [],
      loading: false,
      filter,
    });
    this.props.router.push(formatSearchLink(filter), undefined, {
      shallow: true,
      scroll: true,
    });
  };

  onSortChange = (Sort: SearchSortRequest) => {
    this.setState({ loading: true }, () => {
      const requestBody = Factory.searchRequestBody({
        ...this.state.filter,
        Sort,
      });
      Service.searchList(requestBody)
        .then(res => {
          const { filter } = this.state;
          filter.Sort = Sort;
          this.setSuccessResponse(res.data.Data, filter);
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    });
  };

  onPaginationChange = (pagination: IPagination) => {
    this.setState({ loading: true }, () => {
      const requestBody = Factory.searchRequestBody({
        ...this.state.filter,
        ...pagination,
      });
      Service.searchList(requestBody)
        .then(res => {
          this.setSuccessResponse(res.data.Data);
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    });
  };

  onPriceRangeFilter = (PriceRangeFrom: number, PriceRangeTo: number) => {
    this.setState({ loading: true }, () => {
      const requestBody = Factory.searchRequestBody({
        ...this.state.filter,
        PriceRangeFrom,
        PriceRangeTo,
      });
      Service.searchList(requestBody)
        .then(res => {
          const { filter } = this.state;
          if (
            PriceRangeTo === this.state.highestPrice &&
            PriceRangeFrom === 0
          ) {
            filter.PriceRangeTo = 0;
            filter.PriceRangeFrom = 0;
          } else {
            filter.PriceRangeTo = PriceRangeTo;
            filter.PriceRangeFrom = PriceRangeFrom;
          }

          this.setSuccessResponse(res.data.Data, filter);
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    });
  };

  onBrandIdsFilterChange = (brands: IBrand[]) => {
    const filterSelectedBrand = brands.filter(brand => brand.IsChecked);
    const Brands = filterSelectedBrand.map(brand => brand.Id);
    this.setState({ loading: true }, () => {
      const requestBody = Factory.searchRequestBody({
        ...this.state.filter,
        Brands,
      });
      Service.searchList(requestBody)
        .then(res => {
          const { filter } = this.state;
          filter.Brands = Brands;
          this.setSuccessResponse(res.data.Data, filter);
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    });
  };

  onSpecificationChange = (specifications: ISearchSpecification[]) => {
    const filterSpecification: ISearchSpecificationAttribute[] = [];
    specifications.forEach(specification => {
      specification.Attributes.forEach(
        (attributes: ISearchSpecificationAttribute) => {
          if (attributes.IsChecked) {
            filterSpecification.push(attributes);
          }
        },
      );
    });
    const Specifications = filterSpecification.map(
      specification => specification.Name,
    );
    this.setState({ loading: true }, () => {
      const requestBody = Factory.searchRequestBody({
        ...this.state.filter,
        Specifications,
      });
      Service.searchList(requestBody)
        .then(res => {
          const { filter } = this.state;
          filter.Specifications = Specifications;
          this.setSuccessResponse(res.data.Data, filter);
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    });
  };

  onAvailableChange = () => {
    const { Available } = this.state.filter;
    this.setState({ loading: true }, () => {
      const requestBody = Factory.searchRequestBody({
        ...this.state.filter,
        Available: !Available,
      });
      Service.searchList(requestBody)
        .then(res => {
          const { filter } = this.state;
          filter.Available = !Available;
          this.setSuccessResponse(res.data.Data, filter);
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    });
  };

  onOriginalChange = () => {
    const { Original } = this.state.filter;
    this.setState({ loading: true }, () => {
      const requestBody = Factory.searchRequestBody({
        ...this.state.filter,
        Original: !Original,
      });
      Service.searchList(requestBody)
        .then(res => {
          const { filter } = this.state;
          filter.Original = !Original;
          this.setSuccessResponse(res.data.Data, filter);
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    });
  };

  productServiceLink = (product: IProduct) => {
    if (product.Type === "SimpleProduct") {
      return formatProductLink(LINKS.PRODUCT, product);
    }
    return formatProductLink(LINKS.SERVICE, product);
  };

  // ====================================================================

  returnProps = (): ISearchProps => {
    return {
      ...this.state,
      onSortChange: this.onSortChange,
      onBrandIdsFilterChange: this.onBrandIdsFilterChange,
      onPaginationChange: this.onPaginationChange,
      onPriceRangeFilter: this.onPriceRangeFilter,
      onSpecificationChange: this.onSpecificationChange,
      productServiceLink: this.productServiceLink,
      onAvailableChange: this.onAvailableChange,
      onOriginalChange: this.onOriginalChange,
    };
  };

  render() {
    return (
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(CategoryPage: any) => <CategoryPage {...this.returnProps()} />}
      </BaseResponsive>
    );
  }
}

export default withRouter(SearchPageContainer);
