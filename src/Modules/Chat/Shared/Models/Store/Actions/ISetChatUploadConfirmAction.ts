export interface ISetChatUploadConfirmAction {
  type: "SET_CHAT_UPLOAD_CONFIRM";
  payload: {
    fileId: string;
  };
}
