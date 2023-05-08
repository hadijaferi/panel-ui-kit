import React, { FC } from "react";
import Link from "next/link";
import styles from "./Result.module.sass";
import { IBaseComponentProps } from "../../../../../../../../infrastructure/Models/IBaseComponent";
import generateClassName from "../../../../../../../../Share/Helpers/Dom/generateClassName";
import Image from "../../../../../../../../Share/Components/Common/Image/Image";
import { LINKS } from "../../../../../../../../Share/Constants/LINKS";
import Button from "../../../../../../../../Share/Components/Common/Button/Button";
import Icon from "../../../../../../../../Share/Components/Common/Icon/Icon";
import ButtonLink from "../../../../../../../../Share/Components/Common/Button/ButtonLink";
import test from "../../../../../../../../Resources/image/defaultAvatar.jpg";
import { IHookProps } from "../../Hooks/useSearchSite";
import formatSearchLink from "../../../../../../../../Share/Helpers/Links/formatSearchLink";
import formatProductLink from "../../../../../../../../Share/Helpers/Links/formatProductLink";

const SearchResultBox: FC<IBaseComponentProps & IHookProps> = props => {
  return (
    <div
      className={generateClassName([styles.searchResultBox, props.className])}>
      {props.firstView ? (
        <>
          <div className="p-x-24">
            {props.searchHistories.map(searchKey => (
              <div
                className={styles.relateSearchItem}
                key={`${searchKey}`}
                onClick={() => props.onSelectFromHistoryList(searchKey)}>
                <Icon name="history" />
                <span>{searchKey}</span>
              </div>
            ))}
          </div>
          {/* {props.searchHistories.length !== 0 && <hr className={styles.hr} />} */}
          {/* <div className="m-t-16 p-x-24"> */}
          {/*  <ul className={styles.mostRelateSearch}> */}
          {/*    <div className="m-b-8">بیشترین جستجوهای اخیر</div> */}
          {/*    <li> */}
          {/*      <Link href="/#"> */}
          {/*        <a>ژوان ژوزه Joan Jose</a> */}
          {/*      </Link> */}
          {/*    </li> */}
          {/*  </ul> */}
          {/* </div> */}
        </>
      ) : (
        <>
          {props.searchNotFound() ? (
            <div className="d-flex flex-over-center p-y-24">
              <span className="colorGray-979797 fontWeight-500">
                نتیجه ای یافت نشد
              </span>
            </div>
          ) : (
            <>
              {/* ================ mieter list ================ */}
              {props.mieters.length !== 0 && (
                <>
                  <div className="p-x-24">
                    {props.mieters.map(mieter => (
                      <div className={styles.resultShopItem} key={mieter.Name}>
                        <div className="d-flex flex-y-center">
                          <div
                            className={generateClassName([
                              styles.avatarProfile,
                              "avatar avatar__small m-l-8",
                            ])}>
                            {mieter?.Picture?.ThumbUrl && (
                              <Image src={mieter.Picture.ThumbUrl} alt="" />
                            )}
                          </div>
                          <div>
                            <div>{mieter.Name}</div>
                            <div className="colorGray-979797 fontSize-10">
                              <span>{mieter.ProductCount}</span>
                              <span className="m-x-4">کالا</span>
                            </div>
                          </div>
                        </div>
                        <Button theme="iconic">
                          <Icon
                            name="chevron-left"
                            size="large"
                            className="colorGray-cbcbcb"
                          />
                        </Button>
                      </div>
                    ))}
                    <div className="m-t-8">
                      <ButtonLink color="blue" href="/#">
                        <span>مشاهده همه</span>
                        <Icon
                          name="chevron-left"
                          size="large"
                          className="m-b-2"
                        />
                      </ButtonLink>
                    </div>
                  </div>
                  <hr className={styles.hr} />
                </>
              )}
              {/* ================================================ */}
              {/* ================ product , service list ================ */}
              <div className={styles.resultListWrap}>
                <ul className={styles.resultListStep}>
                  <div className="fontSize-16 fontWeight-700 text-right m-b-8">
                    کالا ها
                  </div>
                  {props?.pCategories.map(product => (
                    <li key={`product-category${product.Name}`}>
                      <Link
                        href={formatSearchLink({
                          CategoryId: product.Id,
                          SearchValue: product.ProductName,
                        })}>
                        <a
                          onClick={() =>
                            props.onSelectSearchKey(product?.ProductName || "")
                          }>
                          {product?.ProductName}
                          <span>
                            <span>در موضوع</span>
                            <span className="m-x-4">{product.Name}</span>
                          </span>
                        </a>
                      </Link>
                    </li>
                  ))}
                  {props.pProduct.map(product => (
                    <li key={`product-product${product.Name}`}>
                      <Link href={formatProductLink(LINKS.PRODUCT, product)}>
                        <a
                          onClick={() => props.onSelectSearchKey(product.Name)}>
                          {product.Name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className={styles.resultListStep}>
                  {props.sProduct.length !== 0 && (
                    <>
                      <div className="fontSize-16 fontWeight-700 text-right m-b-8">
                        خدمات
                      </div>
                      {props?.sCategories.map(product => (
                        <li key={`service-category${product.Name}`}>
                          <Link
                            href={formatProductLink(LINKS.PRODUCT, product)}>
                            <a
                              onClick={() =>
                                props.onSelectSearchKey(product.Name)
                              }>
                              {product.ProductName}
                              <span>
                                <span>در موضوع</span>
                                <span className="m-x-4">{product.Name}</span>
                              </span>
                            </a>
                          </Link>
                        </li>
                      ))}
                      {props.sProduct.map(product => (
                        <li key={`service-product${product.Name}`}>
                          <Link
                            href={formatProductLink(LINKS.PRODUCT, product)}>
                            <a
                              onClick={() =>
                                props.onSelectSearchKey(product.Name)
                              }>
                              {product.Name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
              {props.brands.length !== 0 && <hr className={styles.hr} />}
              {/* ================================================ */}
              {/* ================ brand list ================ */}
              {props.brands.length !== 0 && (
                <div className="p-x-24">
                  {props.brands.map(brand => (
                    <div
                      className={styles.relateBrandShopItem}
                      key={`brand${brand.Name}`}>
                      <Link
                        href={formatSearchLink({
                          CategoryId: 0,
                          Brands: [brand.Id || 0],
                        })}>
                        <a onClick={() => props.onSelectSearchKey(brand.Name)}>
                          <div className="d-flex flex-y-center">
                            <div className={styles.logoBrandShop}>
                              <Image src={test} alt="" />
                            </div>
                            <span>
                              همه کالا های برند
                              <span>{brand.Name}</span>
                            </span>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
export default SearchResultBox;
