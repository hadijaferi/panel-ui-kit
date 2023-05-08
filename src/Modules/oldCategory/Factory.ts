import { ITabItem } from "../../Share/Components/Common/TabSelect/Models/ITabSelectProps";
import {
  ISearchRequest,
  SearchSortRequest,
} from "../../Share/Models/Search/ISearchRequest";

export default {
  searchRequestBody(queryParameters: ISearchRequest): Partial<ISearchRequest> {
    const requestBody: Partial<ISearchRequest> = { ...queryParameters };
    if (!queryParameters?.SearchValue) {
      delete requestBody.SearchValue;
    }
    if (!queryParameters?.CategoryId) {
      delete requestBody.CategoryId;
    }
    if (!queryParameters?.MieterId) {
      delete requestBody.MieterId;
    }
    if (!queryParameters?.Brands.length) {
      delete requestBody.Brands;
    }
    if (!queryParameters?.Mieters.length) {
      delete requestBody.Mieters;
    }
    if (!queryParameters?.Specifications.length) {
      delete requestBody.Specifications;
    }
    if (!queryParameters?.Sort) {
      delete requestBody.Sort;
    }
    if (!queryParameters?.PriceRangeTo && !requestBody.PriceRangeFrom) {
      delete requestBody.PriceRangeTo;
      delete requestBody.PriceRangeFrom;
    }
    if (!queryParameters?.PageIndex) {
      delete requestBody.PageIndex;
    }
    if (!queryParameters?.PageSize) {
      delete requestBody.PageSize;
    }
    if (!queryParameters?.Available === true) {
      delete requestBody.Available;
    }
    if (!queryParameters?.Original === true) {
      delete requestBody.Original;
    }
    if (!queryParameters?.PageSize) {
      delete requestBody.PageSize;
    }
    delete requestBody.MaxPageSize;
    delete requestBody.TotalItems;
    delete requestBody.TotalPages;
    return requestBody;
  },

  searchSortingList(): Array<ITabItem> {
    return [
      {
        title: "پرفروش ترین",
        id: SearchSortRequest.BestSelling,
      },
      {
        title: "محبوب ترین",
        id: SearchSortRequest.MostPopular,
      },
      {
        title: "پربازدیدترین",
        id: SearchSortRequest.MostViewed,
      },
      {
        title: "جدیدترین",
        id: SearchSortRequest.Newest,
      },
      {
        title: "ارزان ترین",
        id: SearchSortRequest.Cheapest,
      },
      {
        title: "گرانترین",
        id: SearchSortRequest.MostExpensive,
      },
    ];
  },
};
