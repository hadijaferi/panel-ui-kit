import { ISearchSpecification } from "../../../../../Share/Models/Search/ISearchSpecification";

export interface ISpecificationProps {
  specifications: ISearchSpecification[];
  onSpecificationChange: (
    specificationIndex: number,
    attributeIndex: number,
  ) => void;
}
