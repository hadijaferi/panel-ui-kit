import React, { Component } from "react";
import style from "./Button.module.sass";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import LoadingSpin from "../LoadingSpin/LoadingSpin";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";

type buttonType = "button" | "submit" | "reset";
type buttonTheme = "default" | "bordered" | "text" | "iconic" | "forButtonLink";
type buttonColor = "red" | "green" | "blue" | "yellow" | "gray" | "lightGray";
type buttonSize = "small" | "medium" | "large";
type radiusSize = "radius8" | "radius16";

export interface IButtonProps extends IBaseComponentProps {
  type?: buttonType;
  theme: buttonTheme;
  color?: buttonColor;
  size?: buttonSize;
  wrap?: boolean;
  radius?: radiusSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  // onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: () => void;
  rippleColor?: string | "transparent";
  refCallBack?: (ref: any | undefined) => void;
}

interface IButtonStates {
  rippleColor: string;
}

/* const detectRippleColor = (props: IButtonProps): string => {
  if (!props.rippleColor) {
    switch (props.theme) {
      case "bordered":
        switch (props.color) {
          case "red":
            return "rgba(229,0,25,0.12)";
          case "green":
            return "rgba(21,182,142,0.12)";
          case "blue":
            return "rgba(36,193,242,0.12)";
          case "yellow":
            return "rgb(254,175,38,0.12)";
          default:
          case "gray":
            return "rgb(47,47,47,0.12)";
        }
        break;
      case "text":
        switch (props.color) {
          case "red":
            return "rgba(229,0,25,0.12)";
          case "green":
            return "rgba(21,182,142,0.12)";
          case "blue":
            return "rgba(36,193,242,0.12)";
          case "yellow":
            return "rgba(254,175,38,0.12)";
          default:
          case "gray":
            return "rgb(47,47,47,0.12)";
        }
        break;
      default:
      case "default":
        switch (props.color) {
          default:
          case "lightGray":
            return "rgba(0,0,0,0.12)";
        }
        return "rgba(255,255,255,0.12)";
    }
    return "rgba(0,0,0,0.12)";
  }

  return String(props?.rippleColor);
}; */

class Button<P = unknown> extends Component<
  P & IButtonProps & unknown,
  IButtonStates
> {
  public static defaultProps: IButtonProps = {
    type: "button",
    theme: "default",
    color: "gray",
    radius: "radius8",
  };

  // public state: IButtonStates = {
  //   rippleColor: detectRippleColor(this.props),
  // };

  componentDidMount = (): void => {
    if (this.props.refCallBack) {
      this.props.refCallBack(this);
    }
  };

  /* componentDidUpdate = (prevProps: Readonly<P & IButtonProps>): void => {
    if (prevProps.rippleColor !== this.props.rippleColor) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        rippleColor: detectRippleColor(this.props),
      });
    }
  }; */

  /*  onClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if (
      !(this.props?.isDisabled || this.props.isLoading) &&
      this.props?.onClick
    ) {
      this.props.onClick(e);
    }
  }; */

  generateClasses = (): string => {
    return generateClassName([
      style.acButton,
      this.props.className,
      this.props.isDisabled && style.isDisabled,
      style[`acTheme-${this.props.theme}`],
      style[`acColor-${this.props.color}`],
      style[`acSize-${this.props.size}`],
      style[`acRadius-${this.props.radius}`],
      this.props.isLoading && style.isLoading,
    ]);
  };

  render() {
    return (
      <button
        onClick={this.props.onClick}
        type={this.props.type}
        disabled={!!this.props?.isDisabled}
        className={this.generateClasses()}>
        {this.props.isLoading && (
          <div className={style.loadingParent}>
            <LoadingSpin theme="white" className={style.loading} />
          </div>
        )}
        {/*      <Ripples
 
          color={
            this.props.isDisabled ? "transparent" : this.state?.rippleColor
          }
          className={style.acRipple}
        /> */}

        <div
          className={generateClassName([
            style.acContent,
            "d-flex flex-over-center",
            !!this.props.wrap && "flex-wrap",
          ])}>
          {this.props.children}
        </div>
      </button>
    );
  }
}

export default Button;
