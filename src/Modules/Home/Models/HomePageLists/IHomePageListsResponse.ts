import { IProduct } from "../../../../infrastructure/Models/Entity/IProduct";

interface IHomePageListsData {
  HomepageProductTypeId: number;
  HomepageProductType: string;
  ProductCards: Partial<IProduct>[]; // IService & IProduct has the same type, So I choose one o them
}

export type IHomePageListsResponse = IHomePageListsData[];
