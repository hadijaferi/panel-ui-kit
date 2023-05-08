export interface ISetChatUserOfflineAction {
  type: "SET_CHAT_USER_OFFLINE_ACTION";
  payload: {
    userId: number;
  };
}
