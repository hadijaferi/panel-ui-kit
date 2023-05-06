import React, {useEffect, useRef} from "react";
import style from "./Button.module.sass";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import LoadingSpin from "../LoadingSpin/LoadingSpin";

type buttonType = "button" | "submit" | "reset";
type buttonTheme = "default" | "bordered" | "text" | "iconic" | "forButtonLink";
type buttonColor = "red" | "green" | "blue" | "yellow" | "gray" | "lightGray";
type buttonSize = "small" | "medium" | "large";
type radiusSize = "radius8" | "radius16";

export interface IButtonProps {
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
  className?: string
  children?: React.ReactElement
}


interface IButtonStates {
  rippleColor: string;
}

const  Button = (props:IButtonProps)=> {
  // public static defaultProps: IButtonProps = {
  //   type: "button",
  //   theme: "default",
  //   color: "gray",
  //   radius: "radius8",
  // };
 const ref= useRef()

  useEffect(()=>{
    if (props.refCallBack) {
          props.refCallBack(ref);
        }
  },[])



  /* componentDidUpdate = (prevProps: Readonly<P & IButtonProps>): void => {
    if (prevProps.rippleColor !== .props.rippleColor) {
      // eslint-disable-next-line react/no-did-update-set-state
      .setState({
        rippleColor: detectRippleColor(.props),
      });
    }
  }; */

  /*  onClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if (
      !(.props?.isDisabled || .props.isLoading) &&
      .props?.onClick
    ) {
      .props.onClick(e);
    }
  }; */

 const generateClasses = (): string => {
    return generateClassName([
      style.acButton,
      props.className,
      props.isDisabled && style.isDisabled,
      style[`acTheme-${props.theme}`],
      style[`acColor-${props.color}`],
      style[`acSize-${props.size}`],
      style[`acRadius-${props.radius}`],
      props.isLoading && style.isLoading,
    ]);
  };

    return (
      <button
        onClick={props.onClick}
        type={props.type}
        disabled={!!props?.isDisabled}
        className={generateClasses()}>
        {props.isLoading && (
          <div className={style.loadingParent}>
            <LoadingSpin theme="white" className={style.loading} />
          </div>
        )}
        {/*      <Ripples

          color={
            .props.isDisabled ? "transparent" : .state?.rippleColor
          }
          className={style.acRipple}
        /> */}

        <div
          className={generateClassName([
            style.acContent,
            "d-flex flex-over-center",
            !!props.wrap && "flex-wrap",
          ])}>
          {props.children}
        </div>
      </button>
    );

}

export default Button;
