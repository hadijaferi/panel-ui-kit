export interface ISetChatUnBlockAction {
  type: "SET_CHAT_UNBLOCK_ACTION";
  payload: {
    chatId: number;
  };
}
