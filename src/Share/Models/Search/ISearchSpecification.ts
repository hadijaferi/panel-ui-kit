import { ISearchSpecificationAttribute } from "./ISearchSpecificationAttribute";

export interface ISearchSpecification {
  Attributes: ISearchSpecificationAttribute[];
  Name: string;
}
