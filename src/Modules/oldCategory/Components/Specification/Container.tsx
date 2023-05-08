import React, { Component } from "react";
import dynamic from "next/dynamic";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";
import { IContainerProps } from "./Models/IContainerProps";
import { ISpecificationProps } from "./Models/ISpecificationProps";

// import dynamic pages
const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

class SearchSpecificationContainer extends Component<IContainerProps> {
  onSpecificationChange = (
    specificationIndex: number,
    attributeIndex: number,
  ) => {
    const { specifications } = this.props;
    specifications[specificationIndex].Attributes[
      attributeIndex
    ].IsChecked = !specifications[specificationIndex].Attributes[attributeIndex]
      .IsChecked;
    this.props.onSpecificationChange(specifications);
  };

  returnProps = (): ISpecificationProps => {
    return {
      specifications: this.props.specifications,
      onSpecificationChange: this.onSpecificationChange,
    };
  };

  render() {
    return (
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(Sample: any) => <Sample {...this.returnProps()} />}
      </BaseResponsive>
    );
  }
}

export default SearchSpecificationContainer;
