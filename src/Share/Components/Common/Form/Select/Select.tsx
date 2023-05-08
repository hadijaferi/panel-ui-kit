import React, { Component } from "react";
import { Props } from "react-select/base";
import { Props as SelectProps } from "react-select";
import dynamic from "next/dynamic";

interface ISelectProps extends SelectProps, Props {
  onChange: any;
  onBlur?: any;
  isMulti?: any;
}

const SelectNoSSR: any = dynamic(() => import("react-select"), {
  ssr: false,
});

const customStyles = {
  control: (base: any) => ({
    ...base,
    height: 54,
    background: "transparent",
    width: "100%",
    border: "solid 1px transparent",
    outline: "none",
    borderRadius: 16,
  }),
  container: (provided: any) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    position: "relative",
    background: "transparent",
    overflow: "visible",
    borderRadius: 16,
    border: "solid 1px #cbcbcb",
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    flexWrap: "nowrap",
    marginRight: 10,
  }),
  menu: (provided: any) => ({
    ...provided,
    zIndex: 1000,
    padding: "4px 8px",
    borderRadius: 16,
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  input: (provided: any) => ({
    ...provided,
    textAlign: "right",
    overflow: "hidden",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    padding: "2px 8px 0",
    height: 28,
    borderRadius: 30,
    background: "#f2f2f2",
    transform: "none",
    top: "auto",
    fontSize: "1rem",
    whiteSpace: "nowrap",
    minWidth: "auto",
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    borderRadius: 20,
    height: 20,
    width: 20,
    position: "relative",
    top: 2,
    left: -4,
    cursor: "pointer",
  }),
};
export default class Select extends Component<ISelectProps> {
  handleChange = (value: any) => {
    if (this.props.onChange) {
      if (this?.props?.name) {
        this?.props?.onChange(this.props.name, value);
      } else {
        this?.props?.onChange(value);
      }
    }
  };

  handleBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur(this.props.name, true);
    }
  };

  render() {
    return (
      <SelectNoSSR
        {...this.props}
        noOptionsMessage="بدون آیتم"
        placeholder="انتخاب کنید"
        styles={customStyles}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}
