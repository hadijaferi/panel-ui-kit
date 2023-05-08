import { ISetChatUnBlockAction } from "../../Models/Store/Actions/ISetChatUnBlockAction";

const setChatUnBlockAction = (chatId: number): ISetChatUnBlockAction => {
  return {
    type: "SET_CHAT_UNBLOCK_ACTION",
    payload: {
      chatId,
    },
  };
};

export default setChatUnBlockAction;
