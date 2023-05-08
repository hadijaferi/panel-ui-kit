import { LINKS } from "../../Constants/LINKS";
import { ISearchRequest } from "../../Models/Search/ISearchRequest";

export default function formatSearchLink(
  requestBody: Partial<ISearchRequest> = {},
) {
  // initial query string -----------------------------------
  let queryParam = LINKS.SEARCH.replace("[id]", String(requestBody.CategoryId));
  // --------------------------------------------------------

  // sign query ---------------------------------------------
  const findSign = (link: string) => {
    if (link.includes("?")) {
      return "&";
    }
    return "?";
  };
  // --------------------------------------------------------
  if (requestBody?.Brands?.length) {
    queryParam = `${queryParam}?Brands=${JSON.stringify(requestBody.Brands)}`;
  }
  if (requestBody?.Specifications?.length) {
    queryParam = `${queryParam}${findSign(
      queryParam,
    )}Specifications=${JSON.stringify(requestBody.Specifications)}`;
  }

  if (requestBody?.Original) {
    queryParam = `${queryParam}${findSign(queryParam)}Original=1`;
  }
  if (requestBody?.Available) {
    queryParam = `${queryParam}${findSign(queryParam)}Available=1`;
  }
  if (requestBody?.PageIndex) {
    queryParam = `${queryParam}${findSign(queryParam)}PageIndex=${
      requestBody?.PageIndex
    }`;
  }
  if (requestBody?.PriceRangeTo) {
    queryParam = `${queryParam}${findSign(queryParam)}PriceRangeTo=${
      requestBody?.PriceRangeTo
    }`;
  }
  if (requestBody?.PriceRangeFrom) {
    queryParam = `${queryParam}${findSign(queryParam)}PriceRangeFrom=${
      requestBody?.PriceRangeFrom
    }`;
  }
  if (requestBody?.Sort) {
    queryParam = `${queryParam}${findSign(queryParam)}Sort=${
      requestBody?.Sort
    }`;
  }
  if (requestBody?.SearchValue) {
    queryParam = `${queryParam}${findSign(queryParam)}q=${
      requestBody?.SearchValue
    }`;
  }

  return queryParam;
}
