import React, { forwardRef, useRef, useState } from "react";
import { Formik } from "formik";
import Page from "../../../Mobile/Page/Page";
import Toolbar from "../../../Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../../Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../../Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import style from "./Mobile.module.sass";
import photoTest from "../test/image/product-test.jpg";
import Rating from "../../../Common/Rating/Rating";
import Comment, { IAddCommentReturn } from "../Hooks/AddComment";
import generateClassName from "../../../../Helpers/Dom/generateClassName";
import Button from "../../../Common/Button/Button";
import Icon from "../../../Common/Icon/Icon";
import Checkbox from "../../../Common/Form/checkbox/Checkbox";
import Textarea from "../../../Common/Form/Textarea/Textarea";
import Input from "../../../Common/Form/Input/Input";
import BottomNavigation from "../../../Mobile/BottomNavigation/BottomNavigation";
import BottomSheet from "../../../Mobile/BottomSheet/BottomSheet";

interface IProductDetailsAddCommentProps {
  backToCommentList: () => void;
  LogicComment: IAddCommentReturn;
}

const ProductDetailsAddComment = forwardRef(
  (props: any | IProductDetailsAddCommentProps, ref: any) => {
    return (
      <div className={style.parentCustomContent}>
        <div
          className={generateClassName([
            style.parentProductDetails,
            "row p-t-24 p-x-24",
          ])}>
          <div className="col-3">
            <img src={photoTest} alt="" />
          </div>
          <div className="col-9">
            <div className="fontWeight-700 fontSize-14 m-x-16 ">
              {props.LogicComment?.product?.Name}
            </div>
            <div className="colorGray-5e5e5e  m-x-16">
              {props.LogicComment?.product?.EnglishName}
            </div>
            <div className="m-block-start  m-x-16">
              <Rating
                justShow
                className="p-b-16"
                rate={Number(props.LogicComment?.product?.CustomerRate)}
              />
            </div>
          </div>
          <hr />
          <div className=" col-12  p-t-24">
            <span className="colorGray-5e5e5e fontWeight-500 fontSize-14">
              امتیاز خود را به این واحد تجاری انتخاب کنید
            </span>
            <div className=" d-flex flex-x-center">
              <Formik
                validationSchema={props.LogicComment.setSignupSchema}
                initialValues={{
                  title: "",
                  description: "",
                }}
                onSubmit={values => {
                  props.LogicComment.submitComment(values);
                }}>
                {({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form
                    ref={ref}
                    noValidate
                    onSubmit={handleSubmit}
                    className="col-12">
                    <div className="d-flex flex-x-between p-b-32">
                      <div>
                        <Rating
                          rate={props.LogicComment.rate}
                          onChange={e => {
                            props.LogicComment.onChangeRating(e);
                          }}
                        />
                      </div>
                    </div>
                    <Input
                      className="col-12"
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
                      style={{ height: "100px" }}
                      required
                      className="m-t-16"
                      value={values.description}
                    />
                    <div className="p-y-16">
                      <Checkbox
                        title="ارسال دیدگاه به صورت ناشناس"
                        checked={props.LogicComment.isChecked}
                        onChange={() => {
                          props.LogicComment.onChangeCheckbox();
                        }}
                        // disabled={this.props.loading}
                      />
                    </div>

                    <div className="d-flex  m-y-24 flex-x-between">
                      <Button
                        theme="text"
                        onClick={() => {
                          props.backToCommentList();
                        }}>
                        <span>بازگشت به لیست نظرات</span>
                        <Icon name="arrow-left" className="p-r-8" />
                      </Button>
                      <Button
                        theme="text"
                        onClick={() => {
                          props.setBottomSheetOpen(true);
                        }}>
                        <span className="colorBlue">
                          مطالعه قوانین ارسال نظر
                        </span>
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
  },
);

interface AddCommentMobileProps {
  entityId: number;
  backAction: () => void;
}

const AddCommentMobile = (props: AddCommentMobileProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const LogicComment = Comment({ productId: props?.entityId });

  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  return (
    <Page
      bottomSheet={() => (
        <>
          <BottomSheet isOpen={bottomSheetOpen} onToggle={setBottomSheetOpen}>
            <div className="p-16">
              <div className=" p-24">
                <span className="fontSize-14 fontWeight-700 ">
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
          </BottomSheet>
        </>
      )}
      bottomNavigation={() => (
        <BottomNavigation>
          <Button
            isLoading={LogicComment.isLoading}
            onClick={() => {
              if (bottomSheetOpen) {
                setBottomSheetOpen(false);
              } else {
                formRef.current?.dispatchEvent(new Event("submit"));
              }
            }}
            color="red"
            type="submit"
            radius="radius16"
            size="large"
            className="col-12">
            <span> {!bottomSheetOpen ? "ارسال نظر" : "مطالعه کردم"}</span>
          </Button>
        </BottomNavigation>
      )}
      toolbar={() => (
        <Toolbar className="colorBlack">
          <ToolbarTitle
            title="افزودن نظر"
            rightMenuButton={
              <ToolbarButton icon="arrow-right" onClick={props.backAction} />
            }
          />
        </Toolbar>
      )}>
      <ProductDetailsAddComment
        backToCommentList={props.backAction}
        ref={formRef}
        setBottomSheetOpen={setBottomSheetOpen}
        LogicComment={LogicComment}
      />
    </Page>
  );
};

export default AddCommentMobile;
