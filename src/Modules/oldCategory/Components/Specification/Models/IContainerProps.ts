import { ISearchSpecification } from "../../../../../Share/Models/Search/ISearchSpecification";

export interface IContainerProps {
  onSpecificationChange: (specification: ISearchSpecification[]) => void;
  specifications: ISearchSpecification[];
}
