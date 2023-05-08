import { NextApiRequest } from "next";
import { NextPageContext } from "next/dist/next-server/lib/utils";
import {
  getCookie,
  removeCookie,
  setCookie,
} from "../../../utils/Cookie/cookie";
import { API_BASE } from "../Constants/Api/API";
import { TokenKeys } from "../TokenKeys";
import { IToken } from "../Models/IToken";
import { ICookieType } from "../../../utils/Cookie/cookie.types";

/**
 *
 *
 * handle all logics of auth in token for having one true source
 *
 * saveToken
 * clearToken
 * getToken
 * getRefreshToken
 *
 */
export default class JwtService {
  /**
   *
   * @param TokenObject:IToken
   * @param ctx
   */
  static saveToken(TokenObject: IToken, ctx?: NextPageContext): void {
    const {
      Token,
      RefreshToken,
      ExpiryDate,
      RefreshTokenExpiryDate,
    } = TokenObject;
    setCookie(TokenKeys.token, Token, ExpiryDate, ctx);
    if (RefreshToken) {
      setCookie(
        TokenKeys.refreshToken,
        RefreshToken,
        RefreshTokenExpiryDate,
        ctx,
      );
    }
  }

  /**
   * remove token in cookie and localstorage
   * @param accessToken
   * @param refreshToken
   */

  static clearToken(): void {
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in TokenKeys) {
      removeCookie(TokenKeys[key as keyof typeof TokenKeys]);
    }
  }

  static getToken(req?: NextApiRequest): ICookieType {
    return getCookie(TokenKeys.token, req);
  }

  static getRefreshToken(req?: NextApiRequest): ICookieType {
    return getCookie(TokenKeys.refreshToken, req);
  }

  static refreshToken(ctx?: NextPageContext): Promise<any> {
    /**
     *
     * refresh token  or client
     * TODO:
     */
    return new Promise((resolve, reject) => {
      const refreshToken = JwtService.getRefreshToken(
        ctx?.req as NextApiRequest,
      );
      if (!refreshToken?.value) {
        return reject(new Error("no refresh token exist"));
      }

      return fetch(`${API_BASE}identity/token/refresh`, {
        method: "POST",
        body: JSON.stringify({ RefreshToken: refreshToken.value }),
        headers: { "Content-Type": "application/json" },
      })
        .then(res => res.json())
        .then(response => {
          const { IsSuccess, Data, StatusCode } = response;
          if (IsSuccess) {
            JwtService.saveToken(Data?.Token, ctx);
            resolve(Data?.Token?.Token);
          } else {
            // "Refresh token is invalid.",
            // flush invalid tokens
            if (StatusCode === 400) {
              JwtService.clearToken();
            }
            reject(new Error(StatusCode?.toString()));
          }
        })
        .catch(e => {
          if (e?.response?.StatusCode) {
            const { StatusCode } = e.response;
            switch (StatusCode) {
              case 400: {
                // "Refresh token is invalid.",
                // flush invalid tokens
                JwtService.clearToken();
                break;
              }
              case 401: {
                // expired refresh ?
                JwtService.clearToken();
                break;
              }
              default:
                break;
            }
            reject(new Error(StatusCode?.toString()));
          } else reject(new Error("600"));
        });
    });
  }
}
