import { IComment } from "../../../../../infrastructure/Models/Entity/IComment";
import { IPagination } from "../../../../../infrastructure/Models/IPagination";

export interface IGetCommentsResponse {
  Items: IComment[];
  ItemsCount: number;
  Pagination: IPagination;
}
