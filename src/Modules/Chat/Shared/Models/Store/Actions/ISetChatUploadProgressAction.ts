export interface ISetChatUploadProgressAction {
  type: "SET_CHAT_UPLOAD_PROGRESS";
  payload: {
    fileId: string;
    progress: number;
  };
}
