import { IPagination } from "../../../../infrastructure/Models/IPagination";
import { IProduct } from "../../../../infrastructure/Models/Entity/IProduct";

export interface ICommentsItemResponse {
  Id: number;
  Title: string;
  ReviewText: string;
  ReplyText: string;
  Rating: number;
  IsApproved: true;
  Product: IProduct;
  CreatedAt: string;
}
export interface ICommentsResponse {
  Pagination: IPagination;
  Items: ICommentsItemResponse[];
  ItemsCount: number;
}
