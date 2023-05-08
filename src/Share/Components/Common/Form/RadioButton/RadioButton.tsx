import React, { Component } from "react";
import style from "./RadioButton.module.sass";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined | boolean;
  formatter?: Function;
  title?: string;
  parentValue?: any;
  onCheck: (name: any, value: any) => void;
}

export default class RadioButton extends Component<InputProps> {
  getProps = () => {
    const props = { ...this.props };
    delete props.parentValue;
  };

  render() {
    return (
      <>
        <label className={style.label}>
          <input
            type="radio"
            onChange={() => {
              this.props.onCheck(this.props.name, this.props.value);
            }}
            checked={this.props.checked}
            name={this.props.name}
          />
          <span className={style.show} />
          {this.props?.title}
        </label>

        {this.props.error && true && <span>{this.props.error}</span>}
      </>
    );
  }
}
