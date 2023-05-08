export interface ISetChatUploadThumbnailAction {
  type: "SET_CHAT_THUMBNAIL_CONFIRM";
  payload: {
    fileId: string;
    thumbnail: string;
  };
}
