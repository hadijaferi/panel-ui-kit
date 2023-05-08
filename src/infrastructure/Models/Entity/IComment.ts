import { ICustomer } from "./ICustomer";

export interface IComment {
  Customer: ICustomer;
  ReviewText: string;
  ReplyText: string;
  Rating: number;
  CreatedAt: string;
  Id: number;
  IsBuyer: boolean;
  LikeCount: number;
  Title: string;
}
