import React, { Component } from "react";
import generateClassName from "../../../../../../Share/Helpers/Dom/generateClassName";
import styles from "./Desktop.module.sass";
import { ISpecificationBoxState } from "./Models/ISpecificationBoxState";
import { ISpecificationBoxProps } from "./Models/ISpecificationBoxProps";
import Collapse from "../../../../../../Share/Components/Common/Collapse/Collapse";
import Icon from "../../../../../../Share/Components/Common/Icon/Icon";
import Checkbox from "../../../../../../Share/Components/Common/Form/checkbox/Checkbox";

class SpecificationBoxDesktop extends Component<
  ISpecificationBoxProps,
  ISpecificationBoxState
> {
  state: ISpecificationBoxState = {
    isOpen: false,
  };

  cardClassName = () => {
    const className = [
      "card",
      "collapse",
      styles.acSpecificationBox,
      "m-b-16",
      this.state.isOpen && "active",
    ];
    return generateClassName(className);
  };

  headClassName = () => {
    const className = [
      styles.head,
      this.state.isOpen && styles.active,
      "d-flex flex-y-center flex-x-between",
    ];
    return generateClassName(className);
  };

  onToggleCollapse = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { specification } = this.props;
    return (
      <div className={this.cardClassName()}>
        <div className={this.headClassName()} onClick={this.onToggleCollapse}>
          <span>{specification.Name}</span>
          <Icon name="chevron-down" size="large" className="icon" />
        </div>
        <Collapse isOpen={this.state.isOpen}>
          <div className={styles.body}>
            <ul className={styles.listStep}>
              {specification?.Attributes?.map((attribute, attributeIndex) => (
                <li key={attribute.Name}>
                  <Checkbox
                    title={attribute.Name}
                    checked={attribute.IsChecked}
                    onChange={() =>
                      this.props.onSpecificationChange(
                        this.props.specificationIndex,
                        attributeIndex,
                      )
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default SpecificationBoxDesktop;
