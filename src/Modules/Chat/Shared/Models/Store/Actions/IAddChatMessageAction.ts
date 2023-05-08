import { IMessageModel } from "../../IMessageModel";

export interface IAddChatMessageAction {
  type: "ADD_CHAT_MESSAGE_ACTION";
  payload: {
    message: IMessageModel;
  };
}
