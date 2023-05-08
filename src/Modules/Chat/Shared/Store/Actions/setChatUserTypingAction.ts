import { ISetChatUserTypingAction } from "../../Models/Store/Actions/ISetChatUserTypingAction";

const setChatUserTypingAction = (userId: number): ISetChatUserTypingAction => {
  return {
    type: "SET_CHAT_USER_IS_TYPING_ACTION",
    payload: {
      userId,
    },
  };
};

export default setChatUserTypingAction;
