import { IPicture } from "./IPicture";

export interface IProduct {
  BonusPoints: number;
  CustomerRate: number;
  CustomersOffersCount: number;
  DeliveryDateId: number;
  Description: string;
  DisplayStockAvailability: boolean;
  DisplayStockQuantity: boolean;
  EnglishName: string;
  FaqCount: number;
  Id: number;
  IsInCustomerWishlist: boolean;
  ManageInventoryMethod: number;
  ManageInventoryMethodId: number;
  Name: string;
  OldPrice: number;
  Price: number;
  ReviewCount: number;
  SalesCount: number;
  SeoName: string;
  Sku: string;
  StockAvailabilityMessage: string;
  StockQuantity: number;
  Picture: IPicture;
  Rate: number;
  FreeShipping: boolean;
  Type: string;
  Mieter: {
    Id: number;
    Name: string;
    CityId: string;
    CityName: string;
    Rate: number;
    SeoName: string;
    StoreName: string;
  };
}
