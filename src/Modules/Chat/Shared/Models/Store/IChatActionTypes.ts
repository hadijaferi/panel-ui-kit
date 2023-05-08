import { ISetChatListAction } from "./Actions/ISetChatListAction";
import { ISetCurrentChatAction } from "./Actions/ISetCurrentChatAction";
import { ISetChatUserOnlineAction } from "./Actions/ISetChatUserOnlineAction";
import { ISetChatUserTypingAction } from "./Actions/ISetChatUserTypingAction";
import { ISetChatBlockAction } from "./Actions/ISetChatBlockAction";
import { ISetChatUnBlockAction } from "./Actions/ISetChatUnBlockAction";
import { ISetChatMessageListAction } from "./Actions/ISetChatMessageListAction";
import { IAddChatMessageAction } from "./Actions/IAddChatMessageAction";
import { ISeenMessageAction } from "./Actions/ISeenMessageAction";
import { ISetChatUserOfflineAction } from "./Actions/ISetChatUserOfflineAction";
import { ISetChatUserStopTypingAction } from "./Actions/ISetChatUserStopTypingAction";
import { ISetChatClientInfoAction } from "./Actions/ISetChatClientInfoAction";
import { ISetChatUploadStartAction } from "./Actions/ISetChatUploadStartAction";
import { ISetChatUploadProgressAction } from "./Actions/ISetChatUploadProgressAction";
import { ISetChatUploadSuccessAction } from "./Actions/ISetChatUploadSuccessAction";
import { ISetChatUploadFailAction } from "./Actions/ISetChatUploadFailAction";
import { ISetChatUploadConfirmAction } from "./Actions/ISetChatUploadConfirmAction";
import { ISetChatUploadRejectAction } from "./Actions/ISetChatUploadRejectAction";
import { ISetChatUploadThumbnailAction } from "./Actions/ISetChatUploadThumbnailAction";
import { IDeleteChatMessageAction } from "./Actions/IDeleteChatMessageAction";
import { ISetChatUploadCancelAction } from "./Actions/ISetChatUploadCancelAction";

export type IChatActionTypes =
  | ISetChatClientInfoAction
  | ISeenMessageAction
  | ISetChatListAction
  | ISetCurrentChatAction
  | ISetChatUserOfflineAction
  | ISetChatUserOnlineAction
  | ISetChatUserTypingAction
  | ISetChatUserStopTypingAction
  | ISetChatBlockAction
  | ISetChatUnBlockAction
  | ISetChatMessageListAction
  | IAddChatMessageAction
  | ISetChatUploadStartAction
  | ISetChatUploadProgressAction
  | ISetChatUploadSuccessAction
  | ISetChatUploadFailAction
  | ISetChatUploadConfirmAction
  | ISetChatUploadRejectAction
  | ISetChatUploadThumbnailAction
  | IDeleteChatMessageAction
  | ISetChatUploadCancelAction;
