import { IProduct } from "../../../infrastructure/Models/Entity/IProduct";
import { INameItemsData } from "./INameItemsData";
import { IHomePageCategory } from "./HomePageCategories/IHomePageCategory";
import { IMieter } from "../../../infrastructure/Models/Entity/IMieter";

export type IHomePageContextData = INameItemsData<Partial<IProduct>[]>;

export interface IHomePageContext {
  SelectedProducts: IHomePageContextData;
  SelectedServices: IHomePageContextData;
  RecommendedServices: IHomePageContextData;
  RecommendedProducts: IHomePageContextData;
  RecentlyAddedProducts: IHomePageContextData;
  RecentlyAddedServices: IHomePageContextData;
  ProductsCategories: IHomePageCategory[];
  ServicesCategories: IHomePageCategory[];
  Mieters: IMieter[];
}
