import { IPagination } from "../../../infrastructure/Models/IPagination";

export interface ISearchRequest extends IPagination {
  SearchValue: string;
  CategoryId: number;
  MieterId: number;
  Brands: number[];
  Mieters: number[];
  Available: boolean;
  Original: boolean;
  Specifications: string[];
  Sort: SearchSortRequest;
  PriceRangeFrom: number;
  PriceRangeTo: number;
  DateFilter?: {
    From: string;
    To: string;
  };
}

export enum SearchSortRequest {
  MostViewed = 1,
  Newest = 2,
  Cheapest = 3,
  MostExpensive = 4,
  MostPopular = 5,
  BestSelling = 6,
}
