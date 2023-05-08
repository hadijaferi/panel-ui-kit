import { ISetChatUploadSuccessAction } from "../../Models/Store/Actions/ISetChatUploadSuccessAction";

const setChatUploadSuccessAction = (
  fileId: string,
  mediaId: number,
): ISetChatUploadSuccessAction => ({
  type: "SET_CHAT_UPLOAD_SUCCESS",
  payload: {
    fileId,
    mediaId,
  },
});

export default setChatUploadSuccessAction;
