import { IMessageModel } from "../../IMessageModel";
import { IChatItemState } from "../IChatItemState";

export interface ISetChatMessageListAction {
  type: "SET_CHAT_MESSAGE_LIST_ACTION";
  payload: {
    chatId: number;
    messages: IChatItemState<IMessageModel>;
  };
}
