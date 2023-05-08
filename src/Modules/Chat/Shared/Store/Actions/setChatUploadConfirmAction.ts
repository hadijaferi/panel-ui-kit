import { Dispatch } from "redux";
import { AxiosResponse } from "axios";
import { ISetChatUploadConfirmAction } from "../../Models/Store/Actions/ISetChatUploadConfirmAction";
import { ISetChatUploadStartAction } from "../../Models/Store/Actions/ISetChatUploadStartAction";
import { ISetChatUploadSuccessAction } from "../../Models/Store/Actions/ISetChatUploadSuccessAction";
import { ISetChatUploadFailAction } from "../../Models/Store/Actions/ISetChatUploadFailAction";
import { ISetChatUploadProgressAction } from "../../Models/Store/Actions/ISetChatUploadProgressAction";
import { ISetChatUploadThumbnailAction } from "../../Models/Store/Actions/ISetChatUploadThumbnailAction";
import ChatUploadService from "../../Service/ChatUploadService";
import ChatApi from "../../Constants/ChatApi";
import setChatUploadProgressAction from "./setChatUploadProgressAction";
import { IAttachmentModel } from "../../Models/IAttachmentModel";
import setChatUploadSuccessAction from "./setChatUploadSuccessAction";
import setChatUploadFailAction from "./setChatUploadFailAction";

const setChatUploadConfirmAction = (fileId: string, file: File) => async (
  dispatch: Dispatch<
    | ISetChatUploadStartAction
    | ISetChatUploadSuccessAction
    | ISetChatUploadFailAction
    | ISetChatUploadProgressAction
    | ISetChatUploadThumbnailAction
    | ISetChatUploadConfirmAction
  >,
) => {
  dispatch({
    type: "SET_CHAT_UPLOAD_CONFIRM",
    payload: {
      fileId,
    },
  });

  const formData = new FormData();
  formData.append("media", file);

  ChatUploadService.post(ChatApi.CHAT_UPLOAD, formData, {
    onUploadProgress: progressEvent => {
      const { loaded, total } = progressEvent;
      const percent = Math.floor((loaded * 100) / total);
      if (percent < 100) {
        dispatch(setChatUploadProgressAction(fileId, percent));
      }
    },
  })
    .then(
      (
        response: AxiosResponse<{
          attachment: IAttachmentModel;
        }>,
      ) => {
        dispatch(
          setChatUploadSuccessAction(fileId, response.data.attachment.id),
        );
      },
    )
    .catch(reason => {
      dispatch(setChatUploadFailAction(fileId, reason.toString()));
    });
};

export default setChatUploadConfirmAction;
