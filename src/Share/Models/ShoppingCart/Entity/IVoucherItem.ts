export default interface IVoucherItem{
  Name: string,
  AdminComment: string,
  DiscountTypeId: number,
  UsePercentage: boolean,
  DiscountPercentage: number,
  DiscountAmount: number,
  MaximumDiscountAmount: number,
  StartDateUtc: string
  EndDateUtc: string
  RequiresCouponCode: boolean,
  CouponCode: string,
  IsCumulative: boolean,
  DiscountLimitationId: number,
  LimitationTimes: number,
  MaximumDiscountedQuantity: number,
  AppliedToSubCategories: boolean,
  DiscountType: number,
  DiscountLimitation: number,
  StatusId: number,
  DiscountStatus: number,
  CreatorUserId: number,
  CreatedOnUtc: string,
  UpdatedOnUtc: string,
  DefinitionSourceTypeId: number,
  DefinitionSourceType: number,
  Published: boolean,
  UsageTypeId: number,
  UsageType: number,
  StatusUpdatedOnUtc: string
  Id: number,
  EntityCacheKey: string
}
