import { Dispatch } from "redux";
import { nanoid } from "nanoid";
import { ISetChatUploadStartAction } from "../../Models/Store/Actions/ISetChatUploadStartAction";
import setChatUploadStartAction from "./setChatUploadStartAction";
import { ISetChatUploadSuccessAction } from "../../Models/Store/Actions/ISetChatUploadSuccessAction";
import { ISetChatUploadFailAction } from "../../Models/Store/Actions/ISetChatUploadFailAction";
import { ISetChatUploadProgressAction } from "../../Models/Store/Actions/ISetChatUploadProgressAction";
import ChatMedia from "../../Constants/CHAT_MEDIA";
import { ISetChatUploadThumbnailAction } from "../../Models/Store/Actions/ISetChatUploadThumbnailAction";
import setChatUploadThumbnailAction from "./setChatUploadThumbnailAction";

const uploadChatFileAction = (
  file: File,
  chatId: number,
  fileId = "",
  fileName = "",
) => async (
  dispatch: Dispatch<
    | ISetChatUploadStartAction
    | ISetChatUploadSuccessAction
    | ISetChatUploadFailAction
    | ISetChatUploadProgressAction
    | ISetChatUploadThumbnailAction
  >,
) => {
  if (!fileId) fileId = nanoid(8);

  const fileReader = new FileReader();
  fileReader.onload = ev => {
    if (ev.target?.result) {
      const dataUri = <string>ev.target.result;
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = ChatMedia.THUMBNAIL.WIDTH;
        canvas.height = (img.height * canvas.width) / img.width;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          dispatch(setChatUploadThumbnailAction(fileId, canvas.toDataURL()));
        }
      };

      img.src = dataUri;
    }
  };
  fileReader.readAsDataURL(file);

  dispatch(
    setChatUploadStartAction(
      file,
      chatId,
      fileName || file.name,
      fileId,
      file.size,
    ),
  );
};

export default uploadChatFileAction;
