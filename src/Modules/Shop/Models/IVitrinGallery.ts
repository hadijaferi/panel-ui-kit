import { IPicture } from "../../../infrastructure/Models/Entity/IPicture";

interface Items {
  Picture: IPicture;
  Description: string;
}
export interface IVitrinGallery {
  GalleryItems: Items[];
}
