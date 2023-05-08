import { IMessageModel } from "../../Models/IMessageModel";
import { IAddChatMessageAction } from "../../Models/Store/Actions/IAddChatMessageAction";

const addChatMessageAction = (
  message: IMessageModel,
): IAddChatMessageAction => {
  return {
    type: "ADD_CHAT_MESSAGE_ACTION",
    payload: {
      message,
    },
  };
};

export default addChatMessageAction;
