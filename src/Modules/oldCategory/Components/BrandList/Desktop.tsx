import React, { Component } from "react";
import style from "./Desktop.module.sass";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import Button from "../../../../Share/Components/Common/Button/Button";
import { ISearchBrandListProps } from "./Models/ISearchBrandListProps";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import Checkbox from "../../../../Share/Components/Common/Form/checkbox/Checkbox";

class SearchBrandListDesktop extends Component<ISearchBrandListProps> {
  render() {
    return (
      <div className={generateClassName([style.acBrandList, "card"])}>
        <div className={style.head}>برند ها</div>
        <div>
          <div className={style.search}>
            <Icon
              name="search"
              className="m-l-8 m-b-4 colorGray-979797"
              size="large"
            />
            <input
              type="search"
              placeholder="جستجو"
              value={this.props.search}
              onChange={e => this.props.onSearchChange(e.target.value)}
            />
          </div>
          <hr className="" />
          <ul
            className={generateClassName([
              style.listStep,
              style.scrollList,
                this.props.seeMore && style.active

            ])}>

                  {this.props.brands.map(brand => (
                      <li key={`${brand.Name}`}>
                          <Checkbox
                              title={brand.Name}
                              checked={brand.IsChecked}
                              onChange={() => this.props.onBrandChange(brand.Id)}
                          />
                      </li>
                  ))}
          </ul>
        </div>
        {this.props.totalBrand >= 7 && (
          <div className={style.footer}>
            <Button theme="text" onClick={this.props.onSeeMoreChange}>
              {this.props.seeMore ? (
                <>
                  <Icon name="minus" size="small" className="m-l-4" />
                  <span>بستن</span>
                </>
              ) : (
                <>
                  <Icon name="plus" size="small" className="m-l-4" />
                  <span>برند های بیشتر</span>
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBrandListDesktop;
