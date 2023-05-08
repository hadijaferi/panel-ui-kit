import React, { Component } from "react";
import Link from "next/link";
import style from "./Desktop.module.sass";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import Button from "../../../../Share/Components/Common/Button/Button";
import {
  ISearchCategoryChildList,
  ISearchCategoryListProps,
} from "./Models/ISearchCategoryListProps";
import Icon from "../../../../Share/Components/Common/Icon/Icon";

class SearchCategoryListDesktop extends Component<ISearchCategoryListProps> {
  categoryUi = (category: ISearchCategoryChildList): React.ReactNode => {
    if (category?.Child === undefined) {
      return (
        <div>
          <ul>
            <li>
              {category?.Categories?.map(cate =>
                cate.IsChecked ? (
                  <Button
                    theme="forButtonLink"
                    className="fontWeight-700 m-b-8"
                    key={`catalog${cate.Name}`}>
                    <span>{cate.Name}</span>
                    <Icon name="chevron-down" size="medium" className="m-x-8" />
                  </Button>
                ) : (
                  <Link href="">
                    <a
                      className="d-block"
                      href={`/search/${cate.Id}`}
                      key={`catalog${cate.Name}`}>
                      {cate.Name}
                    </a>
                  </Link>
                ),
              )}
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div>
        <ul>
          <li>
            <Button theme="forButtonLink" className="m-b-8">
              <span>{category.Name}</span>
              <Icon name="chevron-left" className="m-x-8" />
            </Button>
            <div className="p-x-16">{this.categoryUi(category.Child)}</div>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div className={generateClassName([style.acCategoryList, "card"])}>
        <div className={style.head}>
          <div>دسته بندی نتایج</div>
        </div>
        <div className="p-16">
          {this.categoryUi(this.props.categoriesChild)}
        </div>
        {this.props.categoryLength > 10 && (
          <div className={style.footer}>
            <Button theme="text" onClick={this.props.onSeeMoreChange}>
              {this.props.seeMore ? (
                <>
                  <Icon name="plus" size="small" className="m-l-4" />
                  <span>دسته بندی های بیشتر</span>
                </>
              ) : (
                <>
                  <Icon name="minus" size="small" className="m-l-4" />
                  <span>بستن</span>
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default SearchCategoryListDesktop;
