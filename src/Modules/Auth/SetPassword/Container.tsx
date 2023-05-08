import React, { Component } from "react";
import { WithRouterProps } from "next/dist/client/with-router";
import * as Yup from "yup";
import { Formik } from "formik";
import { withRouter } from "next/router";
import SetPasswordPageService from "./Service";
import JwtService from "../../../Share/Services/JwtService";
import { LINKS } from "../../../Share/Constants/LINKS";
import style from "../../../../pages/auth/auth.module.sass";
import authLogo from "../../../Resources/image/authLogo.svg";
import Input from "../../../Share/Components/Common/Form/Input/Input";
import Button from "../../../Share/Components/Common/Button/Button";
import Icon from "../../../Share/Components/Common/Icon/Icon";

interface SetPasswordPageContainerStates {
  isLoading: boolean;
  token: string;
}

interface SetPasswordPageContainerProps extends WithRouterProps {
  LoadProfileInfo?: () => Promise<any>;
}

const SignupSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, "حداقل 6 کاراکتر وارد کنید")
    .max(64, "حداکثر 64 کاراکتر میتوانید وارد کنید")
    // .matches(
    //   REGEX.PASSWORD,
    //   "پسورد باید حداقل 8 کاراکتر و شامل حروف بزرگ , کوچک واعداد و !@#$%^&* باشد",
    // )
    .required("لطفا پسورد جدید را وارد کنید"),
});
class SetPasswordPageContainer extends Component<
  SetPasswordPageContainerProps,
  SetPasswordPageContainerStates
> {
  state: SetPasswordPageContainerStates = {
    isLoading: false,
    token: this.props.router.query?.token?.toString() || "",
  };

  onFormSubmitEnterNewPassword = (newPassword: string) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        SetPasswordPageService.changePassword({
          Token: this.state.token,
          Password: newPassword,
          errorNotification: true,
        })
          .then(res => {
            if (res?.data.IsSuccess) {
              JwtService.saveToken(res?.data?.Data?.Token);
              this.props.router.push(LINKS.MAIN);
            }
          })
          .catch(e => {
            if (e.response?.data?.Data?.Code === 2) {
              this.props.router.push(LINKS.AUTH.LOGIN);
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
            <div className={style.title}>ثبت رمز عبور جدید</div>
            <div className="card p-y-32">
              <Formik
                validationSchema={SignupSchema}
                initialValues={{
                  newPassword: "",
                }}
                onSubmit={values => {
                  this.onFormSubmitEnterNewPassword(values.newPassword);
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
                        icon="m-password"
                        title="رمز عبور جدید"
                        dir="rtl"
                        required
                        error={
                          errors.newPassword &&
                          touched.newPassword &&
                          errors.newPassword
                        }
                        name="newPassword"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newPassword}
                        minLength={6}
                        maxLength={64}
                      />
                    </div>
                    <div className="m-t-24">
                      <Button
                        // isDisabled={!!errors?.newPassword}
                        isLoading={this.state.isLoading}
                        color="red"
                        type="submit"
                        size="large"
                        radius="radius16"
                        className="col-9 m-auto p-t-24 d-flex flex-y-center flex-x-center">
                        <Icon name="m-login" className="m-l-8" size="large" />
                        <span>ثبت و ورود</span>
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

export default withRouter(SetPasswordPageContainer);
