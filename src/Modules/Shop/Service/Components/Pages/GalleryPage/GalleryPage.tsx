import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import GalleryModal from "../../GalleryModal/GalleryModal";
import style from "./GalleryPage.module.sass";
import { IVitrinGallery } from "../../../../Models/IVitrinGallery";
import useGetShop from "../../../../Hooks/useGetShop";
import Vitrin from "../../../../Services/Vitrin";
import fakeItems from "../../../../../../Share/Helpers/fakeItems";
import Image from "../../../../../../Share/Components/Common/Image/Image";

const GalleryPage = () => {
  const [loading, setLoading] = useState(true);
  const [Items, setItems] = useState<IVitrinGallery>();
  const shopCtx = useGetShop();
  useEffect(() => {
    Vitrin.getGallery({ VendorId: shopCtx.vitrinBase?.VendorId }).then(
      ({ data: { Data } }) => {
        setItems(Data);
        setLoading(false);
      },
    );
  }, [shopCtx.vitrinBase?.VendorId]);

  const galleryModal = GalleryModal({
    data: {
      GalleryItems: [],
    },
  });

  useEffect(() => {
    galleryModal.setGalleryItems(Items?.GalleryItems || []);
  }, [Items?.GalleryItems, galleryModal]);

  const renderGallery = () => {
    return (
      <div className="row">
        {Items?.GalleryItems?.map((item, index) => {
          return (
            <div className="col-3 col-xl-4 m-b-8">
              <div
                className={style.galleryItem}
                onClick={() => {
                  galleryModal.openGallery(index);
                }}
                key={index}>
                <Image src={item.Picture.Url} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <div className="row">
        {fakeItems(10, () => (
          <div className="col-3 col-xl-4 m-b-8">
            <Skeleton height={392} />
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      {galleryModal.render()}
      {loading ? renderLoading() : renderGallery()}
    </>
  );
};
export default GalleryPage;
