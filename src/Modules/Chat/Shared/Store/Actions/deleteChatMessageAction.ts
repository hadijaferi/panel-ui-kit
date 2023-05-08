import { IDeleteChatMessageAction } from "../../Models/Store/Actions/IDeleteChatMessageAction";

const deleteChatMessageAction = (
  messageId: string | number,
  chatId: number,
): IDeleteChatMessageAction => {
  return {
    type: "DELETE_CHAT_MESSAGE_ACTION",
    payload: {
      messageId,
      chatId
    },
  };
};

export default deleteChatMessageAction;
