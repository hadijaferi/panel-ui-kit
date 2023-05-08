export interface IChatUpload {
  error: string;
  file: File;
  fileName: string;
  fileId: string;
  fileSize: number;
  progress: number;
  thumbnail: string;
  mediaId: number;
  chatId: number;
  confirmed: boolean;
}
