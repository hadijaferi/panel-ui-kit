import { ISetChatUploadStartAction } from "../../Models/Store/Actions/ISetChatUploadStartAction";

const setChatUploadStartAction = (
  file: File,
  chatId: number,
  fileName: string,
  fileId: string,
  fileSize: number,
): ISetChatUploadStartAction => ({
  type: "SET_CHAT_UPLOAD_START",
  payload: {
    file,
    chatId,
    fileName,
    fileId,
    fileSize,
  },
});

export default setChatUploadStartAction;
