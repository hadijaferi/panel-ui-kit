import { ISetChatUploadCancelAction } from "../../Models/Store/Actions/ISetChatUploadCancelAction";

const setChatUploadCancelAction = (
  fileId: string,
): ISetChatUploadCancelAction => ({
  type: "SET_CHAT_UPLOAD_CANCEL",
  payload: {
    fileId,
  },
});

export default setChatUploadCancelAction;
