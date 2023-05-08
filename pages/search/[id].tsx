import React from "react";
import { NextPageContext } from "next";
import CategoryPageContainer from "../../src/Modules/Search/Container";
import { ILayouts } from "../../src/infrastructure/Models/Theme/ILayouts";
import Service from "../../src/Share/Services/Search";
import { ISearchResponse } from "../../src/Share/Models/Search/ISearchResponse";
import {
  ISearchRequest,
  SearchSortRequest,
} from "../../src/Share/Models/Search/ISearchRequest";
import Factory from "../../src/Modules/Search/Factory";

export async function getServerSideProps(context: NextPageContext) {
  console.log("alijamallo");
  // filtering query param --------------------------
  const id = context?.query?.id;
  const queryParameters: ISearchRequest = {
    SearchValue: typeof context?.query?.q === "string" ? context?.query?.q : "",
    MieterId: 0, // not implement
    Mieters: [], // not implement
    Specifications:
      typeof context?.query?.Specifications === "string"
        ? JSON.parse(context?.query?.Specifications)
        : [],
    PriceRangeTo:
      typeof context?.query?.PriceRangeTo === "string"
        ? parseInt(context?.query?.PriceRangeTo)
        : 0,
    PriceRangeFrom:
      typeof context?.query?.PriceRangeFrom === "string"
        ? parseInt(context?.query?.PriceRangeFrom)
        : 0,
    CategoryId: typeof id === "string" ? parseInt(id) : 0,
    Brands:
      typeof context?.query?.Brands === "string"
        ? JSON.parse(context?.query?.Brands)
        : [],
    Sort:
      typeof context?.query?.Sort === "string"
        ? JSON.parse(context?.query?.Sort)
        : SearchSortRequest.MostPopular,
    PageIndex:
      typeof context?.query?.PageIndex === "string"
        ? parseInt(context?.query?.PageIndex)
        : 1,
    MaxPageSize: 0,
    PageSize: 20,
    TotalItems: 0,
    TotalPages: 0,
    Available: "Available" in context?.query,
    Original: "Original" in context?.query,
  };
  const requestBody: Partial<ISearchRequest> = Factory.searchRequestBody(
    queryParameters,
  );
  // response object -------------------
  let SearchResponse: Partial<ISearchResponse> = {};
  // -----------------------------------------------
  await Service.searchList(requestBody)
    .then(res => {
      SearchResponse = {
        Brands: res.data?.Data?.Brands || [],
        Categories: res.data?.Data?.Categories || [],
        HighestPrice: res.data?.Data?.HighestPrice || 0,
        PriceRange: res.data?.Data?.PriceRange || 0,
        Products: res.data?.Data?.Products || [],
        Specifications: res.data?.Data?.Specifications || [],
        Pagination: res.data?.Data?.Pagination,
        BreadCrumbs: res.data?.Data?.BreadCrumbs,
      };
    })
    .catch(() => {
      SearchResponse = {
        Brands: [],
        Categories: [],
        HighestPrice: 0,
        PriceRange: 0,
        Products: [],
        Specifications: [],
        BreadCrumbs: [],
        Pagination: {
          TotalItems: 0,
          TotalPages: 0,
          PageSize: 0,
          PageIndex: 0,
          MaxPageSize: 0,
        },
      };
    });
  return {
    props: {
      SearchResponse,
      queryParameters,
      Layout: ILayouts.WEBSITE,
    },
  };
}

interface ISearchPageProps {
  SearchResponse: ISearchResponse;
  queryParameters: ISearchRequest;
}

const SearchPage = (props: ISearchPageProps) => {
  return (
    <div>
      {console.log("props ============= ", props)}
      <CategoryPageContainer
        SearchResponse={props.SearchResponse}
        queryParameters={props.queryParameters}
      />
    </div>
  );
};

export default SearchPage;
