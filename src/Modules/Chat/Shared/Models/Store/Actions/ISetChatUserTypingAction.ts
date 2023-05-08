export interface ISetChatUserTypingAction {
  type: "SET_CHAT_USER_IS_TYPING_ACTION";
  payload: {
    userId: number;
  };
}
