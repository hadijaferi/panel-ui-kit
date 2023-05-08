export interface IGetStoreListRequest {
  SearchValue: string;
  CategoryId: number;
  FloorId: number;
  MieterType: number;
  MieterId: number;
  CityId: number;
  Sort: number;
  DateFilter: IDateFilter;
  HasProduct: boolean;
  PageIndex: number;
  PageSize: number;
}
interface IDateFilter {
  From: string;
  To: String;
}
