import React, { Component } from "react";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { LINKS } from "../../../Share/Constants/LINKS";
import LoginPageService from "./Service";
import style from "../../../../pages/auth/auth.module.sass";
import authLogo from "../../../Resources/image/authLogo.svg";
import Input from "../../../Share/Components/Common/Form/Input/Input";
import Button from "../../../Share/Components/Common/Button/Button";
import { REGEX } from "../../../Share/Constants/Regex";
import Icon from "../../../Share/Components/Common/Icon/Icon";

interface LoginPageContainerStates {
  isLoading: boolean;
}

interface LoginPageContainerProps extends WithRouterProps {
  LoadProfileInfo?: () => Promise<any>;
}

class LoginPageContainer extends Component<
  LoginPageContainerProps,
  LoginPageContainerStates
> {
  state: LoginPageContainerStates = {
    isLoading: false,
  };

  SignupSchema = Yup.object().shape({
    mobile: Yup.string()
      .min(1)
      .max(11)
      .required("لطفا موبایل را وارد کنید")
      .matches(REGEX.MOBILE, "شماره موبایل معتبر نمی باشد"),
  });

  onFormSubmitGetStatusUser = (mobile: string) => {
    this.setState({ isLoading: true }, () => {
      LoginPageService.isRegistered({
        Mobile: mobile,
        UserType: 1,
        errorNotification: true,
      })
        .then(res => {
          if (res?.data?.IsSuccess) {
            const { Registered } = res.data.Data;
            if (Registered) {
              if (res.data.IsSuccess) {
                this.props.router.push({
                  pathname: LINKS.AUTH.ENTER_PASSWORD,
                  query: {
                    mobile,
                    registered: "true",
                  },
                });
              }
            } else {
              LoginPageService.sendOpt({
                Mobile: mobile,
                errorNotification: true,
              }).then(response => {
                if (response.data.IsSuccess) {
                  this.props.router.push({
                    pathname: LINKS.AUTH.OTP_VALIDATION,
                    query: {
                      mobile,
                      registered: "false",
                    },
                  });
                }
              });
            }
          }
        })
        .finally(() => {
          this.setState({
            isLoading: false,
          });
        });
    });
  };

  render() {
    return (
      <div className={style.authWrapper}>
        <div className={style.wrapper}>
          <div className="d-flex flex-column flex-y-center text-center">
            <div className={style.logo}>
              <img src={authLogo} alt="" />
            </div>
            <div className={style.headTitle}>آدرس کلیک , شعبه اینترنتی شما</div>
          </div>
          <div className={style.body}>
            <div className={style.title}>ورود | ثبت نام</div>
            <div className="card p-y-32">
              <Formik
                validationSchema={this.SignupSchema}
                initialValues={{
                  mobile: this.props.router?.query?.mobile
                    ? String(this.props.router?.query?.mobile)
                    : "",
                }}
                onSubmit={values => {
                  this.onFormSubmitGetStatusUser(values.mobile);
                }}>
                {({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="col-9 m-auto">
                      <Input
                        icon="phone"
                        dir="rtl"
                        title="شماره تلفن همراه"
                        required
                        error={errors.mobile && touched.mobile && errors.mobile}
                        name="mobile"
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobile}
                        minLength={1}
                        maxLength={11}
                      />
                    </div>
                    <div className="m-t-24">
                      <Button
                        isLoading={this.state.isLoading}
                        color="red"
                        type="submit"
                        radius="radius16"
                        size="large"
                        className="col-9 m-auto flex-y-center flex-x-center d-flex">
                        <span>مرحله بعد</span>
                        <Icon
                          name="arrow-left"
                          className="m-r-8"
                          size="large"
                        />
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPageContainer);
