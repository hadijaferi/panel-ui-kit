import Link from "next/link";
import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import Button from "../../../../../../Share/Components/Common/Button/Button";
import { LINKS } from "../../../../../../Share/Constants/LINKS";
import Icon from "../../../../../../Share/Components/Common/Icon/Icon";
import generateClassName from "../../../../../../Share/Helpers/Dom/generateClassName";
import style from "./Desktop.module.sass";
import JwtService from "../../../../../../Share/Services/JwtService";
import { IPicture } from "../../../../../../infrastructure/Models/Entity/IPicture";
import Image from "../../../../../../Share/Components/Common/Image/Image";

interface UserInfoState {
  isOpenUserInfoModal: boolean;
}

interface InfoEntity {
  FullName: string;
  FirstName: string;
  LastName: string;
  Avatar: IPicture;
}

interface UserInfoProps extends WithRouterProps {
  Info: InfoEntity | null;
  ClearUserInfo: (userInfo: InfoEntity | null) => any;
}

class UserInfo extends Component<UserInfoProps, UserInfoState> {
  state = {
    isOpenUserInfoModal: false,
  };

  handleClickOutside = () => {
    if (this.state.isOpenUserInfoModal) {
      this.setState({
        isOpenUserInfoModal: false,
      });
    }
  };

  handleUserAction = () => {
    const isLogin = this.props.Info !== null;

    if (isLogin) {
      const { isOpenUserInfoModal } = this.state;
      this.setState({
        isOpenUserInfoModal: !isOpenUserInfoModal,
      });
    } else {
      this.props.router.push(LINKS.AUTH.LOGIN);
    }
  };

  render() {
    const isLogin = this.props.Info !== null;
    return (
      <div className="pos-relative">
        {!isLogin ? (
          <Button
            onClick={this.handleUserAction}
            theme="bordered"
            size="medium"
            radius="radius16"
            className="fontWeight-700">
            <div className="p-x-16">
              <Icon name="user" size="large" className="m-l-4" />

              <span>حساب کاربری</span>
            </div>
          </Button>
        ) : (
          <Button
            onClick={this.handleUserAction}
            theme="iconic"
            size="medium"
            radius="radius16"
            className="fontWeight-700">
            <div className="p-x-8">
              <Icon name="user" size="large" className="m-l-4" />
            </div>
          </Button>
        )}
        <div
          className={generateClassName([
            "card",
            style.userInfo,
            this.state.isOpenUserInfoModal && style.active,
          ])}>
          <div className="p-x-16">
            <div className="d-flex flex-y-center">
              <div className="avatar avatar__mobile m-l-8">
                <Image src={this.props.Info?.Avatar?.ThumbUrl} />
              </div>
              <div>
                <div className="fontWeight-700">
                  {this.props.Info?.FullName || ""}
                </div>
                <div className="colorBlue ">
                  <Link href={LINKS.PROFILE.DASHBOARD}>
                    <a className="m-l-4 fontSize-12 d-inline-block">
                      مشاهده حساب کاربری
                    </a>
                  </Link>
                  <Icon name="chevron-left" size="mini" />
                </div>
              </div>
            </div>
            <hr className="m-t-8 m-b-16" />
            <ul className={style.infoListStep}>
              <li>
                <Link href={LINKS.PROFILE.ORDERS}>
                  <a>
                    <Icon name="bag-cart" />
                    <span>سفارش های من</span>
                  </a>
                </Link>
              </li>
              {/*              <li>
                <Link href={LINKS.CART}>
                  <a>
                    <Icon name="m-heart" />
                    <span>علاقه مندی های من</span>
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href={LINKS.PROFILE.DASHBOARD}>
                  <a>
                    <Icon name="map-pin" />
                    <span>نشانی</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={LINKS.PROFILE.CHAT}>
                  <a>
                    <Icon name="m-message" />
                    <span>چت و پشتیبانی</span>
                  </a>
                </Link>
              </li>
            </ul>
            <div />
          </div>
          <div className={style.downLogOut}>
            <Button
              theme="text"
              onClick={() => {
                JwtService.clearToken();
                this.props.ClearUserInfo(null);
                this.setState({ isOpenUserInfoModal: false });
                this.props.router.push(LINKS.HOME);
              }}>
              <Icon name="log-out" className="m-l-4" />
              <span className="fontSize-12">خروج از حساب کاربری</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(onClickOutside(UserInfo));
