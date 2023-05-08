export interface ISetChatUploadSuccessAction {
  type: "SET_CHAT_UPLOAD_SUCCESS";
  payload: {
    fileId: string;
    mediaId: number;
  };
}
