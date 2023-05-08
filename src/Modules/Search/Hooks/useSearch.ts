import { useEffect, useState } from "react";
// import formatSearchLink from "../../../Share/Helpers/formatSearchLink";
// import { useRouter } from "next/router";
import {
  ISearchRequest,
  SearchSortRequest,
} from "../../../Share/Models/Search/ISearchRequest";
import { ISearchResponse } from "../../../Share/Models/Search/ISearchResponse";
import Factory from "../Factory";
import Service from "../../../Share/Services/Search";
import { IPagination } from "../../../infrastructure/Models/IPagination";
import { IBrand } from "../../../infrastructure/Models/Entity/IBrand";
import { ISearchSpecification } from "../../../Share/Models/Search/ISearchSpecification";
import formatProductLink from "../../../Share/Helpers/Links/formatProductLink";
import { IProduct } from "../../../infrastructure/Models/Entity/IProduct";
import { LINKS } from "../../../Share/Constants/LINKS";
import { ICategory } from "../../../infrastructure/Models/Entity/ICategory";
import { IBreadcrumb } from "../../../infrastructure/Models/Entity/IBreadcrumb";

export interface ISearchContainerProps {
  SearchResponse?: ISearchResponse;
  queryParameters: Partial<ISearchRequest>;
  csrRequest?: boolean;
  hasBreadcrumb?: boolean;
}

export interface ISearchProps {
  firstLoading: boolean;
  loading: boolean;
  highestPrice: number;
  priceRange: number;
  brands: Array<IBrand>;
  categories: Array<ICategory>;
  products: Array<IProduct>;
  specifications: Array<ISearchSpecification>;
  filter: ISearchRequest;
  breadCrumbs: IBreadcrumb[];
  onOriginalChange: () => void;
  onAvailableChange: () => void;
  productServiceLink: (product: IProduct) => any;
  onSpecificationChange: (specification: ISearchSpecification[]) => void;
  onPriceRangeFilter: (from: number, to: number) => void;
  onPaginationChange: (pagination: IPagination) => void;
  onBrandIdsFilterChange: (brands: IBrand[]) => void;
  onSortChange: (selectedSortId: SearchSortRequest) => void;
  onFullFilterChange: (queryParameters: Partial<ISearchRequest>) => void;
}

const useSearch = (props: ISearchContainerProps): ISearchProps => {
  const SearchResponse: ISearchResponse = {
    BreadCrumbs: props?.SearchResponse?.BreadCrumbs || [],
    Specifications: props?.SearchResponse?.Specifications || [],
    Products: props?.SearchResponse?.Products || [],
    PriceRange: props?.SearchResponse?.PriceRange || 0,
    HighestPrice: props?.SearchResponse?.HighestPrice || 0,
    Categories: props?.SearchResponse?.Categories || [],
    Brands: props?.SearchResponse?.Brands || [],
    Pagination: {
      PageIndex: props?.SearchResponse?.Pagination.PageIndex || 1,
      MaxPageSize: props?.SearchResponse?.Pagination.MaxPageSize || 0,
      PageSize: props?.SearchResponse?.Pagination.PageSize || 20,
      TotalItems: props?.SearchResponse?.Pagination.TotalItems || 0,
      TotalPages: props?.SearchResponse?.Pagination.TotalPages || 0,
    },
  };

  const queryParameters: ISearchRequest = {
    SearchValue: props?.queryParameters?.SearchValue || "",
    MieterId: props?.queryParameters?.MieterId || 0,
    Mieters: props?.queryParameters?.Mieters || [],
    Specifications: props?.queryParameters?.Specifications || [],
    PriceRangeTo: props?.queryParameters?.PriceRangeTo || 0,
    PriceRangeFrom: props?.queryParameters?.PriceRangeFrom || 0,
    CategoryId: props?.queryParameters?.CategoryId || 0,
    Brands: props?.queryParameters?.Brands || [],
    Sort: props?.queryParameters?.Sort || SearchSortRequest.MostPopular,
    Original: props?.queryParameters?.Original || false,
    Available: props?.queryParameters?.Available || false,
    PageIndex: SearchResponse?.Pagination.PageIndex || 1,
    MaxPageSize: SearchResponse?.Pagination.MaxPageSize || 0,
    PageSize: SearchResponse?.Pagination.PageSize || 20,
    TotalItems: SearchResponse?.Pagination.TotalItems || 0,
    TotalPages: SearchResponse?.Pagination.TotalPages || 0,
  };
  // const routing = useRouter();

  const [brands, setBrands] = useState(SearchResponse?.Brands);
  const [categories, setCategories] = useState(SearchResponse?.Categories);
  const [highestPrice, setHighestPrice] = useState(
    SearchResponse?.HighestPrice,
  );
  const [loading, setLoading] = useState(false);
  const [firstLoading, setFirstLoading] = useState(false);
  const [priceRange, setPriceRange] = useState(SearchResponse?.PriceRange);

  const [products, setProducts] = useState(SearchResponse?.Products);
  const [specifications, setSpecifications] = useState(
    SearchResponse?.Specifications,
  );
  const [breadCrumbs, setBreadCrumbs] = useState(SearchResponse.BreadCrumbs);
  const [filter, setFilter] = useState({
    ...queryParameters,
  });

  // console.log("props : ", props);

  // console.log("ddddddddddddddddddddddd");

  // reload data when query change
  useEffect(() => {
    setBrands(SearchResponse.Brands);
    setCategories(SearchResponse.Categories);
    setHighestPrice(SearchResponse?.HighestPrice);
    setPriceRange(SearchResponse?.PriceRange);
    setProducts(SearchResponse.Products);
    setSpecifications(SearchResponse?.Specifications);
    setBreadCrumbs(SearchResponse.BreadCrumbs);
    setFilter({ ...queryParameters });
  }, [
    SearchResponse.Products,
    SearchResponse.Brands,
    SearchResponse.Categories,
    SearchResponse?.HighestPrice,
    SearchResponse?.PriceRange,
    SearchResponse?.Specifications,
    SearchResponse.BreadCrumbs,
  ]);

  const setSuccessResponse = (
    response: ISearchResponse,
    newFilter: ISearchRequest = filter,
  ) => {
    newFilter.PageSize = response?.Pagination?.PageSize || 0;
    newFilter.MaxPageSize = response?.Pagination?.MaxPageSize || 0;
    newFilter.TotalItems = response?.Pagination?.TotalItems || 0;
    newFilter.PageIndex = response?.Pagination?.PageIndex || 0;
    setBrands(response?.Brands || []);
    setCategories(response?.Categories || []);
    setHighestPrice(response?.HighestPrice || 0);
    setLoading(false);
    setFirstLoading(false);
    setPriceRange(response?.PriceRange || 0);
    setProducts(response?.Products || []);
    setSpecifications(response?.Specifications || []);
    setBreadCrumbs(response?.BreadCrumbs || []);
    setFilter(newFilter);
    // routing.push(formatSearchLink(filter, routing.asPath), undefined, {
    //   shallow: true,
    //   scroll: true,
    // });
  };

  const searchCsr = () => {
    setFirstLoading(true);
    const requestBody = Factory.searchRequestBody({
      ...filter,
    });
    Service.searchList(requestBody)
      .then(res => {
        setSuccessResponse(res.data.Data, filter);
      })
      .catch(() => {
        setFirstLoading(false);
      });
  };

  const onSortChange = (Sort: SearchSortRequest) => {
    setLoading(true);
    const requestBody = Factory.searchRequestBody({
      ...filter,
      Sort,
    });
    Service.searchList(requestBody)
      .then(res => {
        filter.Sort = Sort;
        setSuccessResponse(res.data.Data, filter);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onPaginationChange = (pagination: IPagination) => {
    setLoading(true);
    const requestBody = Factory.searchRequestBody({
      ...filter,
      ...pagination,
    });
    Service.searchList(requestBody)
      .then(res => {
        setSuccessResponse(res.data.Data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onPriceRangeFilter = (PriceRangeFrom: number, PriceRangeTo: number) => {
    setLoading(true);
    const requestBody = Factory.searchRequestBody({
      ...filter,
      PriceRangeFrom,
      PriceRangeTo,
    });
    Service.searchList(requestBody)
      .then(res => {
        if (PriceRangeTo === highestPrice && PriceRangeFrom === 0) {
          filter.PriceRangeTo = 0;
          filter.PriceRangeFrom = 0;
        } else {
          filter.PriceRangeTo = PriceRangeTo;
          filter.PriceRangeFrom = PriceRangeFrom;
        }

        setSuccessResponse(res.data.Data, filter);
      })
      .catch(() => {
        setLoading(true);
      });
  };

  const onBrandIdsFilterChange = (filterBrands: IBrand[]) => {
    const activeBrands = Factory.getActiveBrands(filterBrands);
    setLoading(true);
    const requestBody = Factory.searchRequestBody({
      ...filter,
      Brands: activeBrands,
    });
    Service.searchList(requestBody)
      .then(res => {
        filter.Brands = activeBrands;
        setSuccessResponse(res.data.Data, filter);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onSpecificationChange = (
    filterSpecifications: ISearchSpecification[],
  ) => {
    setLoading(true);
    const activeSpecifications = Factory.getActiveSpecifications(
      filterSpecifications,
    );
    const requestBody = Factory.searchRequestBody({
      ...filter,
      Specifications: activeSpecifications,
    });
    Service.searchList(requestBody)
      .then(res => {
        filter.Specifications = activeSpecifications;
        setSuccessResponse(res.data.Data, filter);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onAvailableChange = () => {
    setLoading(true);
    const requestBody = Factory.searchRequestBody({
      ...filter,
      Available: !filter.Available,
    });
    Service.searchList(requestBody)
      .then(res => {
        filter.Available = !filter.Available;
        setSuccessResponse(res.data.Data, filter);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onOriginalChange = () => {
    setLoading(true);
    const requestBody = Factory.searchRequestBody({
      ...filter,
      Original: !filter.Original,
    });
    Service.searchList(requestBody)
      .then(res => {
        filter.Original = !filter.Original;
        setSuccessResponse(res.data.Data, filter);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const productServiceLink = (product: IProduct) => {
    if (product.Type === "SimpleProduct") {
      return formatProductLink(LINKS.PRODUCT, product);
    }
    return formatProductLink(LINKS.SERVICE, product);
  };

  const onFullFilterChange = (queryPa: Partial<ISearchRequest>) => {
    const tempFiltering: ISearchRequest = {
      Available: filter.Available,
      Brands: queryPa.Brands || [], // get from mobile ui
      Original: filter.Original,
      Sort: filter.Sort,
      TotalPages: filter.TotalPages,
      TotalItems: filter.TotalItems,
      PageSize: filter.PageSize,
      PageIndex: filter.PageIndex,
      Specifications: queryPa.Specifications || [],
      CategoryId: filter.CategoryId,
      DateFilter: filter.DateFilter,
      MaxPageSize: filter.MaxPageSize,
      MieterId: filter.MieterId,
      Mieters: filter.Mieters,
      SearchValue: filter.SearchValue,
      PriceRangeFrom: queryPa.PriceRangeFrom || 0, // get from mobile ui
      PriceRangeTo: queryPa.PriceRangeTo || 0, // get from mobile ui
    };
    setLoading(true);
    const requestBody = Factory.searchRequestBody({ ...tempFiltering });
    Service.searchList(requestBody)
      .then(res => {
        filter.Available = tempFiltering.Available;
        filter.Brands = tempFiltering.Brands;
        filter.Original = tempFiltering.Original;
        filter.Sort = tempFiltering.Sort;
        filter.Specifications = tempFiltering.Specifications;
        filter.CategoryId = tempFiltering.CategoryId;
        filter.DateFilter = tempFiltering.DateFilter;
        filter.MaxPageSize = tempFiltering.MaxPageSize;
        filter.MieterId = tempFiltering.MieterId;
        filter.Mieters = tempFiltering.Mieters;
        filter.SearchValue = tempFiltering.SearchValue;
        filter.PriceRangeFrom = tempFiltering.PriceRangeFrom;
        filter.PriceRangeTo = tempFiltering.PriceRangeTo;
        setSuccessResponse(res.data.Data, filter);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (props.csrRequest) {
      searchCsr();
    }
  }, [queryParameters]);

  return {
    loading,
    firstLoading,
    brands,
    categories,
    highestPrice,
    priceRange,
    products,
    specifications,
    filter,
    breadCrumbs,
    onSortChange,
    onBrandIdsFilterChange,
    onPaginationChange,
    onPriceRangeFilter,
    onSpecificationChange,
    productServiceLink,
    onAvailableChange,
    onOriginalChange,
    onFullFilterChange,
  };
};

export default useSearch;
