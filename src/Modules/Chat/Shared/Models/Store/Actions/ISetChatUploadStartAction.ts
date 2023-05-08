export interface ISetChatUploadStartAction {
  type: "SET_CHAT_UPLOAD_START";
  payload: {
    file: File;
    chatId: number;
    fileName: string;
    fileSize: number;
    fileId: string;
  };
}
