import { IChatModel } from "../IChatModel";
import { IMessageModel } from "../IMessageModel";
import { IChatItemState } from "./IChatItemState";
import { Modify } from "../../../../../infrastructure/Models/Modify";

export type IChat = Modify<
  IChatModel,
  {
    Messages: IChatItemState<IMessageModel, string | number>;
    LastMessage: IMessageModel;
    UnreadMessageCount: number;
    IsBlocked: boolean;
  }
>;
