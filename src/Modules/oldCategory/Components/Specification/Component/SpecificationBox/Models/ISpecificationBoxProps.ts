import { ISearchSpecification } from "../../../../../../../Share/Models/Search/ISearchSpecification";

export interface ISpecificationBoxProps {
  specification: ISearchSpecification;
  specificationIndex: number;
  onSpecificationChange: (
    specificationIndex: number,
    attributeIndex: number,
  ) => void;
}
