import { ISetChatUserStopTypingAction } from "../../Models/Store/Actions/ISetChatUserStopTypingAction";

const setChatUserStopTypingAction = (
  userId: number,
): ISetChatUserStopTypingAction => {
  return {
    type: "SET_CHAT_USER_STOP_TYPING_ACTION",
    payload: {
      userId,
    },
  };
};

export default setChatUserStopTypingAction;
