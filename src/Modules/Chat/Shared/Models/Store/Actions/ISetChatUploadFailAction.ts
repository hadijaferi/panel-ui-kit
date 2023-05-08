export interface ISetChatUploadFailAction {
  type: "SET_CHAT_UPLOAD_FAILED";
  payload: {
    fileId: string;
    error: string;
  };
}
