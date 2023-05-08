import { IService } from "../../../infrastructure/Models/Entity/IService";
import { IPicture } from "../../../infrastructure/Models/Entity/IPicture";
import { ICategory } from "../../../infrastructure/Models/Entity/ICategory";
import { IBrand } from "../../../infrastructure/Models/Entity/IBrand";
import { IMieter } from "../../../infrastructure/Models/Entity/IMieter";
import { IFeaturedSpecificationAttributes } from "../../../infrastructure/Models/Entity/IFeaturedSpecificationAttributes";
import { IBreadcrumb } from "../../../infrastructure/Models/Entity/IBreadcrumb";

export interface IGetServiceDetailsResponse {
  Product: IService;
  Pictures: IPicture[];
  Category: ICategory;
  Brand: IBrand;
  Mieter: IMieter;
  Breadcrumb: IBreadcrumb[];
  FeaturedSpecificationAttributes: IFeaturedSpecificationAttributes[];
}
