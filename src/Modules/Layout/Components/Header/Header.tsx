import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import { bindActionCreators, Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import style from "./Header.module.sass";
import logo from "../../../../Resources/image/logo.svg";
import Search from "./Components/Search/Desktop/Search";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import { ELEMENTS } from "../../../../Share/Constants/Dom/ELEMENTS";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import UserInfoService from "../../../../Share/Services/UserInfo";

import {
  ProfileClearUserInfoAction,
  ProfileSetUserInfoAction,
} from "../../../../Share/Store/UserInfo/action";
import { IRootState } from "../../../../Share/Store/Reducer";
import UserInfo from "./Components/UserInfo/Container";
import JwtService from "../../../../Share/Services/JwtService";

interface IHeaderState {
  isOpenUserInfoModal: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setUserInfo: ProfileSetUserInfoAction,
      clearUserInfo: ProfileClearUserInfoAction,
    },
    dispatch,
  );

const mapStateToProps = (state: IRootState) => {
  return {
    userInfo: state.userInfo.userInfoModal,
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReturnType = ConnectedProps<typeof connector>;

class Header extends Component<WithRouterProps & ReturnType, IHeaderState> {
  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = () => {
    const val = JwtService.getToken();
    if (!this.props?.userInfo?.FullName && val?.value?.length) {
      UserInfoService.getUserInfo().then(res => {
        if (res.data.IsSuccess) {
          this.props.setUserInfo(res.data.Data);
        }
      });
    }
  };

  render() {
    return (
      <div className={style.fixed} id={ELEMENTS.HEADER}>
        <header id={style.acHeader}>
          <div className="container">
            <div className="d-flex flex-y-center">
              <div className="col-2 col-xl-3">
                <div className={style.logo}>
                  <Link href="/">
                    <a>
                      <img src={logo} alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-xl-5">
                <Search />
              </div>
              <div className="col-4">
                <div className="d-flex flex-x-end flex-y-center">
                  <UserInfo
                    Info={this.props?.userInfo}
                    ClearUserInfo={this.props.clearUserInfo}
                  />
                  {/* <CartProductListContainer /> */}
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav id={style.acNav}>
          <div className="container">
            <div className="d-flex flex-x-between flex-y-center h100">
              <div className="d-flex flex-y-center">
                <span className="m-l-24 m-t-2 colorGray-979797">دسته بندی</span>
                <ul className={style.navigation}>
                  <li>
                    <Link href="/">
                      <a>
                        <Icon
                          name="bookmark-box"
                          size="large"
                          className="m-b-2 m-l-8"
                        />
                        <span>کالاها</span>
                        <Icon
                          name="chevron-down"
                          size="large"
                          className="m-b-2 m-r-8"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <Icon
                          name="buy-order"
                          size="large"
                          className="m-b-2 m-l-8"
                        />
                        <span>خدمات</span>
                        <Icon
                          name="chevron-down"
                          size="large"
                          className="m-b-2 m-r-8"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={style.specialLeft}>
                <ul className={style.navigation}>
                  <li>
                    <div
                      className={generateClassName([style.notice, style.red])}
                    />
                    <Link href="/">
                      <a className="m-l-8">ماجرای ما</a>
                    </Link>
                  </li>
                  <li>
                    <div
                      className={generateClassName([style.notice, style.cyan])}
                    />
                    <Link href="/">
                      <a>اجاره واحد تجاری آنلاین</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(connector(Header));
