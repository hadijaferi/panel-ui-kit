export interface ISetChatUserStopTypingAction {
  type: "SET_CHAT_USER_STOP_TYPING_ACTION";
  payload: {
    userId: number;
  };
}
