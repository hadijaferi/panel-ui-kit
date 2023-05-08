import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { ModalDefault } from "../../../../../Share/Config/Modal/ModalDefault";
import style from "./GalleryModal.module.sass";
import Image from "../../../../../Share/Components/Common/Image/Image";
import { IVitrinGalleryProps } from "../../../Models/IVitrinGalleryProps";

const GalleryModal = (props: IVitrinGalleryProps) => {
  const [isOpen, toggleGallery] = useState(false);
  const [SwiperActiveIndex, seGalleryActiveItem] = useState(0);
  const [GalleryItems, setGalleryItems] = useState(
    props?.data?.GalleryItems ?? [],
  );
  const fullImg = GalleryItems?.[SwiperActiveIndex ?? 0]?.Picture.Url;

  const openGallery = (activeItemIndex: number) => {
    seGalleryActiveItem(activeItemIndex);
    toggleGallery(true);
  };

  const render = () => {
    return (
      <>
        <Modal
          {...ModalDefault}
          open={isOpen}
          onClose={() => {
            toggleGallery(false);
          }}
          styles={{
            modal: {
              maxWidth: "800px",
              width: "100%",
            },
          }}
          center>
          <div className="d-flex flex-wrap">
            <div className="col-12">
              <h4>تصاویر</h4>
            </div>
            <div className={style.gallery}>
              <div className="col-12">
                <div className="d-flex">
                  <div className="col-2">
                    <div className={style.tumSlider}>
                      <Swiper
                        initialSlide={SwiperActiveIndex}
                        slidesPerView={6}
                        direction="vertical"
                        centeredSlides
                        onSlideChange={active =>
                          seGalleryActiveItem(
                            Number(
                              active.slides[active.activeIndex].attributes[1]
                                .value,
                            ),
                          )
                        }
                        slideToClickedSlide>
                        {(GalleryItems ?? []).map((item, index) => (
                          <SwiperSlide id={String(index)} key={index}>
                            <div className={style.item}>
                              <Image src={item.Picture.ThumbUrl} />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  <div className="col-10 p-x-8">
                    <div className={style.big}>
                      <Image src={fullImg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  };

  return {
    render,
    seGalleryActiveItem,
    openGallery,
    setGalleryItems,
  };
};
export default GalleryModal;
