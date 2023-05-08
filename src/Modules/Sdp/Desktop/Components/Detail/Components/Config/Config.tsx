import React from "react";
import Link from "next/link";
import ShowPrice from "../../../../../../../Share/Components/Common/ShowPrice/ShowPrice";
import generateClassName from "../../../../../../../Share/Helpers/Dom/generateClassName";
import style from "./Config.module.sass";
import useGetService from "../../../../../Hooks/Detail/GetService";
import WorkTimeDesktop from "./Components/WorkTime/WorkTime";
import Icon from "../../../../../../../Share/Components/Common/Icon/Icon";
import Button from "../../../../../../../Share/Components/Common/Button/Button";
import goToCommentSection from "../../../../../../../Share/Helpers/gotoCommentSection";
import formatSearchLink from "../../../../../../../Share/Helpers/Links/formatSearchLink";

const ConfigDesktop = () => {
  const Service = useGetService();
  return (
    <>
      <div className="d-flex flex-column flex-x-around flex-y-start h100">
        <div className="col-12">
          <div className={style.sectionUp}>
            <div className="m-b-24">
              <h1 className="fontWeight-700 fontSize-20 d-block">
                {Service.service.Name}
              </h1>
              {Service.service.EnglishName && (
                <h2 className="fontSize-14 colorGray-979797 fontWeight-400">
                  {Service.service.EnglishName}
                </h2>
              )}
            </div>
            <div className="d-flex flex-y-center flex-wrap m-block-start">
              <div className="m-l-16">
                <Icon name="star-fill" size="medium" className="m-l-4 m-b-2" />
                <span>{Service.service.CustomerRate}</span>
              </div>
              {!!Service.service.ReviewCount && (
                <>
                  <small className="colorGray-cbcbcb">|</small>
                  <div className="m-x-16 d-flex">
                    <span className="colorGray-5e5e5e m-l-4">نظر:</span>
                    <Button
                      theme="forButtonLink"
                      color="blue"
                      onClick={goToCommentSection}>
                      {Service.service.ReviewCount}
                    </Button>
                  </div>
                </>
              )}
              <small className="colorGray-cbcbcb">|</small>
              <div className="m-x-16 d-flex">
                <span className="colorGray-5e5e5e m-l-4">دسته بندی:</span>
                <Link
                  href={formatSearchLink({
                    CategoryId: Service?.category?.Id,
                  })}>
                  <a className="colorBlue">{Service?.category?.Name}</a>
                </Link>
              </div>
              {Service?.service?.Sku && (
                <>
                  <small className="colorGray-cbcbcb">|</small>
                  <div className="m-x-16 d-flex">
                    <span className="colorGray-5e5e5e m-l-4">شناسه خدمت:</span>
                    {Service?.service?.Sku}
                  </div>
                </>
              )}
            </div>
          </div>

          <hr className="m-y-24" />
          {Service.service?.Description && (
            <>
              <div className="colorGray-979797 m-b-8">شرح خدمت :</div>
              <p className={style.description}>
                {Service?.service?.Description}
              </p>
            </>
          )}
        </div>
        <div className="col-12">
          <div className="d-flex flex-x-between">
            <div className="col-12">
              <div className="d-flex flex-y-center text-center">
                {Service.service.Price !== 0 ? (
                  <div className="m-b-16 d-flex flex-y-center">
                    <ShowPrice
                      price={Service?.service?.Price}
                      oldPrice={Service?.service?.OldPrice}
                    />
                  </div>
                ) : (
                  <>
                    <div className="d-flex flex-y-center">
                      <div className="m-l-16">از</div>
                      <ShowPrice price={Service?.service?.PriceRangeFrom} />
                    </div>
                    <div
                      className={generateClassName([
                        Service?.service?.OldPrice
                          ? "m-r-4 m-l-24"
                          : "m-l-16 m-r-24",
                      ])}>
                      تا
                    </div>

                    <div className="col-6">
                      <div className="d-flex flex-y-center  ">
                        <ShowPrice price={Service?.service?.PriceRangeTo} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <hr className="m-y-16" />
          <div className="col-12">
            <WorkTimeDesktop />
            {/* <ButtonLink href="/" className="d-inline-block-force m-t-32">
              <Icon
                name="modal-success"
                className="m-l-8 m-b-2"
                size="medium"
              />
              <span className="colorGray-979797 ">
                گزارش تخلف یا اشکال محصول
              </span>
             </ButtonLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigDesktop;
