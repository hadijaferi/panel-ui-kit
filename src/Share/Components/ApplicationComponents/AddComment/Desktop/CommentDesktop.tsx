import React from "react";
import { Formik } from "formik";
import style from "./Desktop.module.sass";
import photoTest from "../test/image/product-test.jpg";
import Input from "../../../Common/Form/Input/Input";
import Textarea from "../../../Common/Form/Textarea/Textarea";
import vector from "../image/vectorComment.svg";
import Button from "../../../Common/Button/Button";
import Icon from "../../../Common/Icon/Icon";
import Comment from "../Hooks/AddComment";
import Checkbox from "../../../Common/Form/checkbox/Checkbox";
import Rating from "../../../Common/Rating/Rating";

export interface IAddCommentContainerDesktopProps {
  entityId: string | number;
}

const AddCommentDesktop = (props: IAddCommentContainerDesktopProps) => {
  const LogicComment = Comment({ productId: props.entityId });

  return (
    <section className={style.detailWrapper}>
      <div className="container">
        <div className="d-flex flex-column">
          <div className="col-6">
            <div className={style.productInfo}>
              <div className={style.wrapper}>
                <div className="m-l-8 p-16">
                  <img src={photoTest} alt="" />
                </div>
                <div>
                  <div className="m-b-32">
                    <div className="fontWeight-700 fontSize-20 m-b-4">
                      {LogicComment.product?.Name}
                    </div>
                    <div className="colorGray-5e5e5e">
                      {LogicComment.product?.EnglishName}
                    </div>
                  </div>
                  <div className="m-block-start">
                    <Rating
                      justShow
                      rate={Number(LogicComment?.product?.CustomerRate)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-y-32" />
        <div className="d-flex flex-x-between">
          <div className="col-8">
            <div className="col-12">
              <Formik
                validationSchema={LogicComment.setSignupSchema}
                initialValues={{
                  title: "",
                  description: "",
                }}
                onSubmit={values => {
                  LogicComment.submitComment(values);
                  // this.onFormSubmitGetStatusUser(values.mobile);/*/
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
                    <div className="d-flex flex-x-between p-b-32">
                      <div>
                        <Rating
                          rate={LogicComment.rate}
                          onChange={e => {
                            LogicComment.onChangeRating(e);
                          }}
                        />
                        <span className="p-r-16">
                          امتیاز خود را به این محصول انتخاب کنید
                        </span>
                      </div>
                    </div>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      title="عنوان نظر شما"
                      name="title"
                      value={values.title}
                      error={errors.title && touched.title && errors.title}
                    />
                    <Textarea
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.description &&
                        touched.description &&
                        errors.description
                      }
                      name="description"
                      title="متن نظر شما"
                      style={{ height: "200px" }}
                      required
                      className="m-t-16"
                      value={values.description}
                    />
                    <div className="d-flex col-12 m-y-24 flex-x-between">
                      <Checkbox
                        title="ارسال دیدگاه به صورت ناشناس"
                        checked={LogicComment.isChecked}
                        onChange={() => {
                          LogicComment.onChangeCheckbox();
                        }}
                        // disabled={this.props.loading}
                      />
                      <Button
                        theme="text"
                        onClick={() => {
                          LogicComment.goBackAction();
                        }}>
                        <span>بازگشت به لیست نظرات</span>
                        <Icon name="arrow-left" className="p-r-8" />
                      </Button>
                    </div>
                    <Button
                      isLoading={LogicComment.isLoading}
                      color="red"
                      type="submit"
                      radius="radius16"
                      size="large"
                      className="col-4">
                      <span>ارسال نظر</span>
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-4 p-x-32 p-t-64">
            <div className="card card__colorGray p-24">
              <span className="fontSize-14 fontWeight-500 ">
                قوانین ارسال نظر
              </span>
              <ul className={style.ulComment}>
                <li>
                  محتوای ارسالی باید مطایق با عرف و شئونات جامعه باشد و به شخص
                  خاصی توهین نشود.
                </li>
                <li className="m-t-16">
                  دقت داشته باشید تا جای ممکن از هرگونه لینک ‌دادن و فرستادن
                  دیگر کاربران به سایت‌های دیگر و درج ایمیل یا نام کاربری
                  شبکه‌های اجتماعی خودداری کنید.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className={style.vector}>
              <img src={vector} title="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCommentDesktop;
