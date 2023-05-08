import { IChatItemState } from "./IChatItemState";
import { IChatUser } from "./IChatUser";
import { IChat } from "./IChat";
import { IChatClientInfo } from "./IChatClientInfo";
import { IChatUpload } from "./IChatUpload";

export interface IChatState {
  chats: IChatItemState<IChat>;
  users: IChatItemState<IChatUser>;
  upload: IChatItemState<IChatUpload, string>;
  currentChatId: number;
  clientInfo: IChatClientInfo;
}
