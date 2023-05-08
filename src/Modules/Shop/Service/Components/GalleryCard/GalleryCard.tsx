import React, { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper";
import { useRouter } from "next/router";
import Button from "../../../../../Share/Components/Common/Button/Button";
import SliderItemsDesktop from "../../../../../Share/Components/Desktop/SliderItems/SliderItems";
import CustomBoxSkeleton from "../../../../../Share/Components/Common/CustomBox/Skeleton";
import { IPicture } from "../../../../../infrastructure/Models/Entity/IPicture";
import style from "./GalleryCard.module.sass";
import GalleryModal from "../GalleryModal/GalleryModal";
import { LINKS } from "../../../../../Share/Constants/LINKS";
import { VITRIN_PAGES } from "../../../Constants/VitrinLinks";

interface IGalleryItemsElements {
  Description: string;
  Picture: IPicture;
}

interface IGalleryItemsProps {
  GalleryItems: Array<IGalleryItemsElements>;
  Title: string;
}

const GalleryCard = (props: IGalleryItemsProps) => {
  const galleryModal = GalleryModal({
    data: {
      GalleryItems: [],
    },
  });
  const router = useRouter();

  const openGallery = async () => {
    await router.push({
      href: LINKS.VITRIN,
      query: {
        username: router.query.username,
        q: VITRIN_PAGES.GALLERY,
      },
    });
  };

  useEffect(() => {
    galleryModal.setGalleryItems(props.GalleryItems);
  }, [(props.GalleryItems ?? []).length]);

  const config: SwiperOptions = {
    slidesPerView: 6,
    spaceBetween: 16,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  };
  return (
    <>
      {galleryModal.render()}
      <div className="card p-y-24 no-over-flow">
        <div className="d-flex flex-x-between p-x-24 m-b-16">
          <span className="colorBlack fontWeight-500 fontSize-18">
            {props?.Title}
          </span>
          <Button onClick={openGallery} theme="forButtonLink">
            <span className="colorRed fontWeight-500 fontSize-18">
              مشاهده همه
            </span>
          </Button>
        </div>

        <SliderItemsDesktop
          className="p-x-24"
          isLoading={false}
          countItem={6}
          Skeleton={CustomBoxSkeleton}
          config={config}>
          {props?.GalleryItems?.map((item, index) => {
            return (
              <SwiperSlide
                onClick={() => {
                  galleryModal.openGallery(index);
                }}
                key={index}
                className={style.galleryItem}>
                <div className={style.galleryItemChild}>
                  <img src={item.Picture.Url} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </SliderItemsDesktop>
      </div>
    </>
  );
};
export default GalleryCard;
