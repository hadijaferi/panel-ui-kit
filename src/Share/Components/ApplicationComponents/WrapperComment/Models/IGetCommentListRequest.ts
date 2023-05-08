import { CommentSortType } from "../../../../../infrastructure/Models/Enums/CommentSortType";
import { IPagination } from "../../../../../infrastructure/Models/IPagination";

export interface IGetCommentsRequest extends IPagination {
  ProductId: number;
  SortType: CommentSortType;
}
