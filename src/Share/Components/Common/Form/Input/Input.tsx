import React, { Component } from "react";
import style from "./Input.module.sass";
import generateClassName from "../../../../Helpers/Dom/generateClassName";
import Icon from "../../Icon/Icon";
import { iconTypes } from "../../Icon/IIconTypes.ts";
import Button from "../../Button/Button";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined | boolean;
  formatter?: Function;
  title?: string;
  suffix?: any;
  prefix?: string;
  icon?: iconTypes;
}

interface IInputState {
  onFocus: boolean;
  showPass: boolean;
}

export default class Input extends Component<InputProps, IInputState> {
  state: IInputState = {





    onFocus: false,
    showPass: false,
  };

  validationJustNumber = {
    pattern: "[0-9]*",
    onInput: (e: any) => {
      if (e.target.value?.length > `${this.props.maxLength}`) {
        e.target.value = e.target.value.slice(0, this?.props?.maxLength);
      }
    },
    onKeyPress: () => {
      return "/[d]/.test(String.fromCharCode(event.keyCode))";
    },
  };

  validationPhone = {
    pattern: "[0-9]*",
    onInput: (e: any) => {
      e.target.value = String(e.target.value.replace(/[^0-9]/g, ""));
    },
  };

  hasValue = () => {
    if (typeof this.props.value === "undefined" || !this.props.value) {
      return false;
    }
    return !!String(this.props.value).length;
  };

  getType = () => {
    if (this.props.type === "password") {
      return this.state.showPass ? "text" : "password";
    }
    return this.props.type;
  };

  togglePassword = () => {
    const { showPass } = this.state;
    this.setState({ showPass: !showPass });
  };

  render() {
    return (
      <>
        <div
          className={generateClassName([
            style.inputWrapper,
            this.hasValue() && style.active,
            this.props.prefix && style.active,
            this.state.onFocus && style.focused,
            this.props.className,
            this.props.icon && style.hasIcon,
            this.props.error && style.error,
          ])}>
          {this.props.prefix && (
            <span className={style.prefix}>{this.props.prefix}</span>
          )}
          {this.props.icon && (
            <Icon className={style.icon} name={this.props.icon} />
          )}
          <input
            {...(this?.props?.type === "number" && {
              ...this.validationJustNumber,
            })}
            {...(this?.props?.type === "tel" && {
              ...this.validationPhone,
            })}
            onFocus={e => {
              this.setState({ onFocus: true });
              this?.props?.onFocus?.(e);
            }}
            onBlur={e => {
              this.setState({ onFocus: false });
              this?.props?.onBlur?.(e);
            }}
            {...this.props}
            type={this.getType()}
          />
          <label className={generateClassName([style.title])}>
            {this.props.title || ""}
          </label>
          {this.props.suffix && (
            <span className={style.suffix}>{this.props.suffix}</span>
          )}
          {this.props.type === "password" && (
            <Button
              className={style.passwordBtn}
              theme="iconic"
              size="large"
              onClick={this.togglePassword}>
              {this.state.showPass ? (
                <Icon size="large" name="eye" />
              ) : (
                <Icon size="large" name="eye-off" />
              )}
            </Button>
          )}
        </div>
        <span className={style.errorLabel}>
          {this.props.error && true && this.props.error}
        </span>
      </>
    );
  }
}
