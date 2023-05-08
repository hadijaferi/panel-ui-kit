import { ICategory } from "../../../../infrastructure/Models/Entity/ICategory";
import { ICity } from "../../../../infrastructure/Models/Entity/ICity";
import { IStore } from "./IStore";
import { IPagination } from "../../../../infrastructure/Models/IPagination";

export interface IGetStoreListResponse {
  Mieters: IStore[];
  Cities: ICity[];
  Categories: ICategory[];
  Pagination: IPagination;
}
