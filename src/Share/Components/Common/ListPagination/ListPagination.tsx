import React, { Component, ReactNode } from "react";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import style from "./ListPagination.module.sass";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";
import Button from "../Button/Button";
import { IPagination } from "../../../../infrastructure/Models/IPagination";
import Icon from "../Icon/Icon";

interface IListPaginationProps extends IBaseComponentProps {
  pagination: IPagination;
  onPaginationChange: (pagination: IPagination) => void;
}

interface PaginationItem {
  text: number;
  number: number;
}

class ListPagination extends Component<IListPaginationProps> {
  getPaginationButtons = (): Array<PaginationItem> => {
    const PageIndex = this.props?.pagination?.PageIndex || 0;
    const TotalItems = this.props?.pagination?.TotalItems || 0;
    const PageSize = this.props?.pagination?.PageSize || 0;

    // when problem in occur ================================
    if (TotalItems === 0) {
      return [];
    }
    // ======================================================
    const totalPageSize: number = Math.ceil(TotalItems / PageSize);
    const paginationButtons: Array<PaginationItem> = [];
    // use -1 for prev button
    if (PageIndex !== 1) {
      paginationButtons.push({
        text: -1,
        number: PageIndex - 1,
      });
    }
    // ---------------------------------------------
    // this code for ... button and other number button
    for (let index = 1; index <= totalPageSize; index += 1) {
      // this code for page 1 and final page
      if (
        index === 1 ||
        (index === totalPageSize - 1 && totalPageSize === 4) ||
        (index === totalPageSize - 2 && totalPageSize === 4) ||
        index === totalPageSize ||
        (PageIndex - 2 < index && index < PageIndex + 2)
      ) {
        paginationButtons.push({
          text: index,
          number: index,
        });
      } else if (PageIndex - 2 === index || PageIndex + 2 === index) {
        paginationButtons.push({ text: 0, number: 0 });
      }
    }
    // -------------------------------------------
    // use -2 for next button
    if (PageIndex !== totalPageSize) {
      paginationButtons.push({
        text: -2,
        number: PageIndex + 1,
      });
    }
    // -------------------------------------------
    return paginationButtons;
  };

  onPaginationChange = (PageIndex: number) => {
    const pagination: IPagination = {
      PageIndex,
      TotalPages: this.props?.pagination?.TotalPages,
      TotalItems: this.props?.pagination?.TotalItems,
      PageSize: this.props?.pagination?.PageSize,
      MaxPageSize: this.props?.pagination?.MaxPageSize,
    };
    this.props.onPaginationChange(pagination);
  };

  render(): ReactNode {
    const items: Array<PaginationItem> = this.getPaginationButtons();
    const PageIndex = this.props?.pagination?.PageIndex || 0;
    const TotalItems = this.props?.pagination?.TotalItems || 0;
    const PageSize = this.props?.pagination?.PageSize || 0;
    return (
      <ul
        className={generateClassName([
          style.listPaginationStep,
          this.props.className,
        ])}>
        {items.map((itemsDetails: PaginationItem, index) =>
          itemsDetails.number !== 0 ? (
            <li
              key={`${PageIndex}${TotalItems}${PageSize}${index}`}
              className={generateClassName([
                PageIndex === itemsDetails.text ? style.active : "",
              ])}>
              {itemsDetails.text === -1 && (
                <Button
                  theme="iconic"
                  onClick={() => this.onPaginationChange(itemsDetails.number)}>
                  <Icon name="chevron-right" size="large" />
                </Button>
              )}
              {itemsDetails.text === -2 && (
                <Button
                  theme="iconic"
                  onClick={() => this.onPaginationChange(itemsDetails.number)}>
                  <Icon name="chevron-left" size="large" />
                </Button>
              )}
              {itemsDetails.text > 0 && (
                <Button
                  theme="text"
                  onClick={() => this.onPaginationChange(itemsDetails.number)}
                  className={generateClassName([
                    style.item,
                    itemsDetails.number === PageIndex && style.active,
                  ])}>
                  <span>{itemsDetails.text}</span>
                </Button>
              )}
            </li>
          ) : (
            <li
              key={`paginationItem${index}`}
              className={generateClassName([style.item])}>
              ...
            </li>
          ),
        )}
      </ul>
    );
  }
}

export default ListPagination;
