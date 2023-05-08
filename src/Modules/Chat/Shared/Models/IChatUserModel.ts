import { IAttachmentModel } from "./IAttachmentModel";

export interface IChatUserModel {
  Id: number;

  UserName: string;

  FirstName: string;

  LastName: string;

  IsBot: boolean;

  ProfileImage: IAttachmentModel | null;

  LastSeenDate: Date;

  Mobile: string | null;
}
