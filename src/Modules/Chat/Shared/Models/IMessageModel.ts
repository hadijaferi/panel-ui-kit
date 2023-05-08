import { IChatUserModel } from "./IChatUserModel";
import { IAttachmentModel } from "./IAttachmentModel";
import { MessageEventTypes } from "../Enum/MessageEventTypes";
import { IChatModel } from "./IChatModel";

export interface IMessageModel {
  Id: number;

  ChatId: number;

  CreatedDate: Date;

  UpdatedDate: Date;

  Text: string;

  IsSeen: boolean;

  IsDeleted: boolean;

  IsEdited: boolean;

  EventType: MessageEventTypes;

  From: IChatUserModel | null;

  Chat: IChatModel | null;

  ReplyToMessage: IMessageModel | null;

  ForwardFromMessage: IMessageModel | null;

  Attachment: IAttachmentModel[];

  UnreadCount: number;

  UploadFileId: string;
}
