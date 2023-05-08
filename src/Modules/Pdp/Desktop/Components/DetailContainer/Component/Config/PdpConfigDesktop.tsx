import React from "react";
import QRCode from "react-qr-code";
import Link from "next/link";
import { OptionsType } from "react-select";
import style from "./PdpConfigDesktop.module.sass";
import generateClassName from "../../../../../../../Share/Helpers/Dom/generateClassName";
import ShowPrice from "../../../../../../../Share/Components/Common/ShowPrice/ShowPrice";
import Icon from "../../../../../../../Share/Components/Common/Icon/Icon";
import usePdpHelpers from "../../../../../Hooks/usePdpHelpers";
import Selector from "../../../../../Components/Selector/Selector";
import formatSearchLink from "../../../../../../../Share/Helpers/Links/formatSearchLink";
import goToCommentSection from "../../../../../../../Share/Helpers/gotoCommentSection";
import { usePdpCombination } from "../../../../../Hooks/usePdpCombination";
import Select from "../../../../../../../Share/Components/Common/Form/Select/Select";

export default function PdpDetailConfigDesktop() {
  const renderDetail = (
    title: string,
    value: string | number | undefined,
    link = "#",
  ) => {
    if (value) {
      return (
        <>
          <small className="colorGray-cbcbcb">|</small>
          <div className="m-x-16 d-flex">
            <span className="colorGray-5e5e5e m-l-4">{`${title} : `}</span>
            {link === "#" ? (
              value
            ) : (
              <Link href={link}>
                <a className="colorBlue">{value}</a>
              </Link>
            )}
          </div>
        </>
      );
    }
    return undefined;
  };

  const combinationHelpers = usePdpCombination();
  const productHelper = usePdpHelpers();
  const productDetails = productHelper.getDetails();
  const product = productDetails?.Product;
  const fullPrice = productHelper.getProductFullPrice();

  const combinationType = combinationHelpers.getCombinationType();
  const selectedCombinationName = combinationHelpers.getSelectedCombinationName();
  const prettyCombinations = combinationHelpers.getPrettyCombinations();

  const selectedGuaranty = combinationHelpers.getSelectedGuaranty();

  return (
    <>
      <div className="d-flex flex-column flex-x-around flex-y-start h100">
        <div className={style.sectionUp}>
          <div className="d-flex flex-column m-b-24">
            <h1 className="fontWeight-700 fontSize-20 d-block">
              {product?.Name}
            </h1>
            {product?.EnglishName && (
              <h2 className="fontSize-14 colorGray-979797 fontWeight-400">
                {product?.EnglishName}
              </h2>
            )}
          </div>
          <div className="d-flex flex-y-center flex-wrap m-block-start">
            <div className="m-l-16">
              <Icon name="star-fill" size="medium" className="m-l-4 m-b-2" />
              <span>{product?.CustomerRate}</span>
            </div>
            <div onClick={goToCommentSection}>
              {renderDetail("نظر", product?.ReviewCount)}
            </div>
            {renderDetail(
              "برند",
              productDetails?.Brand?.Name,
              formatSearchLink({
                CategoryId: productDetails?.Category?.Id ?? 0,
                Brands: [productDetails?.Brand?.Id ?? 0],
              }),
            )}
            {renderDetail(
              "دسته بندی",
              productDetails?.Category?.Name,
              formatSearchLink({
                CategoryId: productDetails?.Category?.Id ?? 0,
              }),
            )}
            {renderDetail("شناسه کالا", product?.Sku)}
          </div>
        </div>
        <hr className="m-y-16" />
        {productHelper.hasCombination() && (
          <>
            <div className="col-12">
              <Selector
                value={selectedCombinationName}
                onChange={value => {
                  const id =
                    combinationHelpers.getCombinationByName(value)?.Id ?? -1;
                  combinationHelpers.setSelectedVarietyId(id);
                }}
                items={prettyCombinations?.map(combination => {
                  return {
                    title: combination.title,
                    value: combination.title,
                    color:
                      combinationType === "color"
                        ? combination.color ?? ""
                        : null,
                  };
                })}
              />
            </div>
            <Select
              className="col-8 m-t-16"
              onChange={(_name: string, item: any) => {
                if (item?.value) {
                  combinationHelpers.setSelectedVarietyId(item.value);
                }
              }}
              value={selectedGuaranty as any}
              onBlur={() => {}}
              isMulti={false}
              options={
                combinationHelpers.getLabelValueGuarantyItems() as OptionsType<any>
              }
            />
            <hr className="m-y-16" />
          </>
        )}
        <div className="col-12">
          <div className="d-flex flex-x-between">
            <div className="col-9">
              <div className="d-flex flex-y-center">
                <div className="m-l-32">قیمت:</div>
                <ShowPrice
                  price={fullPrice.price}
                  oldPrice={fullPrice.oldPrice}
                />
              </div>
            </div>
            <div className={generateClassName([style.qrCode])}>
              <div className={style.ds}>
                <QRCode size={50} value={productHelper.getProductLink()} />
              </div>
              <div className="colorGray-5e5e5e fontSize-12 m-t-8">
                اسکن با تلفن همراه
              </div>
            </div>
          </div>
        </div>
        <hr className="m-y-16" />
        <div className="col-12">
          <div className="d-flex m-b-32">
            <div className="col-2">ارسال به:</div>
            <div className="col-10 m-t-2">
              <div className="m-b-8 fontSize-12">تهران از طریق پست پیشتاز</div>
              <div className="d-flex m-b-8">
                <span className="colorGray-979797 fontSize-12 m-l-16">
                  زمان ارسال:
                </span>
                <span className="fontWeight-700">2 تا 3 روز</span>
              </div>
              {/* <div className="d-flex">
                <span className="colorGray-979797 fontSize-12 m-l-16">
                  هزینه ارسال:
                </span>
                <span className="fontWeight-700">
                  <Price price={20000} />
                </span>
              </div> */}
            </div>
          </div>
          {/* <ButtonLink href="/">
            <Icon name="modal-success" className="m-l-8 m-b-2" size="medium" />
            <span className="colorGray-979797 fontSize-12">
              گزارش تخلف یا اشکال محصول
            </span>
          </ButtonLink> */}
        </div>
      </div>
    </>
  );
}
