import { MediaTypes } from "../Enum/MediaTypes";

export interface IAttachmentModel {
  id: number;

  FileName: string;

  FileType: string;

  FileUrl: string;

  FileThumbnailUrl: string;

  FileMiniThumbnailUrl: string;

  FileSize: number;

  Width: number;

  Height: number;

  Type: MediaTypes;

  UserId: number;
}
