import { ISetChatUploadThumbnailAction } from "../../Models/Store/Actions/ISetChatUploadThumbnailAction";

const setChatUploadThumbnailAction = (
  fileId: string,
  thumbnail: string,
): ISetChatUploadThumbnailAction => ({
  type: "SET_CHAT_THUMBNAIL_CONFIRM",
  payload: {
    fileId,
    thumbnail,
  },
});

export default setChatUploadThumbnailAction;
