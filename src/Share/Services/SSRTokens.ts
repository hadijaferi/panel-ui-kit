import { NextPageContext } from "next/dist/next-server/lib/utils";
import { NextApiRequest } from "next";
import { IToken } from "../Models/IToken";
import JwtService from "./JwtService";
import RegisterPageService from "../../Modules/Auth/Register/Service";
import { ICookieType } from "../../../utils/Cookie/cookie.types";
import UserInfoService from "./UserInfo";
import { USER_INFO_TYPE } from "../Store/UserInfo/types";

export class SSRTokenUtil {
  ctx: NextPageContext;

  token?: string;

  tokenExpire?: string;

  refreshToken?: string;

  refreshTokenExpire?: string;

  constructor(ctx: NextPageContext) {
    this.ctx = ctx;
    this.getToken(ctx?.req as NextApiRequest);
    this.getRefreshToken(ctx?.req as NextApiRequest);
  }

  async getUserInfo() {
    const store = this.ctx?.store?.getState();
    // get suer info if not exit in store
    if (store?.userInfo?.userInfoModal === null) {
      try {
        const response = await UserInfoService.getUserInfo(
          `Bearer ${this.token}`,
        );
        if (response?.data?.Data) {
          this.ctx?.store?.dispatch({
            type: USER_INFO_TYPE,
            payload: { userInfo: response.data.Data },
          });
        }
      } catch (e) {
        // console.log("getUserInfo", e);
      }
    }
  }

  async refreshOldTokens() {
    await JwtService.refreshToken(this.ctx);
  }

  saveTokens(tokens: IToken) {
    JwtService.saveToken(tokens, this.ctx);
  }

  getToken(req: NextApiRequest): ICookieType {
    const val = JwtService.getToken(req);
    if (val) {
      const { value, expires } = val;
      this.token = value;
      this.tokenExpire = expires;
    }
    return val;
  }

  getRefreshToken(req: NextApiRequest): ICookieType {
    const val = JwtService.getRefreshToken(req);
    if (val) {
      const { value, expires } = val;
      this.refreshToken = value;
      this.refreshTokenExpire = expires;
    }
    return val;
  }

  async getGuestTokens() {
    const response = await RegisterPageService.getTokenGuest({});
    if (response.data.IsSuccess) {
      this.saveTokens(response?.data?.Data?.Token);
    }
  }

  async handle() {
    // check token expire
    //  token steel is valid if exist :: according to expires we set in saveToken
    if (this.token?.length && this.tokenExpire?.length) {
      await this.getUserInfo();
    } else if (this.refreshToken?.length && this.refreshTokenExpire?.length) {
      try {
        await this.refreshOldTokens();
        await this.getUserInfo();
      } catch (e) {
        // failed to refresh tokens and we get new tokens
        await this.getGuestTokens();
      }
    } else {
      // no token
      // get new tokes and proceed
      await this.getGuestTokens();
    }
  }
}
