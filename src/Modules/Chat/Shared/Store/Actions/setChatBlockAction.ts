import { ISetChatBlockAction } from "../../Models/Store/Actions/ISetChatBlockAction";

const setChatBlockAction = (chatId: number): ISetChatBlockAction => {
  return {
    type: "SET_CHAT_BLOCK_ACTION",
    payload: {
      chatId,
    },
  };
};

export default setChatBlockAction;
