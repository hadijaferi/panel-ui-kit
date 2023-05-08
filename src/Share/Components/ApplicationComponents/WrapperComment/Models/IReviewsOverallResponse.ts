import { IRate } from "../../../../../infrastructure/Models/Entity/IRate";

export interface IReviewsOverallResponse {
  Rate: number;
  Rates: IRate[];
  TotalItems: number;
}
