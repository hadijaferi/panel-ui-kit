import React from "react";
import Services from "../../src/Share/Services/Product";
import { IGetProductDetailsResponse } from "../../src/Share/Models/Product/IGetProductDetailsResponse";
import { LINKS } from "../../src/Share/Constants/LINKS";
import { wrapper } from "../../src/Share/Store/store";
import {
  ProductSetColorVariety,
  ProductSetDetails,
  ProductSetSizeVariety,
} from "../../src/Share/Store/Product/actions";
import { ILayouts } from "../../src/infrastructure/Models/Theme/ILayouts";
import ProductHelpers from "../../src/Modules/Pdp/Helpers/productHelpers";
import PdpContainer from "../../src/Modules/Pdp/Container";

export const getServerSideProps = wrapper.getServerSideProps(async ctx => {
  let response: IGetProductDetailsResponse | undefined;
  let go404 = false;
  let id = 0;
  const path = ctx.query.all;
  if (path?.[0]) {
    const idSection = path?.[0];
    const findId = idSection.match(/\d+/);
    if (findId?.length) {
      id = Number(findId[0]);
    }
    if (id > 0) {
      await Services.getProductDetail(id)
        .then(res => {
          if (res && res.data.IsSuccess) {
            response = res?.data?.Data;
          }
        })
        .catch(_err => {
          go404 = true;
        });
    } else {
      go404 = true;
    }
  } else {
    go404 = true;
  }
  // auto redirect to correct link
  const { referer } = ctx.req.headers; // if there's no referer then it was a server request
  if (response && !referer) {
    const userLink = (path as string[]).join("/");
    const product = response.Product;
    if (product) {
      const seoName = product.SeoName;
      if (seoName) {
        const correctLink = `acp-${id}/${seoName}`;
        if (correctLink !== userLink) {
          ctx.res
            ?.writeHead(301, {
              location: LINKS.PRODUCT.replace("[id]", String(id)).replace(
                "[name]",
                encodeURI(seoName),
              ),
            })
            .end();
        }
      }
    }
  }
  if (go404) {
    ctx.res
      ?.writeHead(302, {
        location: LINKS.NOT_FOUND,
      })
      .end();
  }

  if (response) {
    await ctx.store.dispatch(ProductSetDetails(response));
    const helpers: ProductHelpers = new ProductHelpers(response);
    if (helpers.hasCombination()) {
      const comb = helpers.getDefaultCombination();
      if (comb?.Id) {
        if (helpers.getCombinationType() === "color") {
          await ctx.store.dispatch(ProductSetColorVariety(comb?.Id));
        } else {
          await ctx.store.dispatch(ProductSetSizeVariety(comb?.Id));
        }
      }
    }
  }
  return {
    props: {
      id,
      productTitle: response?.Product.Name,
      key: `product_${id}`,
      Layout: ILayouts.WEBSITE,
    },
  };
});

function ProductPage() {
  return <PdpContainer />;
}

export default ProductPage;
