import { IMessageModel } from "../IMessageModel";
import { IChatPaginationModel } from "../IChatPaginationModel";

export interface IChatListMessageResponse {
  Messages: IMessageModel[];
  Pagination: IChatPaginationModel;
  ChatId: number;
  Tag: string;
}
