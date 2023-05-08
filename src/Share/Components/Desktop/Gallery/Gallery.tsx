import React, { Component } from "react";
import { IPicture } from "../../../../infrastructure/Models/Entity/IPicture";
import style from "./Gallery.module.sass";
import ImageMagnifier from "../../Common/ImageMagnifier/ImageMagnifier";
import Image from "../../Common/Image/Image";

export interface IGalleryDesktopProps {
  images: IPicture[];
  showLength?: number;
}

export interface IGalleryDesktopState {
  zoomPicture: undefined | IPicture;
}

class GalleryDesktop extends Component<
  IGalleryDesktopProps,
  IGalleryDesktopState
> {
  state: IGalleryDesktopState = {
    zoomPicture: undefined,
  };

  componentDidMount() {
    this.initialGallery();
  }

  componentDidUpdate(prevProps: Readonly<IGalleryDesktopProps>) {
    if (
      JSON.stringify(prevProps.images) !== JSON.stringify(this.props.images)
    ) {
      this.initialGallery();
    }
  }

  initialGallery = () => {
    this.setState({
      zoomPicture: this.props.images?.[0],
    });
  };

  onHoverImage = (zoomPicture: IPicture) => {
    if (
      JSON.stringify(zoomPicture) !== JSON.stringify(this.state.zoomPicture)
    ) {
      this.setState({ zoomPicture });
    }
  };

  render() {
    return (
      <div className="d-flex">
        <div className={style.galleryItems}>
          <ul>
            {this.props.images
              .slice(0, this.props.showLength ?? 6)
              ?.map(image => (
                <li key={`${image.Id}${image.Url}`}>
                  <Image
                    onMouseEnter={() => this.onHoverImage(image)}
                    src={image.ThumbUrl}
                    width={100}
                    height={100}
                    className="cursorPointer"
                    alt={image.AltAttribute}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className={style.galleryPhoto}>
          {/* <img 
            src={this.state.zoomPicture?.Url} 
            alt={this.state.zoomPicture?.AltAttribute} 
           /> */}
          <ImageMagnifier src={this.state.zoomPicture?.Url || ""} />
        </div>
      </div>
    );
  }
}

export default GalleryDesktop;
