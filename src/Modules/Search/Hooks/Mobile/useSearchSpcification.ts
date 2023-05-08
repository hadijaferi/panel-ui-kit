import { useState } from "react";
import { ISearchSpecification } from "../../../../Share/Models/Search/ISearchSpecification";

export interface ISearchSpecificationMobileProps {
  specifications: ISearchSpecification[];
  resetType: () => void;
  onSpecificationsSave: (newSpe: ISearchSpecification[]) => void;
}

interface IHookProps {
  specifications: ISearchSpecification[];
  onClose: () => void;
  onSave: () => void;
  isActiveFilter: () => boolean;
  onSpecificationSelect: (speIndex: number, attIndex: number) => void;
}

const useSearchSpecificationMobile = (
  props: ISearchSpecificationMobileProps,
): IHookProps => {
  const [specifications, setSpecification] = useState(
    JSON.parse(JSON.stringify(props.specifications)),
  );

  const onClose = () => {
    props.resetType();
    setSpecification(JSON.parse(JSON.stringify(props.specifications)));
  };

  const onSave = () => {
    props.onSpecificationsSave(JSON.parse(JSON.stringify(specifications)));
  };

  const isActiveFilter = (): boolean => {
    return (
      JSON.stringify(specifications) === JSON.stringify(props.specifications)
    );
  };

  const onSpecificationSelect = (speIndex: number, attIndex: number) => {
    const checked = !specifications[speIndex].Attributes[attIndex].IsChecked;
    specifications[speIndex].Attributes[attIndex].IsChecked = checked;
    setSpecification([...specifications]);
  };

  return {
    specifications,
    onSpecificationSelect,
    onClose,
    isActiveFilter,
    onSave,
  };
};

export default useSearchSpecificationMobile;
