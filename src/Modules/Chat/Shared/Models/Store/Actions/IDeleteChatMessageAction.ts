export interface IDeleteChatMessageAction {
  type: "DELETE_CHAT_MESSAGE_ACTION";
  payload: {
    messageId: number | string;
    chatId: number;
  };
}
