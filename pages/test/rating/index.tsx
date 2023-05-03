import React from "react";
import Rating from "../../../src/Share/Components/Common/Rating/Rating";

 const RatingTest =()=> {
    return (
      <div className="container m-t-32">
        <div className="row flex-x-around">
          <div className="col-6">
            <div className="card p-32 m-b-16">
              <a href="#" className="chips">
                اسکسکوری
              </a>
              <a href="#" className="chips chips__blue">
                اسکسکوری
              </a>
              <a href="#" className="chips chips__large">
                اسکسکوری
              </a>
              <a href="#" className="chips chips__red">
                اسکسکوری
              </a>
              <a href="#" className="chips chips__green">
                اسکسکوری
              </a>
            </div>
            <div className="card p-32 m-b-16">
              <div className="fontSize-24 fontWeight-700 m-b-16">ابعاد</div>
              <div className="row">
                <div className="col-4 m-b-24">
                  بزرگ
                  <Rating rate={3} size="large" />
                </div>
                <div className="col-4 m-b-24">
                  متوسط
                  <Rating rate={3} />
                </div>
                <div className="col-4 m-b-24">
                  کوچک
                  <Rating rate={3} size="small" />
                </div>
                <div className="col-4">
                  بزرگ
                  <Rating rate={3} size="large" squareIcon />
                </div>
                <div className="col-4">
                  متوسط
                  <Rating rate={3} squareIcon />
                </div>
                <div className="col-4">
                  کوچک
                  <Rating rate={3} size="small" squareIcon />
                </div>
              </div>
            </div>
            <div className="card p-32" style={{ marginBottom: "1000px" }}>
              <div className="fontSize-24 fontWeight-700 m-b-16">حالت ها</div>
              <div className="d-flex">
                <div className="col-4">
                  فقط نمایش
                  <Rating rate={3} justShow />
                </div>
                <div className="col-8">
                  <Rating rate={3}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default RatingTest


