export interface ISetChatUploadRejectAction {
  type: "SET_CHAT_UPLOAD_REJECT";
  payload: {
    fileId: string;
  };
}
