import { ISetChatUploadFailAction } from "../../Models/Store/Actions/ISetChatUploadFailAction";

const setChatUploadFailAction = (
  fileId: string,
  error: string,
): ISetChatUploadFailAction => ({
  type: "SET_CHAT_UPLOAD_FAILED",
  payload: {
    fileId,
    error,
  },
});

export default setChatUploadFailAction;
