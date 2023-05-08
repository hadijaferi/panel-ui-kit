import { ISetChatUploadRejectAction } from "../../Models/Store/Actions/ISetChatUploadRejectAction";

const setChatUploadRejectAction = (
  fileId: string,
): ISetChatUploadRejectAction => ({
  type: "SET_CHAT_UPLOAD_REJECT",
  payload: {
    fileId,
  },
});

export default setChatUploadRejectAction;
