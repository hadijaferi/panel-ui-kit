import React, { Component } from "react";
import { IPagination } from "../../../src/infrastructure/Models/IPagination";
import Pagination from "../../../src/Share/Components/Common/Pagination/Pagination";

interface IPaginationPageState {
  pagination: IPagination;
}

class PaginationPage extends Component<{}, IPaginationPageState> {
  state: IPaginationPageState = {
    pagination: {
      PageIndex: 1,
      MaxPageSize: 100,
      PageSize: 10,
      TotalItems: 1002,
      TotalPages: 1000,
    },
  };

  render() {
    return (
      <div className="m-16">
        <Pagination
          pagination={this.state.pagination}
          loading
          onPageChange={pagination => {
            this.setState({ pagination });
          }}
        />
      </div>
    );
  }
}

export default PaginationPage;
