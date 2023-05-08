export interface IContainerProps {
  onSpecificationChange: (specification: ISearchSpecification[]) => void;
  specifications: ISearchSpecification[];
}

export interface ISearchSpecification {
  Attributes: ISearchSpecificationAttribute[];
  Name: string;
}

export interface ISearchSpecificationAttribute {
  IsChecked: boolean;
  Name: string;
}

export interface ISpecificationProps {
  specifications: ISearchSpecification[];
  onSpecificationChange: (
    specificationIndex: number,
    attributeIndex: number,
  ) => void;
}

const useSearchSpecificationList = (
  props: IContainerProps,
): ISpecificationProps => {
  const onSpecificationChange = (
    specificationIndex: number,
    attributeIndex: number,
  ) => {
    props.specifications[specificationIndex].Attributes[
      attributeIndex
    ].IsChecked = !props.specifications[specificationIndex].Attributes[
      attributeIndex
    ].IsChecked;
    props.onSpecificationChange(props.specifications);
  };

  return {
    specifications: props.specifications,
    onSpecificationChange,
  };
};

export default useSearchSpecificationList;
