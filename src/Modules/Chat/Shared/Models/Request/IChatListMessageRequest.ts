import { IChatPaginationModel } from "../IChatPaginationModel";

export interface IChatListMessageRequest extends IChatPaginationModel {
  Tag?: string;
}
