import { IPagination } from "../../../infrastructure/Models/IPagination";
import { IBrand } from "../../../infrastructure/Models/Entity/IBrand";
import { IMieter } from "../../../infrastructure/Models/Entity/IMieter";

export interface ISearchSiteProduct {
  Id: number;
  Name: string;
  ProductName?: string;
}

export interface ISearchSiteResponse extends IPagination {
  Brands: IBrand[];
  Mieters: Partial<IMieter>[];
  Products: {
    Products: ISearchSiteProduct[];
    Categories: ISearchSiteProduct[];
  };
  Services: {
    Products: ISearchSiteProduct[];
    Categories: ISearchSiteProduct[];
  };
}
