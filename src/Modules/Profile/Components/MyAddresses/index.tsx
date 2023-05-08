import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { Formik } from "formik";
import * as Yup from "yup";
import Address from "./Address";
import Style from "./MyAddressesContainer.module.sass";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import { ModalDefault } from "../../../../Share/Config/Modal/ModalDefault";
import Button from "../../../../Share/Components/Common/Button/Button";
import { IAddressProps } from "../../Models/MyAddresses/IAddressProps";
import Input from "../../../../Share/Components/Common/Form/Input/Input";
import Select from "../../../../Share/Components/Common/Form/Select/Select";
import StepOne from "./StepOne";

const MyAddressesContainer = () => {
  const [open, setOpen] = useState(false);
  const [stepNumber, setStepNumber] = useState(0);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [provinceOptions, setProvinceOptions] = useState([]);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [cityOptions, setPCityOptions] = useState([]);

  const formSchema = Yup.object().shape({
    // province: Yup.string().required("لطفا استان خود را وارد کنید"),
    // city: Yup.string().required("لطفا شهر خود را وارد کنید"),
    // fullAddress: Yup.string().required("لطفا آدرس کامل خود را وارد کنید"),
    buildingNumber: Yup.string().required("لطفا پلاک خود را وارد کنید"),
    floor: Yup.number().required("لطفا طبقه خود را وارد کنید"),
    houseNumber: Yup.string().required("لطفا واحد خود را وارد کنید"),
    postalCode: Yup.string().required("لطفا کدپستی خود را وارد کنید"),
    housePhoneNumber: Yup.string().required("لطفا شماره ثابت را وارد کنید"),
    name: Yup.string().required("لطفا نام خود را وارد کنید"),
    family: Yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
    nationalNumber: Yup.string().required("لطفا کد ملی خود را وارد کنید"),
    phoneNumber: Yup.string().required("لطفا شماره تماس خود را وارد کنید"),
  });

  const addresses: IAddressProps[] = [
    {
      address:
        "تهران، تهران، خیابان فرشته ، خیابان مریم غربی ، نبش نیلوفر ، مجتمع رویال آدرس، طبقه سوم، واحد 303",
      isDefault: true,
      phoneNumber: "09121234567",
      postalCode: "8915163658",
      userName: "محمد هادی زارع",
    },
    {
      address: "تهران، تهران، شهرک غزب",
      isDefault: false,
      phoneNumber: "09126547812",
      postalCode: "8915161234",
      userName: "احسان عظیم نیا",
    },
  ];

  const AddNewAddress = () => (
    <div className={Style.AddNewAddress} onClick={() => setOpen(true)}>
      <div>
        <Icon name="plus" size="largest" />
        <span>افزودن آدرس جدید</span>
      </div>
    </div>
  );

  const MapModal = () => (
    <Modal {...ModalDefault} open={open} onClose={() => setOpen(false)}>
      <div className="fontSize-16 fontWeight-700 m-b-32">افزودن نشانی جدید</div>
      <div className={Style.modalBody}>
        {stepNumber === 0 ? (
          <StepOne onClick={() => setStepNumber(1)} />
        ) : (
          <>
            <Formik
              validationSchema={formSchema}
              initialValues={{
                province: null,
                city: null,
                fullAddress: "",
                buildingNumber: "",
                floor: "",
                houseNumber: "",
                postalCode: "",
                housePhoneNumber: "",
                name: "",
                family: "",
                nationalNumber: "",
                phoneNumber: "",
              }}
              onSubmit={values => {
                console.log("onSubmit", values);
              }}>
              {({
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                setFieldTouched,
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6 m-b-16">
                      <Select
                        placeholder="استان"
                        isMulti={false}
                        name="province"
                        options={provinceOptions}
                        value={values.province}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                      />
                    </div>
                    <div className="col-6 m-b-16">
                      <Select
                        placeholder="شهر"
                        isMulti={false}
                        name="city"
                        options={cityOptions}
                        value={values.city}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                      />
                    </div>
                    <div className="col-12 m-b-16">
                      <Input
                        dir="rtl"
                        title="آدرس واحد تجاری"
                        required
                        error={
                          errors.fullAddress &&
                          touched.fullAddress &&
                          errors.fullAddress
                        }
                        name="fullAddress"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullAddress}
                        minLength={1}
                        maxLength={250}
                      />
                    </div>
                    <div className="col-4 m-b-16">
                      <Input
                        dir="rtl"
                        title="پلاک (اختیاری)"
                        required
                        error={
                          errors.buildingNumber &&
                          touched.buildingNumber &&
                          errors.buildingNumber
                        }
                        name="buildingNumber"
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.buildingNumber}
                        minLength={1}
                        maxLength={50}
                      />
                    </div>
                    <div className="col-4 m-b-16">
                      <Input
                        dir="rtl"
                        title="طبقه (اختیاری)"
                        required
                        error={errors.floor && touched.floor && errors.floor}
                        name="floor"
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.floor}
                        minLength={1}
                        maxLength={50}
                      />
                    </div>
                    <div className="col-4 m-b-16">
                      <Input
                        dir="rtl"
                        title="واحد (اختیاری)"
                        required
                        error={
                          errors.houseNumber &&
                          touched.houseNumber &&
                          errors.houseNumber
                        }
                        name="houseNumber"
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.houseNumber}
                        minLength={1}
                        maxLength={50}
                      />
                    </div>
                    <div className="col-6 m-b-16">
                      <Input
                        dir="rtl"
                        title="کد پستی"
                        required
                        error={
                          errors.postalCode &&
                          touched.postalCode &&
                          errors.postalCode
                        }
                        name="postalCode"
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.postalCode}
                        minLength={1}
                        maxLength={50}
                      />
                    </div>
                    <div className="col-6 m-b-16">
                      <Input
                        dir="rtl"
                        title="تلفن ثابت"
                        required
                        error={
                          errors.housePhoneNumber &&
                          touched.housePhoneNumber &&
                          errors.housePhoneNumber
                        }
                        name="housePhoneNumber"
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.housePhoneNumber}
                        minLength={1}
                        maxLength={50}
                      />
                    </div>
                    <div className="col-6 m-b-16">
                      <Input
                        dir="rtl"
                        title="نام"
                        required
                        error={errors.name && touched.name && errors.name}
                        name="name"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        minLength={1}
                        maxLength={50}
                      />
                    </div>
                    <div className="col-6 m-b-16">
                      <Input
                        dir="rtl"
                        title="نام خانوادگی"
                        required
                        error={errors.family && touched.family && errors.family}
                        name="family"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.family}
                        minLength={1}
                        maxLength={50}
                      />
                    </div>
                    <div className="col-6 m-b-16">
                      <Input
                        dir="rtl"
                        title="کد ملی"
                        required
                        error={
                          errors.nationalNumber &&
                          touched.nationalNumber &&
                          errors.nationalNumber
                        }
                        name="nationalNumber"
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nationalNumber}
                        minLength={1}
                        maxLength={50}
                      />
                    </div>
                    <div className="col-6 m-b-16">
                      <Input
                        dir="rtl"
                        title="شماره موبایل"
                        required
                        error={
                          errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber
                        }
                        name="phoneNumber"
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        minLength={1}
                        maxLength={50}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <Button
                      color="red"
                      type="submit"
                      radius="radius16"
                      size="large"
                      className="col-12 m-auto d-flex flex-y-center flex-x-center">
                      <span className="fontSize-18 fontWeight-700">
                        ذخیر نشانی
                      </span>
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
            <Button
              className="w100 flex-x-center"
              theme="forButtonLink"
              onClick={() => setStepNumber(0)}>
              <div className="colorBlue">
                <Icon name="map-pin" size="large" />
                <span className="m-r-8 fontSize-16 fontWeight-700">
                  اصلاح موقعیت بر روی نقشه
                </span>
              </div>
            </Button>
          </>
        )}
      </div>
    </Modal>
  );

  return (
    <div style={{ marginLeft: 8, marginRight: 8 }}>
      <div className="row">
        <div className="col-xl-6 col-4 m-b-16">
          <AddNewAddress />
        </div>
        {addresses.length > 0 &&
          addresses.map(address => (
            <div className="col-xl-6 col-4 m-b-16">
              <Address
                address={address.address}
                isDefault={address.isDefault}
                phoneNumber={address.phoneNumber}
                postalCode={address.postalCode}
                userName={address.userName}
              />
            </div>
          ))}

        <MapModal />
      </div>
    </div>
  );
};

export default MyAddressesContainer;
