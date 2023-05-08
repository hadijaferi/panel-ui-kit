// for browser
import jscookie from "js-cookie";
// for server
import * as cookie from "cookie";
import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import * as setCookieParser from "set-cookie-parser";
import { Cookie } from "set-cookie-parser";
import isClient from "../isClient";
import { forceToStringType } from "../ckeckType";
import { Dict, ICookieType } from "./cookie.types";
import { addDays } from "../date";

function extractValuesFromRawCookie(val: string): ICookieType {
  const decodedVal: ICookieType = {};
  const pairs: { [key: string]: string } = cookie.parse(
    `value=${decodeURI(val)}`,
  );
  const arr = pairs?.value?.split(";");
  if (arr?.length === 3) {
    decodedVal.value = arr[0] || "";
    decodedVal.expires = arr[1].trim().replace("expires=", "");
    decodedVal.path = arr[2].trim().replace("path=", "");
  }
  return decodedVal;
}

function getCookieFromBrowser(key: string): ICookieType {
  const encodedValue = jscookie.get(forceToStringType(key)) || "";
  return extractValuesFromRawCookie(encodedValue);
}

/**
 *
 * @param key
 * @param req:NextApiRequest
 */
function getCookieFromServer(
  key: string,
  req?: NextApiRequest | undefined,
): ICookieType | null {
  if (!req?.headers?.cookie) {
    return null;
  }
  const headerCookie = req?.headers?.cookie || "";
  let rawCookie: string =
    headerCookie
      .split(";")
      .find((c: any) => c.trim().startsWith(`${forceToStringType(key)}=`)) ||
    "";
  rawCookie = rawCookie.split("=")[1] || "";
  return extractValuesFromRawCookie(rawCookie);
}

/**
 * Tells whether given objects have the same properties.
 */
export function hasSameProperties(a: Dict, b: Dict) {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i += 1) {
    const propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}

/**
 * Compare the cookie and return true if the cookies have equivalent
 * options and the cookies would be overwritten in the browser storage.
 *
 * @param a first Cookie for comparison
 * @param b second Cookie for comparison
 */
export function areCookiesEqual(a: Cookie, b: Cookie) {
  let sameSiteSame = a.sameSite === b.sameSite;
  if (typeof a.sameSite === "string" && typeof b.sameSite === "string") {
    sameSiteSame = a.sameSite.toLowerCase() === b.sameSite.toLowerCase();
  }

  return (
    hasSameProperties(
      { ...a, sameSite: undefined },
      { ...b, sameSite: undefined },
    ) && sameSiteSame
  );
}

/**
 * Create an instance of the Cookie interface
 */
export function createCookie(
  name: string,
  value: string,
  options: cookie.CookieSerializeOptions,
): Cookie {
  let { sameSite } = options;
  if (sameSite === true) {
    sameSite = "strict";
  }
  if (sameSite === undefined || sameSite === false) {
    sameSite = "lax";
  }
  const cookieToSet = { ...options, sameSite };
  delete cookieToSet.encode;
  return {
    name,
    value,
    ...cookieToSet,
  };
}

/**
 * Sets a cookie.
 *
 * @param ctx NextJS page or API context, express context, null or undefined.
 * @param name The name of your cookie.
 * @param value The value of your cookie.
 * @param options Options that we pass down to `cookie` library.
 */

export function setServerCookie(
  ctx:
    | Pick<NextPageContext, "res">
    | { res: NextApiResponse }
    | null
    | undefined,
  name: string,
  value: string,
  options: cookie.CookieSerializeOptions = {
    path: "/",
    expires: addDays(365),
  },
) {
  // SSR
  if (ctx?.res?.getHeader && ctx?.res?.setHeader) {
    // Check if response has finished and warn about it.
    if (ctx?.res?.finished) {
      // console.warn(`Not setting "${name}" cookie. Response has finished.`);
      // console.warn(`You should set cookie before res.send()`);
      return {};
    }

    /**
     * Load existing cookies from the header and parse them.
     */
    let cookies = ctx.res.getHeader("Set-Cookie") || [];

    if (typeof cookies === "string") cookies = [cookies];
    if (typeof cookies === "number") cookies = [];

    /**
     * Parse cookies but ignore values - we've already encoded
     * them in the previous call.
     */
    const parsedCookies = setCookieParser.parse(cookies, {
      decodeValues: false,
    });

    /**
     * We create the new cookie and make sure that none of
     * the existing cookies match it.
     */
    const newCookie = createCookie(name, value, options);
    const cookiesToSet: string[] = [];

    parsedCookies.forEach((parsedCookie: Cookie) => {
      if (!areCookiesEqual(parsedCookie, newCookie)) {
        /**
         * We serialize the cookie back to the original format
         * if it isn't the same as the new one.
         */
        const serializedCookie = cookie.serialize(
          parsedCookie.name,
          parsedCookie.value,
          {
            // we prevent re encoding by default, but you might override it
            encode: (val: string) => val,
            ...(parsedCookie as cookie.CookieSerializeOptions),
          },
        );

        cookiesToSet.push(serializedCookie);
      }
    });
    cookiesToSet.push(cookie.serialize(name, value, options));

    // Update the header.
    ctx.res.setHeader("Set-Cookie", cookiesToSet);
  }
  return {};
}

/**
 * set key value pair cookie
 * @param key
 * @param value
 * @param expires
 * @param ctx
 *
 */
export function setCookie(
  key: string,
  value: string,
  expires: Date | string,
  ctx?: NextPageContext,
) {
  const options = {
    path: "/",
    expires: new Date(expires),
  };
  value = encodeURIComponent(`${value}; expires=${expires}; path=/`);
  if (isClient()) {
    jscookie.set(forceToStringType(key), forceToStringType(value), options);
  } else if (ctx?.req) {
    setServerCookie(ctx, key, value, options);
  }
}

/**
 *
 * @param key
 */
export function removeCookie(key: string) {
  if (isClient()) {
    jscookie.remove(forceToStringType(key), {
      path: "/",
      expires: 0,
    });
  }
}

/**
 * get cookie base on server or client
 * @param key
 * @param req
 */
export function getCookie(
  key: string,
  req?: NextApiRequest | undefined,
): ICookieType {
  return isClient()
    ? getCookieFromBrowser(forceToStringType(key))
    : (getCookieFromServer(forceToStringType(key), req) as ICookieType);
}
