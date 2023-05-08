export interface ISetChatUploadCancelAction {
  type: "SET_CHAT_UPLOAD_CANCEL";
  payload: {
    fileId: string;
  };
}
