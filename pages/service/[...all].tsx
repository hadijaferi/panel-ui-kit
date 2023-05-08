import React from "react";
import Head from "next/head";
import Services from "../../src/Share/Services/Service";
import { IGetServiceDetailsResponse } from "../../src/Share/Models/Service/IGetServiceDetailsResponse";
import { LINKS } from "../../src/Share/Constants/LINKS";
import { ILayouts } from "../../src/infrastructure/Models/Theme/ILayouts";
import SdpContainer from "../../src/Modules/Sdp/Container";

export const getServerSideProps = async (ctx: any) => {
  let response: Partial<IGetServiceDetailsResponse> = {};
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
      await Services.getServiceDetail(id)
        .then(res => {
          if (res.data.IsSuccess) {
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
        const correctLink = `acs-${id}/${seoName}`;
        if (correctLink !== userLink) {
          ctx.res
            ?.writeHead(301, {
              location: LINKS.SERVICE.replace("[id]", String(id)).replace(
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
  return {
    props: {
      namespacesRequired: ["service"],
      data: response,
      Layout: ILayouts.WEBSITE,
    },
  };
};

interface ISdpProps {
  data: IGetServiceDetailsResponse;
}

function service(props: ISdpProps) {
  return (
    <>
      <Head>
        <title>{props.data.Product.Name}</title>
      </Head>
      <SdpContainer
        data={{
          FeaturedSpecificationAttributes:
            props.data.FeaturedSpecificationAttributes,
          Category: props.data.Category,
          Mieter: props.data.Mieter,
          Pictures: props.data.Pictures,
          Service: props.data.Product,
          Breadcrumb: props.data.Breadcrumb,
        }}
      />
    </>
  );
}

export default service;
