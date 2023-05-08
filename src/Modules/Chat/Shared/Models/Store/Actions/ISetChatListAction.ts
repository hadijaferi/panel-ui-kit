import { IChatItemState } from "../IChatItemState";
import { IChatUser } from "../IChatUser";
import { IChat } from "../IChat";

export interface ISetChatListAction {
  type: "SET_CHAT_LIST_ACTION";
  payload: {
    chats: IChatItemState<IChat>;
    users: IChatItemState<IChatUser>;
  };
}
