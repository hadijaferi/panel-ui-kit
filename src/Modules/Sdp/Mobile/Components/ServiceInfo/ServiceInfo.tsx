import React from "react";
import Link from "next/link";
import ShowPrice from "../../../../../Share/Components/Common/ShowPrice/ShowPrice";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import useGetService from "../../../Hooks/Detail/GetService";
import style from "./ServiceInfo.module.sass";
import formatSearchLink from "../../../../../Share/Helpers/Links/formatSearchLink";

const ServiceInfoMobile = () => {
  const useService = useGetService();
  return (
    <div className={style.detailWrapper}>
      <div className={style.part1}>
        <div className="container">
          <div className="fontWeight-700 fontSize-16 m-b-16">
            {useService?.service?.Name}
          </div>
          <div className="d-flex colorGray-cbcbcb m-b-16">
            <div className="colorGray-5e5e5e d-flex flex-y-center m-l-8">
              <Icon name="star-fill" className="m-l-4" />
              {useService?.service?.Rate || 0}
            </div>
            |
            <div className="colorGray-5e5e5e d-flex flex-y-center m-x-8">
              <span className="m-l-4">دسته بندی:</span>
              <Link
                href={formatSearchLink({
                  CategoryId: useService?.category?.Id,
                })}>
                <a className="colorBlue">{useService?.category?.Name}</a>
              </Link>
            </div>
          </div>
          <div>
            {useService?.service?.Price !== 0 ? (
              <div className="d-flex flex-y-center m-b-16">
                <ShowPrice
                  price={useService?.service?.Price}
                  oldPrice={useService?.service?.OldPrice}
                />
              </div>
            ) : (
              <>
                <div className="d-flex flex-y-center m-b-16">
                  <span className="m-l-16">از</span>
                  <ShowPrice price={useService?.service?.PriceRangeFrom} />
                </div>
                <div className="d-flex flex-y-center">
                  <span className="m-l-16">تا</span>
                  <ShowPrice price={useService?.service?.PriceRangeTo} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoMobile;
