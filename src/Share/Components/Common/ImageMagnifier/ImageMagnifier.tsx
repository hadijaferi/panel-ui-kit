import React, {Component, createRef, RefObject} from "react";
import {IBaseComponentProps} from "../../../../infrastructure/Models/IBaseComponent";
import style from "./ImageMagnifier.module.sass";

interface IImageMagnifierState {
  backgroundPosition: string | "center";
}

interface IImageMagnifierProps extends IBaseComponentProps {
  src: string;
}

class ImageMagnifier extends Component<IImageMagnifierProps,
    IImageMagnifierState> {
  state: IImageMagnifierState = {
    backgroundPosition: "center",
  };

  imageRef: RefObject<any> = createRef();

  onMouseMove = (e: any) => {
    let offsetX;
    let offsetY;

    e.nativeEvent.offsetX
        ? (offsetX = e.nativeEvent.offsetX)
        : (offsetX = e.pageX);
    e.nativeEvent.offsetY
        ? (offsetY = e.nativeEvent.offsetY)
        : (offsetX = e.pageX);
    const x = (offsetX / this.imageRef?.current.offsetWidth) * 100;
    const y = (offsetY / this.imageRef?.current.offsetHeight) * 100;

    this.setState({
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  render() {
    return (
        <figure
            id="figure"
            ref={this.imageRef}
            className={style.acImageMagnifier}
            onMouseMove={this.onMouseMove}
            style={{
              backgroundImage: `url(${this.props.src})`,
              backgroundPosition: this.state.backgroundPosition,
            }}>
          <img src={this.props.src}/>
        </figure>
    );
  }
}

export default ImageMagnifier;
