import { IService } from "../../../infrastructure/Models/Entity/IService";
import { IPicture } from "../../../infrastructure/Models/Entity/IPicture";
import { ICategory } from "../../../infrastructure/Models/Entity/ICategory";
import { IMieter } from "../../../infrastructure/Models/Entity/IMieter";
import { IFeaturedSpecificationAttributes } from "../../../infrastructure/Models/Entity/IFeaturedSpecificationAttributes";
import { IBreadcrumb } from "../../../infrastructure/Models/Entity/IBreadcrumb";

export interface ISdpContext {
  Service: IService;
  ImagesService: IPicture[];
  Category: ICategory;
  Mieter: IMieter;
  Breadcrumb: IBreadcrumb[];
  Specification: IFeaturedSpecificationAttributes[];
}
