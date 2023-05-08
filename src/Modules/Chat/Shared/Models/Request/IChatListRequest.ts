import { IChatPaginationModel } from "../IChatPaginationModel";

export interface IChatListRequest extends IChatPaginationModel {
  IsArchive?: boolean;
}
