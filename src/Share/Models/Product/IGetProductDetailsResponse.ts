import { IProduct } from "../../../infrastructure/Models/Entity/IProduct";
import { IMieter } from "../../../infrastructure/Models/Entity/IMieter";
import { IPicture } from "../../../infrastructure/Models/Entity/IPicture";
import { IBrand } from "../../../infrastructure/Models/Entity/IBrand";
import IAttributeCombinationItem from "../../../infrastructure/Models/Entity/IAttributeCombinationItem";
import { IGuarantee } from "../../../infrastructure/Models/Entity/IGuarantee";
import { ICategory } from "../../../infrastructure/Models/Entity/ICategory";
import { IBreadcrumb } from "../../../infrastructure/Models/Entity/IBreadcrumb";
import { IFeaturedSpecificationAttributes } from "../../../infrastructure/Models/Entity/IFeaturedSpecificationAttributes";

export interface IGetProductDetailsResponse {
  AttributeCombinations: IAttributeCombinationItem[];
  Brand: IBrand;
  Breadcrumb: Array<IBreadcrumb>;
  Category: ICategory;
  DeliveryDates: Array<any>; // Not implemented
  FeaturedSpecificationAttributes: IFeaturedSpecificationAttributes[]; // Not implemented
  Guaranties: Array<IGuarantee>;
  Mieter: IMieter;
  Pictures: Array<IPicture>;
  Product: IProduct;
}
