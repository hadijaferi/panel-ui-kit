import React, { Component, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import Style from "./Pagination.module.sass";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";
import Button from "../Button/Button";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import { IPagination } from "../../../../infrastructure/Models/IPagination";
import Icon from "../Icon/Icon";

interface IPaginationProps extends IBaseComponentProps {
  pagination: IPagination;
  onPageChange: (pagination: IPagination) => void;
  loading?: boolean;
}

class Pagination extends Component<IPaginationProps> {
  renderPagination = () => {
    const { pagination, onPageChange } = this.props;
    const lastPage = Math.ceil(pagination?.TotalItems / pagination?.PageSize);

    if (pagination?.TotalPages === 0) {
      return null;
    }
    return (
      <div className="d-flex flex-y-center">
        <Button
          theme="bordered"
          onClick={() => onPageChange({ ...pagination, PageIndex: 1 })}
          isDisabled={pagination?.PageIndex <= 1}
          size="small">
          <span className="p-x-8">اولین</span>
        </Button>
        <Button
          theme="bordered"
          className={generateClassName([Style.buttonPagination, "m-x-8"])}
          onClick={() =>
            onPageChange({
              ...pagination,
              PageIndex: pagination?.PageIndex - 1,
            })
          }
          size="small"
          isDisabled={pagination?.PageIndex <= 1}>
          <Icon name="chevron-right" className={Style.iconPagination} />
        </Button>
        <div className="d-flex flex-y-center">
          <span className="m-x-8">
            <span>(</span>
            <span>از </span>
            <span>{this.props.pagination?.TotalItems}</span>
            <span>)</span>
          </span>
          <span className="text-bold faNum">
            <span>
              {(pagination?.PageIndex - 1) * pagination?.PageSize + 1}
            </span>
            <span>-</span>
            <span>
              {pagination?.PageIndex * pagination?.PageSize >
              pagination?.TotalItems
                ? pagination?.TotalItems
                : pagination?.PageIndex * pagination?.PageSize}
            </span>
          </span>
        </div>
        <Button
          theme="bordered"
          onClick={() =>
            onPageChange({
              ...pagination,
              PageIndex: pagination?.PageIndex + 1,
            })
          }
          size="small"
          className={generateClassName([Style.buttonPagination, "m-x-8"])}
          isDisabled={pagination?.PageIndex >= lastPage}>
          <Icon name="chevron-left" className={Style.iconPagination} />
        </Button>
        <Button
          theme="bordered"
          onClick={() => onPageChange({ ...pagination, PageIndex: lastPage })}
          isDisabled={pagination?.PageIndex >= lastPage}
          size="small">
          <span className="p-x-8">آخرین</span>
        </Button>
      </div>
    );
  };

  renderLoading = () => {
    return (
      <div className="d-flex flex-y-center">
        <Skeleton width="54px" height="30px" className="m-x-8" />
        <Skeleton width="54px" height="30px" className="m-x-8" />
        <Skeleton width="60px" />
        <Skeleton width="54px" height="30px" className="m-x-8" />
        <Skeleton width="54px" height="30px" className="m-x-8" />
      </div>
    );
  };

  render(): ReactNode {
    const { loading = false } = this.props;
    return (
      <div
        className={generateClassName([Style.pagination, this.props.className])}>
        <div className="d-flex flex-x-between">
          {loading ? this.renderLoading() : this.renderPagination()}
        </div>
      </div>
    );
  }
}

export default Pagination;
