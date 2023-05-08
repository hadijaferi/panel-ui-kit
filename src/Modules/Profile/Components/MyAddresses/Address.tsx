import React from "react";
import { IAddressProps } from "../../Models/MyAddresses/IAddressProps";
import Style from "./Address.module.sass";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import Button from "../../../../Share/Components/Common/Button/Button";

const Address = ({
  isDefault,
  userName,
  address,
  phoneNumber,
  postalCode,
}: IAddressProps) => {
  return (
    <div className={Style.acAddress}>
      <div className={Style.acAddress__header}>
        <div className={Style.right}>
          <Icon className={Style.icon} name="user-1" size="largest" />
          <span className={Style.name}>{userName}</span>
        </div>
        {isDefault && <span className={Style.left}>پیش فرض</span>}
      </div>
      <div className={Style.acAddress__body}>
        <div className={Style.row}>
          <Icon className={Style.icon} name="map-pin" size="large" />
          <span className={Style.text}>{address}</span>
        </div>
        <div className={Style.row}>
          <Icon className={Style.icon} name="mobile" size="large" />
          <span className={Style.text}>{phoneNumber}</span>
        </div>
        <div className={Style.row}>
          <Icon className={Style.icon} name="envelope" size="large" />
          <span className={Style.text}>{postalCode}</span>
        </div>
      </div>
      <ul className={Style.acAddress__footer}>
        {!isDefault && (
          <li>
            <Button theme="forButtonLink">انتخاب به عنوان آدرس پیش فرض</Button>
          </li>
        )}
        <li>
          <Button theme="forButtonLink">ویرایش</Button>
        </li>
        <li>
          <Button theme="forButtonLink">حذف</Button>
        </li>
      </ul>
    </div>
  );
};

export default Address;
