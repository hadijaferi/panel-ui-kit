import { ICategory } from "../../../../../infrastructure/Models/Entity/ICategory";

export interface ISimilarCategoryResponse {
  Total: number;
  Categories: ICategory[];
}
