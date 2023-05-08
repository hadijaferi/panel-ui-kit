import React, { Component } from "react";
import { WithRouterProps } from "next/dist/client/with-router";
import * as Yup from "yup";
import { Formik } from "formik";
import { withRouter } from "next/router";
import EnterPasswordPageService from "./Service";
import JwtService from "../../../Share/Services/JwtService";
import { LINKS } from "../../../Share/Constants/LINKS";
import style from "../../../../pages/auth/auth.module.sass";
import authLogo from "../../../Resources/image/authLogo.svg";
import styleEnterPassword from "./Desktop.module.sass";
import ButtonLink from "../../../Share/Components/Common/Button/ButtonLink";
import Input from "../../../Share/Components/Common/Form/Input/Input";
import Button from "../../../Share/Components/Common/Button/Button";
import LoginPageService from "../Login/Service";
import Icon from "../../../Share/Components/Common/Icon/Icon";

interface IIEnterPasswordPageContainerStates {
  isLoading: boolean;
  mobile: string;
}

type IEnterPasswordPageContainerProps = WithRouterProps;

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "حداقل 6 کاراکتر وارد کنید")
    .max(64, "حداکثر 64 کاراکتر میتوانید وارد کنید")
    // .matches(
    //   REGEX.PASSWORD,
    //   "پسورد باید حداقل 8 کاراکتر و شامل حروف بزرگ , کوچک واعداد و !@#$%^&* باشد",
    // )
    .required("لطفا پسورد را وارد کنید"),
});

class EnterPasswordPageContainer extends Component<
  IEnterPasswordPageContainerProps,
  IIEnterPasswordPageContainerStates
> {
  state: IIEnterPasswordPageContainerStates = {
    isLoading: false,
    mobile: this.props.router.query?.mobile?.toString() || "",
  };

  enterPassword = (password: string) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        EnterPasswordPageService.loginMieter({
          Mobile: this.state.mobile,
          Password: password,
          errorNotification: true,
        })
          .then(res => {
            if (res.data.IsSuccess) {
              JwtService.saveToken(res?.data?.Data?.Token);
              this.props.router.push(LINKS.MAIN);
            }
          })
          .finally(() => {
            this.setState({
              isLoading: false,
            });
          });
      },
    );
  };

  onFormSubmitEnterPass = (values: any) => {
    this.enterPassword(values.password);
  };

  render() {
    return (
      <div className={style.authWrapper}>
        <div className={style.wrapper}>
          <div className="d-flex flex-column flex-y-center text-center">
            <div className={style.logo}>
              <img src={authLogo} alt="" />
            </div>
            <div className="fontWeight-700 fontSize-18">
              آدرس کلیک , شعبه اینترنتی شما
            </div>
          </div>
          <div className={style.body}>
            <div className={style.title}>رمز عبور</div>
            <div className="card p-y-32">
              <Formik
                validationSchema={SignupSchema}
                initialValues={{
                  password: "",
                }}
                onSubmit={values => {
                  this.onFormSubmitEnterPass(values);
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
                      <div className="d-flex flex-x-start m-b-16 ">
                        <span className={style.passwordBeforeNumber}>
                          رمز عبور شماره
                          <span className={styleEnterPassword.phoneNumber}>
                            {this.state.mobile}
                          </span>
                          را وارد کنید :
                        </span>
                        <ButtonLink
                          href={LINKS.AUTH.LOGIN_WITH_QUERY.replace(
                            "mobileValue",
                            this.state.mobile,
                          )}
                          // href={LINKS.AUTH.LOGIN}
                          color="blue"
                          className={style.changeNumberButton}>
                          تغییر شماره موبایل
                        </ButtonLink>
                      </div>
                      <Input
                        icon="m-password"
                        dir="rtl"
                        title="رمز عبور"
                        required
                        error={
                          errors.password && touched.password && errors.password
                        }
                        name="password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        minLength={6}
                        maxLength={64}
                      />
                      <div className="d-flex flex-x-start m-t-16 ">
                        <span className={style.passwordBeforeNumber}>
                          رمز عبور خود را فراموش کرده اید؟
                        </span>
                        <Button
                          onClick={() => {
                            this.setState({ isLoading: true }, () => {
                              LoginPageService.sendOpt({
                                Mobile: String(this.props.router.query.mobile),
                                errorNotification: true,
                              })
                                .then(res => {
                                  if (res.data.IsSuccess) {
                                    this.props.router.push({
                                      pathname: LINKS.AUTH.OTP_VALIDATION,
                                      query: {
                                        mobile: this.props.router.query.mobile,
                                        registered: "true",
                                      },
                                    });
                                  }
                                })
                                .finally(() => {
                                  this.setState({ isLoading: false });
                                });
                            });
                          }}
                          theme="forButtonLink"
                          color="blue"
                          className={style.changeNumberButton}>
                          بازیابی رمز عبور
                        </Button>
                      </div>
                    </div>
                    <div className="m-t-24">
                      <Button
                        // isDisabled={!!errors?.password}
                        isLoading={this.state.isLoading}
                        color="red"
                        radius="radius16"
                        type="submit"
                        size="large"
                        className="col-9 m-auto p-t-24 flex-y-center flex-x-center d-flex">
                        <Icon name="m-login" className="m-l-8" size="large" />
                        <span>ورود</span>
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

export default withRouter(EnterPasswordPageContainer);
