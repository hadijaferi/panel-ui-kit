import React, { useState } from "react";
import Vitrin from "../../Services/Vitrin";
import GalleryModal from "./GalleryModal/GalleryModal";
import useGetShop from "../../Hooks/useGetShop";

const GalleryPageModal = () => {
  const [loading, setLoading] = useState(false);
  const galleryModal = GalleryModal({
    data: {
      GalleryItems: [],
    },
  });
  const shopCtx = useGetShop();

  setLoading(true);
  Vitrin.getGallery({ VendorId: shopCtx.vitrinBase?.VendorId }).then(
    ({ data }) => {
      if (data.IsSuccess) {
        galleryModal.setGalleryItems(data.Data.GalleryItems);
        setLoading(false);
      }
    },
  );
  return (
    <>
      galleryPage!
      {loading && <div>loading..!</div>}
      {galleryModal.render()}
    </>
  );
};
export default GalleryPageModal;
