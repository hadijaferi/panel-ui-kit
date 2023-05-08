import React, { Component } from "react";
import { WithRouterProps } from "next/dist/client/with-router";
import * as Yup from "yup";
import { withRouter } from "next/router";
import { Formik } from "formik";
import RegisterPageService from "./Service";
import JwtService from "../../../Share/Services/JwtService";
import { LINKS } from "../../../Share/Constants/LINKS";
import style from "../../../../pages/auth/auth.module.sass";
import authLogo from "../../../Resources/image/authLogo.svg";
import Icon from "../../../Share/Components/Common/Icon/Icon";
import Input from "../../../Share/Components/Common/Form/Input/Input";
import Button from "../../../Share/Components/Common/Button/Button";

interface IRegisterPageContainerStates {
  isLoading: boolean;
  token: string;
}

interface IRegisterPageContainerProps extends WithRouterProps {
  LoadProfileInfo?: () => Promise<any>;
}

class RegisterPageContainer extends Component<
  IRegisterPageContainerProps,
  IRegisterPageContainerStates
> {
  state: IRegisterPageContainerStates = {
    isLoading: false,
    token: this.props.router.query.token.toString(),
  };

  SignupSchema = Yup.object().shape({
    gender: Yup.number().required("fuck you"),
    fName: Yup.string().required("لطفا نام را وارد کنید"),
    lName: Yup.string().required("لطفا نام خانوادگی را وارد کنید"),
    password: Yup.string()
      .min(6, "حداقل 6 کاراکتر وارد کنید")
      .max(64, "حداکثر 64 کاراکتر میتوانید وارد کنید")
      // .matches(
      //   REGEX.PASSWORD,
      //   "پسورد باید حداقل 8 کاراکتر و شامل حروف بزرگ , کوچک واعداد و !@#$%^&* باشد",
      // )
      .required("لطفا پسورد را وارد کنید"),
  });

  componentDidMount() {
    RegisterPageService.getTokenGuest({}).then(res => {
      if (res.data.IsSuccess) {
        JwtService.saveToken(res?.data?.Data?.Token);
      }
    });
  }

  registerCustomerSubmit = (
    firstName: string,
    lastName: string,
    gender: number,
    password: string,
    // companyName: string,
  ) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const body = {
          Token: String(this.state.token),
          Password: password,
          FirstName: firstName,
          LastName: lastName,
          Gender: gender,
          errorNotification: true,
        };
        RegisterPageService.registerCustomer(body)
          .then(res => {
            if (res?.data?.IsSuccess) {
              JwtService.saveToken(res.data.Data.Token);
              // this.sendOtp(mobile);
              this.props.router.push(LINKS.MAIN);
            }
            throw new Error("hideLoading");
          })
          .catch(e => {
            if (e.response?.data?.Data?.Code === 2) {
              this.props.router.push(LINKS.AUTH.LOGIN);
            }

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
            <div className={style.title}> ثبت نام</div>
            <div className="card p-32">
              <Formik
                validationSchema={this.SignupSchema}
                initialValues={{
                  lName: "",
                  fName: "",
                  gender: 1,
                  password: "",
                }}
                onSubmit={values => {
                  this.registerCustomerSubmit(
                    values.fName,
                    values.lName,
                    values.gender,
                    values.password,
                  );
                }}>
                {({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="m-auto">
                      <div className="row">
                        <div className="col-6 m-b-16">
                          <label className={style.selectorItem}>
                            <input
                              name="gender"
                              type="radio"
                              value={1}
                              checked={values.gender === 1}
                              onChange={() => setFieldValue("gender", 1)}
                            />
                            <Icon name="male" size="large" className="m-l-8" />
                            <span className={style.selectorItemTitle}>آقا</span>
                          </label>
                        </div>
                        <div className="col-6 m-b-16">
                          <label className={style.selectorItem}>
                            <input
                              name="gender"
                              type="radio"
                              value={2}
                              checked={values.gender === 2}
                              onChange={() => setFieldValue("gender", 2)}
                            />
                            <Icon
                              name="female"
                              size="large"
                              className="m-l-8"
                            />
                            <span className={style.selectorItemTitle}>
                              خانم
                            </span>
                          </label>
                        </div>
                        <div className="col-5 m-b-16">
                          <Input
                            icon="m-profile"
                            dir="rtl"
                            title="نام"
                            required
                            error={
                              errors.fName && touched.fName && errors.fName
                            }
                            name="fName"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fName}
                            minLength={1}
                            maxLength={50}
                          />
                        </div>
                        <div className="col-7 m-b-16">
                          <Input
                            icon="m-profile"
                            dir="rtl"
                            title="نام خانوادگی"
                            required
                            error={
                              errors.lName && touched.lName && errors.lName
                            }
                            name="lName"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lName}
                            minLength={1}
                            maxLength={50}
                          />
                        </div>
                        <div className="col-12 m-b-16">
                          <Input
                            icon="m-password"
                            dir="rtl"
                            title="رمز عبور"
                            required
                            error={
                              errors.password &&
                              touched.password &&
                              errors.password
                            }
                            name="password"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            minLength={6}
                            maxLength={64}
                          />
                        </div>
                        <div className="col-12">
                          <Button
                            isLoading={this.state.isLoading}
                            color="red"
                            type="submit"
                            radius="radius16"
                            size="large"
                            className="col-12 m-auto d-flex flex-y-center flex-x-center">
                            <Icon
                              name="log-in"
                              className="m-l-8"
                              size="large"
                            />
                            <span>ثبت و ورود</span>
                          </Button>
                        </div>
                      </div>
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

export default withRouter(RegisterPageContainer);
