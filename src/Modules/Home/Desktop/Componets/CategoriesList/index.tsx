import React from "react";
import Link from "next/link";
import Style from "./CategoriesList.module.sass";
import { IHomePageCategory } from "../../../Models/HomePageCategories/IHomePageCategory";
import loadingPhoto from "../../../../../Resources/image/categoryDefaultPhoto.svg";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";

interface IBoxProps {
  name: string;
  count: number;
  categoryId: number;
  imageUrl: string;
}

interface ICategoryListProps {
  ProductsCategories: IHomePageCategory[];
  ServicesCategories: IHomePageCategory[];
}

const CategoriesList = ({
  ProductsCategories,
  ServicesCategories,
}: ICategoryListProps) => {
  const Box = ({ name, count, categoryId, imageUrl }: IBoxProps) => (
    <Link href={`search/${categoryId}`}>
      <a
        style={{ background: `url(${imageUrl}) center / cover no-repeat` }}
        className={Style.acBox}>
        <div className={generateClassName([Style.content, "m-block-start"])}>
          <span>{name}</span>
          <span>{`${count} محصول`}</span>
        </div>
      </a>
    </Link>
  );

  return (
    <div className={Style.parent}>
      <div className={Style.root}>
        <div className={Style.boxesWrapper}>
          {ProductsCategories.map(item => (
            <Box
              key={`category${item.Id}`}
              name={item.Name}
              count={item.Count}
              categoryId={item.Id}
              imageUrl={item.Picture.Url || loadingPhoto}
            />
          ))}
        </div>
        <div className={Style.boxesWrapper}>
          {ServicesCategories.map(item => (
            <Box
              key={`category${item.Id}`}
              name={item.Name}
              count={item.Count}
              categoryId={item.Id}
              imageUrl={item.Picture.Url || loadingPhoto}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
