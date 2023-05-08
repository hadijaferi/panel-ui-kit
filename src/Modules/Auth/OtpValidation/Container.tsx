import React, { Component } from "react";
import { WithRouterProps } from "next/dist/client/with-router";
import * as Yup from "yup";
import { Formik } from "formik";
import { withRouter } from "next/router";
import RegisterPageService from "./Service";
import { LINKS } from "../../../Share/Constants/LINKS";
import LoginPageService from "../Login/Service";
import generateClassName from "../../../Share/Helpers/Dom/generateClassName";
import style from "../../../../pages/auth/auth.module.sass";
import Button from "../../../Share/Components/Common/Button/Button";
import authLogo from "../../../Resources/image/authLogo.svg";
import styleOtpValidation from "./Desktop.module.sass";
import ButtonLink from "../../../Share/Components/Common/Button/ButtonLink";
import Icon from "../../../Share/Components/Common/Icon/Icon";
import InputOtp from "../../../Share/Components/Common/Form/InputOtp/InputOtp";

interface OtpValidationPageContainerStates {
  isLoading: boolean;
  mobile: string;
  second: number;
  otp: string;
}

interface OtpValidationPageContainerProps extends WithRouterProps {
  LoadProfileInfo?: () => Promise<any>;
}

const SignupSchema = Yup.object().shape({
  otp: Yup.string().min(1).max(5).required("لطفا کد تایید را وارد کنید"),
});
class OtpValidationPageContainer extends Component<
  OtpValidationPageContainerProps,
  OtpValidationPageContainerStates
> {
  RESEND_OTP_SECONDS = 119;

  state: OtpValidationPageContainerStates = {
    otp: "",
    isLoading: false,
    mobile: String(this.props.router.query.mobile),
    // eslint-disable-next-line react/no-unused-state
    second: this.RESEND_OTP_SECONDS,
  };

  componentDidMount() {
    this.startTimer();
  }

  changeTimer = (second: number) => {
    this.setState({
      second,
    });
  };

  decreaseSecond = (second: number) => {
    if (second === 0) {
      return 0;
    }
    return second - 1;
  };

  startTimer = () => {
    const timer = setInterval(() => {
      const { second } = this.state;
      if (second === 0) {
        clearInterval(timer);
      } else {
        this.changeTimer(this.decreaseSecond(second));
      }
    }, 1000);
  };

  onFormSubmitEnterOtp = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        RegisterPageService.checkOtp({
          Otp: this.state.otp,
          Mobile: this.state.mobile,
          errorNotification: true,
        })
          .then(res => {
            if (res?.data?.IsSuccess) {
              this.props.router.push(
                this.props.router.query.registered === "true"
                  ? {
                      pathname: LINKS.AUTH.SET_PASSWORD,
                      query: {
                        token: res.data.Data.Token,
                      },
                    }
                  : {
                      pathname: LINKS.AUTH.REGISTER,
                      query: {
                        token: res.data.Data.Token,
                      },
                    },
              );
            }
            throw new Error("hideLoading");
          })
          .catch(() => {
            this.setState({
              isLoading: false,
            });
          });
      },
    );
  };

  handleChange = (otp: any) => this.setState({ otp });

  sendCodeAgain() {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        LoginPageService.sendOpt({
          Mobile: this.state.mobile,
          errorNotification: true,
        })
          .then(() => {
            this.setState({
              second: this.RESEND_OTP_SECONDS,
            });
            this.startTimer();
          })
          .finally(() => {
            this.setState({
              isLoading: false,
            });
          });
      },
    );
  }

  renderTimer() {
    const { second } = this.state;
    const twoDigit = (number: number) => (number < 10 ? `0${number}` : number);
    const min = twoDigit(Math.floor(second / 60));
    const sec = twoDigit(second % 60);
    return (
      <span
        className={generateClassName([style.timerText, "faNum p-t-16"])}
        dir="ltr">
        <span>{`${min} : ${sec}`}</span>
      </span>
    );
  }

  renderOtpResendCode() {
    return (
      <div className="col-9 d-flex flex-x-between m-t-24 m-auto">
        <Button
          color="blue"
          radius="radius16"
          size="large"
          theme="forButtonLink"
          onClick={() => {
            this.sendCodeAgain();
          }}
          isDisabled={this.state.second > 0}>
          ارسال مجدد کد
        </Button>
        {this.state.second > 0 && this.renderTimer()}
      </div>
    );
  }

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
            <div className={style.title}>کد تاییدیه</div>
            <div className="card p-y-32">
              <Formik
                validationSchema={SignupSchema}
                initialValues={{
                  otp: "",
                }}
                onSubmit={() => {
                  this.onFormSubmitEnterOtp();
                }}>
                {({ handleSubmit }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="col-9 m-auto">
                      <div className="d-flex flex-x-start m-b-16 ">
                        <span className={style.passwordBeforeNumber}>
                          کد فرستاده شده برای
                          <span className={styleOtpValidation.phoneNumber}>
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
                          اصلاح شماره
                        </ButtonLink>
                      </div>
                      <InputOtp
                        shouldAutoFocus
                        onChange={this.handleChange}
                        numInputs={5}
                        separator={<span className="m-x-4">-</span>}
                        value={this.state.otp}
                        isInputNum
                      />
                      {/* <Input
                        dir="rtl"
                        title="کد تایید"
                        required
                        error={errors.otp && touched.otp && errors.otp}
                        name="otp"
                        type="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.otp}
                        minLength={1}
                        maxLength={5}
                      /> */}
                    </div>
                    {this.renderOtpResendCode()}
                    <div className="m-t-24">
                      <Button
                        onClick={() => {
                          this.onFormSubmitEnterOtp();
                        }}
                        isDisabled={this.state.otp.length !== 5}
                        isLoading={this.state.isLoading}
                        color="red"
                        type="submit"
                        radius="radius16"
                        size="large"
                        className="col-9 m-auto d-flex flex-y-center flex-x-center">
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

export default withRouter(OtpValidationPageContainer);
