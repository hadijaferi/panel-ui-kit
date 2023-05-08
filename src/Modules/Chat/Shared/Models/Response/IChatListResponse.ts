import { IChatModel } from "../IChatModel";
import { IChatPaginationModel } from "../IChatPaginationModel";

export interface IChatListResponse {
  Chats: IChatModel[];
  pagination: IChatPaginationModel;
}
