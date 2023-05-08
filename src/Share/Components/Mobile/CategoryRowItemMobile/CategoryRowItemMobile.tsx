import React from "react";
import Link from "next/link";
import Style from "./CategoryRowItemMobile.module.sass";
import loadingPhoto from "../../../../Resources/image/defaultStore.jpg";
import Image from "../../Common/Image/Image";

interface ICategoryRowItemMobile {
  photo: string;
  name: string;
  link: {
    href: string;
    as?: string;
  };
}

/**
 * CategoryRowItemMobile
 *
 * @param photo
 * @param name
 * @param link
 * @author Hadi Zare hadizareoriginal@gmail.com
 * @version 1.0.0
 */
const CategoryRowItemMobile = ({
  photo,
  name,
  link,
}: ICategoryRowItemMobile) => {
  return (
    <Link href={link.href} as={link?.as}>
      <div className={Style.acCategoryRowItemMobileWrapper}>
        <Image width={40} height={40} src={photo || loadingPhoto} alt={name} />
        <span className="text-center">{name}</span>
      </div>
    </Link>
  );
};

export default CategoryRowItemMobile;
