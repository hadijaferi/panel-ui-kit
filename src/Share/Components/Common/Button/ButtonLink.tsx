import React from "react";
import Ripples from "react-ripples";
import Link from "next/link";
import Button, { IButtonProps } from "./Button";
import style from "./Button.module.sass";

interface IButtonLinkProps {
  href: string;
  as?: string;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

class ButtonLink extends Button<IButtonLinkProps> {
  public static defaultProps: IButtonProps = {
    type: "button",
    theme: "forButtonLink",
    rippleColor: "transparent",
  };

  onClick = (e: React.MouseEvent<Element, MouseEvent>): void => {
    if (this.props.onClick) e.preventDefault();
    if (!this.props?.isDisabled && this.props?.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    return (
      <Link
        href={this.props.href}
        {...(this.props.as ? { as: this.props.as } : {})}>
        <a className={this.generateClasses()}>
          <Ripples
            onClick={this.onClick}
            color={
              this.props.isDisabled ? "transparent" : this.state?.rippleColor
            }
            className={style.acRipple}
          />

          <div className={style.acContent}>{this.props.children}</div>
        </a>
      </Link>
    );
  }
}

export default ButtonLink;
