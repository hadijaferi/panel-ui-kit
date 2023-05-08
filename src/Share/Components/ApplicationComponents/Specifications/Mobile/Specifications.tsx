import React, { useState } from "react";
import style from "./Specifications.module.sass";
import Button from "../../../Common/Button/Button";
import { IFeaturedSpecificationAttributes } from "../../../../../infrastructure/Models/Entity/IFeaturedSpecificationAttributes";
import OverPage from "../../../Mobile/OverPage/OverPage";
import Page from "../../../Mobile/Page/Page";
import Toolbar from "../../../Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../../Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../../Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import ToolbarMenu from "../../../Mobile/Toolbar/Components/ToolbarMenu/ToolbarMenu";
import generateClassName from "../../../../Helpers/Dom/generateClassName";

export interface ISpecificationsProps {
  specifications: IFeaturedSpecificationAttributes[];
  title: string;
}

const SpecificationsMobile = (props: ISpecificationsProps) => {
  const [seeAll, onSeeAllChange] = useState(false);
  return props.specifications.length ? (
    <div className="card card__noRadius p-y-16 m-b-32 m-t-16">
      <div className="container">
        <div className="d-flex flex-x-between flex-y-center m-b-24">
          <div className="fontSize-16 fontWeight-700">{props.title}</div>
          <Button
            theme="text"
            color="blue"
            className="fontWeight-500"
            onClick={() => onSeeAllChange(true)}>
            مشاهده همه
          </Button>
        </div>
        <ul className={style.specificationListStep}>
          {props.specifications.map(
            (specification, index) =>
              index < 3 && (
                <li key={`specification${specification.Id}`}>
                  <span>{specification.Name} : </span>
                  <span>{specification.Values.join("،")}</span>
                </li>
              ),
          )}
        </ul>
      </div>
      <OverPage isOpen={seeAll} onToggle={() => onSeeAllChange(false)} fixed>
        <Page
          toolbar={() => (
            <Toolbar>
              <ToolbarTitle title="مشخصات محصول" />
              <ToolbarMenu>
                <ToolbarButton
                  icon="close"
                  onClick={() => onSeeAllChange(false)}
                />
              </ToolbarMenu>
            </Toolbar>
          )}>
          <div className={style.fixedBg}>
            <div className={style.scroll}>
              <ul
                className={generateClassName([
                  style.specificationListStepMobile,
                  "p-16",
                ])}>
                {props.specifications.map(specification => (
                  <li key={`specificationOverPage${specification.Id}`}>
                    <span>{specification.Name} : </span>
                    <span>{specification.Values.join("،")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Page>
      </OverPage>
    </div>
  ) : null;
};

export default SpecificationsMobile;
