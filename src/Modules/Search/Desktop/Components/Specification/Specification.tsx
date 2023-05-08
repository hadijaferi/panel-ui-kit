import React from "react";
import useSearchSpecificationList, {
  IContainerProps,
} from "../../../Hooks/useSearchSpecificationList";
import SpecificationBoxDesktop from "../SpecificationBox/Desktop";

const SearchSpecificationDesktop = (props: IContainerProps) => {
  const hookSpecification = useSearchSpecificationList(props);
  if (props.specifications.length === 0) {
    return null;
  }
  return (
    <div className="m-b-16">
      {hookSpecification.specifications.map(
        (specification, specificationIndex) => (
          <SpecificationBoxDesktop
            specification={specification}
            specificationIndex={specificationIndex}
            onSpecificationChange={hookSpecification.onSpecificationChange}
            key={specification.Name}
          />
        ),
      )}
    </div>
  );
};

export default SearchSpecificationDesktop;
