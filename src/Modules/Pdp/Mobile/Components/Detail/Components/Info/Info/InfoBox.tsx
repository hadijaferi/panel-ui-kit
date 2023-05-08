import React from "react";
import ShowPrice from "../../../../../../../../Share/Components/Common/ShowPrice/ShowPrice";
import usePdpHelpers from "../../../../../../Hooks/usePdpHelpers";
import Icon from "../../../../../../../../Share/Components/Common/Icon/Icon";
import ButtonLink from "../../../../../../../../Share/Components/Common/Button/ButtonLink";
import formatSearchLink from "../../../../../../../../Share/Helpers/Links/formatSearchLink";

export default function DetailInfoBoxMobile() {
  const productHelpers = usePdpHelpers();
  const product = productHelpers.getDetails();

  const fullPrice = productHelpers.getProductFullPrice();
  return (
    <div>
      <div className="container">
        <div className="fontSize-16 fontWeight-700 m-b-8">
          {product?.Product?.Name}
        </div>
        <div className="d-flex flex-y-center flex-wrap m-block-start m-b-16">
          <>
            <div className="m-l-8">
              <Icon name="m-star" size="large" className="m-l-4 m-b-2" />
              <span>{product?.Product?.Rate || 0}</span>
            </div>
            <small className="colorGray-cbcbcb">|</small>
          </>

          {product?.Brand?.Name && (
            <>
              <div className="m-x-8 d-flex">
                <span className="colorGray-5e5e5e m-l-4">برند:</span>
                <ButtonLink
                  href={formatSearchLink({
                    CategoryId: product.Category.Id,
                    Brands: [product.Brand.Id],
                  })}>
                  <span className="colorBlue fontWeight-500">
                    {product?.Brand?.Name}
                  </span>
                </ButtonLink>
              </div>
              <small className="colorGray-cbcbcb">|</small>
            </>
          )}
          {product?.Category?.Name && (
            <>
              <div className="m-x-8 d-flex">
                <span className="colorGray-5e5e5e m-l-4">دسته بندی:</span>
                <ButtonLink
                  href={formatSearchLink({
                    CategoryId: product.Category.Id,
                  })}>
                  <span className="colorBlue fontWeight-500">
                    {product?.Category?.Name}
                  </span>
                </ButtonLink>
              </div>
            </>
          )}
        </div>
        <div className="d-flex flex-y-center">
          <ShowPrice price={fullPrice.price} oldPrice={fullPrice.oldPrice} />
        </div>
      </div>
    </div>
  );
}
