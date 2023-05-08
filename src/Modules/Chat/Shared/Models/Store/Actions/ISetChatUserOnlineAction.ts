export interface ISetChatUserOnlineAction {
  type: "SET_CHAT_USER_ONLINE_ACTION";
  payload: {
    userId: number;
  };
}
