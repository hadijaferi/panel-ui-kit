import React, { Component } from "react";
import styles from "./Desktop.module.sass";
import { ISpecificationProps } from "./Models/ISpecificationProps";
import SpecificationBoxDesktop from "./Component/SpecificationBox/Desktop";

class SearchSpecificationDesktop extends Component<ISpecificationProps> {
  render() {
    return (
      <div className={styles.acSearchSpecification}>
        {this.props.specifications.map((specification, specificationIndex) => (
          <SpecificationBoxDesktop
            specification={specification}
            specificationIndex={specificationIndex}
            onSpecificationChange={this.props.onSpecificationChange}
            key={specification.Name}
          />
        ))}
      </div>
    );
  }
}

export default SearchSpecificationDesktop;
