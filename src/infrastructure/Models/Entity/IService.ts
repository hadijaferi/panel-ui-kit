import { IPicture } from "./IPicture";

export interface IService {
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
  PriceRangeFrom: number;
  PriceRangeTo: number;
  SalesCount: number;
  SeoName: string;
  Sku: string;
  Picture: IPicture;
  StockAvailabilityMessage: string;
  StockQuantity: number;
  Rate: number;
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
