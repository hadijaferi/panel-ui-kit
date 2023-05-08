import React, { Component } from "react";
import style from "./Checkbox.module.sass";
import Icon from "../../Icon/Icon";
import generateClassName from "../../../../Helpers/Dom/generateClassName";

type ICheckboxTheme = "slide";

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: ICheckboxTheme;
}

export default class Checkbox extends Component<ICheckboxProps> {
  render() {
    return (
      <label
        className={generateClassName([
          style.label,
          this.props.theme === "slide" && style.slide,
          this.props.className,
        ])}>
        <input {...this.props} type="checkbox" />
        <span
          className={generateClassName([
            style.show,
            this.props.title && "m-l-8",
          ])}>
          <Icon name="check" />
        </span>
        {this.props.title}
      </label>
    );
  }
}
