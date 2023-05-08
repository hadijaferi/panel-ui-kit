import { ISetChatUploadProgressAction } from "../../Models/Store/Actions/ISetChatUploadProgressAction";

const setChatUploadProgressAction = (
  fileId: string,
  progress: number,
): ISetChatUploadProgressAction => ({
  type: "SET_CHAT_UPLOAD_PROGRESS",
  payload: {
    progress,
    fileId,
  },
});

export default setChatUploadProgressAction;
