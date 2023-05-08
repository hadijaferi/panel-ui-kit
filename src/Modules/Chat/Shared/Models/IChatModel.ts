import { ChatTypes } from "../Enum/ChatTypes";
import { IMessageModel } from "./IMessageModel";
import { IAttachmentModel } from "./IAttachmentModel";
import { IChatUserModel } from "./IChatUserModel";

export interface IChatModel {
  Id: number;

  Title: string;

  Type: ChatTypes;

  CreatedDate: Date;

  UpdatedDate: Date;

  IsArchived: boolean;

  Messages: IMessageModel[];

  ProfileImage: IAttachmentModel | null;

  Users: IChatUserModel[];
}
