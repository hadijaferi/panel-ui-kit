export interface ISetCurrentChatAction {
  type: "SET_CURRENT_CHAT_ACTION";
  payload: {
    chatId: number;
  };
}
