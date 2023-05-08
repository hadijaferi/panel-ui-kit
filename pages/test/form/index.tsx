import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../../../src/Share/Components/Common/Form/Input/Input";
import Select from "../../../src/Share/Components/Common/Form/Select/Select";
import RadioButton from "../../../src/Share/Components/Common/Form/RadioButton/RadioButton";
import Button from "../../../src/Share/Components/Common/Button/Button";
import Textarea from "../../../src/Share/Components/Common/Form/Textarea/Textarea";
import InputOtp from "../../../src/Share/Components/Common/Form/InputOtp/InputOtp";
import Checkbox from "../../../src/Share/Components/Common/Form/checkbox/Checkbox";

const SignupSchema = Yup.object().shape({
  gender: Yup.number(),
  topics: Yup.array().nullable().required("سلام"),
  num: Yup.number(),
});

export default class Index extends Component {
  render() {
    const options = [
      { value: "1", label: "blue" },
      { value: "2", label: "red" },
      { value: "3", label: "yellow" },
      { value: "4", label: "orange" },
      { value: "5", label: "green" },
    ];
    return (
      <div className="container m-t-32">
        <Formik
          validationSchema={SignupSchema}
          initialValues={{
            topics: null,
            gender: 0,
            user: "",
            num: null,
            num3: null,
            otp: "",
            suffixField: "",
            password: "",
          }}
          onSubmit={_values => {}}>
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldTouched,
            setFieldValue,
          }) => (
            <div className="container">
              <form noValidate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-4">
                    <div className="card p-24 m-b-16">
                      <InputOtp
                        onChange={() => {}}
                        numInputs={5}
                        // value={this.state.otp}
                      />
                    </div>
                    <div className="card p-24">
                      <div>
                        <RadioButton
                          parentValue={values.gender}
                          error={
                            errors.gender && touched.gender && errors.gender
                          }
                          name="gender"
                          onCheck={setFieldValue}
                          value={1}
                          title="انتخاب"
                        />
                      </div>
                      <div>
                        <RadioButton
                          parentValue={values.gender}
                          error={
                            errors.gender && touched.gender && errors.gender
                          }
                          name="gender"
                          onCheck={setFieldValue}
                          value={2}
                          title="نانتخاب"
                        />
                      </div>
                      <hr className="m-y-16" />
                      <div>
                        <Checkbox title="ورزشی" />
                      </div>
                      <div>
                        <Checkbox theme="slide" title="ورزشی" />
                      </div>
                    </div>
                    <Button
                      radius="radius16"
                      color="red"
                      className="col-12 m-t-16"
                      size="medium">
                      ثبت اطلاعات
                    </Button>
                  </div>
                  <div className="col-4">
                    <div className="card p-24 h100">
                      <div className="m-b-16">
                        <Input
                          dir="rtl"
                          title="شماره موبایل"
                          placeholder="مثال 09390706077"
                          required
                          name="num"
                          type="tel"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          minLength={10}
                          maxLength={10}
                        />
                      </div>
                      <div className="m-b-16">
                        <Input
                          dir="rtl"
                          title="شماره موبایل خود را وارد کنید"
                          placeholder=" متن بالا تست"
                          required
                          name="num3"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="m-b-16">
                        <Input
                          dir="rtl"
                          title="دارای پیش متن"
                          prefix="قیمت را اینجا تایپ کنید"
                          placeholder=" متن بالا تست"
                          required
                          // name="num3"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="m-b-16">
                        <Input
                          dir="rtl"
                          value={values.suffixField}
                          title="دارای پس متن"
                          suffix="تومان"
                          placeholder=" متن بالا تست"
                          required
                          name="suffixField"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="m-b-16">
                        <Input
                          icon="loading"
                          dir="rtl"
                          title="دارای آیکون"
                          suffix="تومان"
                          placeholder="مقدار تخفیف درخواستی خود را وارد کنید"
                          required
                          // name="num3"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="m-b-16">
                        <Input
                          type="password"
                          title="رمز عبور"
                          required
                          name="password"
                          value={values.password}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card p-24 h100">
                      <div className="m-b-16">
                        <Select
                          isMulti
                          id="10"
                          name="topics"
                          options={options}
                          value={values.topics}
                          onChange={setFieldValue}
                          onBlur={setFieldTouched}
                        />
                        {errors.topics && touched.topics && errors.topics}
                      </div>
                      <div className="m-b-16">
                        <Select
                          isMulti
                          id="12"
                          name="topics"
                          options={options}
                          value={values.topics}
                          onChange={setFieldValue}
                          onBlur={setFieldTouched}
                        />
                      </div>
                      <div className="m-b-16">
                        <Textarea
                          title="آدرس طولانی"
                          rows={5}
                          icon="pin"
                          prefix="تهران"
                          placeholder="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}
