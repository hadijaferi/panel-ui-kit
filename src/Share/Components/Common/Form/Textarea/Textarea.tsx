import React, { Component } from "react";
import generateClassName from "../../../../Helpers/Dom/generateClassName";
import Icon from "../../Icon/Icon";
import style from "../Input/Input.module.sass";
import { iconTypes } from "../../Icon/IIconTypes.ts";

interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string | undefined | boolean;
  formatter?: Function;
  title?: string;
  suffix?: string;
  prefix?: string;
  icon?: iconTypes;
}

interface ITextareaState {
  onFocus: boolean;
}

export default class Textarea extends Component<
  ITextareaProps,
  ITextareaState
> {
  state: ITextareaState = {
    onFocus: false,
  };

  hasValue = () => {
    return !!String(this.props.value).length;
  };

  render() {
    return (
      <>
        <div
          className={generateClassName([
            style.inputWrapper,
            style.textareaWrapper,
            this.hasValue() && style.active,
            this.props.prefix && style.active,
            this.state.onFocus && style.focused,
            this.props.className,
            this.props.icon && style.hasIcon,
            this.props.error && style.error,
          ])}>
          {this.props.icon && (
            <Icon
              className={style.icon}
              name={this.props.icon}
              size="largest"
            />
          )}
          {this.props.prefix && (
            <span className={style.prefix}>{this.props.prefix}</span>
          )}
          <textarea
            {...this.props}
            onFocus={e => {
              this.setState({ onFocus: true });
              this?.props?.onFocus?.(e);
            }}
            onBlur={e => {
              this.setState({ onFocus: false });
              this?.props?.onBlur?.(e);
            }}
          />
          <label className={generateClassName([style.title])}>
            {this.props.title || ""}
          </label>
          {this.props.suffix && (
            <span className={style.suffix}>{this.props.suffix}</span>
          )}
        </div>
        <span className={style.errorLabel}>
          {this.props.error && true && this.props.error}
        </span>
      </>
    );
  }
}
