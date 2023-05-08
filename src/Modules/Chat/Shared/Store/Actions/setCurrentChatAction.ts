import { ISetCurrentChatAction } from "../../Models/Store/Actions/ISetCurrentChatAction";

const setCurrentChatAction = (chatId: number): ISetCurrentChatAction => {
  return {
    type: "SET_CURRENT_CHAT_ACTION",
    payload: {
      chatId,
    },
  };
};

export default setCurrentChatAction;
