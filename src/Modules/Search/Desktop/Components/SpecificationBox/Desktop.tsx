import React, { useState } from "react";
import styles from "./Desktop.module.sass";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import Checkbox from "../../../../../Share/Components/Common/Form/checkbox/Checkbox";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import Collapse from "../../../../../Share/Components/Common/Collapse/Collapse";
import { ISearchSpecification } from "../../../Hooks/useSearchSpecificationList";

export interface ISpecificationBoxProps {
  specification: ISearchSpecification;
  specificationIndex: number;
  onSpecificationChange: (
    specificationIndex: number,
    attributeIndex: number,
  ) => void;
}

const SpecificationBoxDesktop = (props: ISpecificationBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardClassName = () => {
    const className = [
      "card",
      "collapse",
      styles.acSpecificationBox,
      "m-b-16",
      isOpen && "active",
    ];
    return generateClassName(className);
  };

  const headClassName = () => {
    const className = [
      styles.head,
      isOpen && styles.active,
      "d-flex flex-y-center flex-x-between",
    ];
    return generateClassName(className);
  };

  const onToggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cardClassName()}>
      <div className={headClassName()} onClick={onToggleCollapse}>
        <span>{props.specification.Name}</span>
        <Icon name="chevron-down" size="large" className="icon" />
      </div>
      <Collapse isOpen={isOpen}>
        <div className={styles.body}>
          <ul className={styles.listStep}>
            {props.specification?.Attributes?.map(
              (attribute, attributeIndex) => (
                <li key={attribute.Name}>
                  <Checkbox
                    title={attribute.Name}
                    checked={attribute.IsChecked}
                    onChange={() =>
                      props.onSpecificationChange(
                        props.specificationIndex,
                        attributeIndex,
                      )
                    }
                  />
                </li>
              ),
            )}
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default SpecificationBoxDesktop;
