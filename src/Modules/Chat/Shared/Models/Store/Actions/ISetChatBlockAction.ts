export interface ISetChatBlockAction {
  type: "SET_CHAT_BLOCK_ACTION";
  payload: {
    chatId: number;
  };
}
