import React, { Component } from "react";
import style from "../../Style.module.sass";
import avatar from "../../../../../../Resources/image/defaultAvatar.jpg";

class PicturesContainer extends Component {
  render() {
    return (
      <div className={style.sendingItemProduct}>
        <ul className="row">
          <li className="col-2">
            <img src={avatar} className="m-b-8" />
            <div className="d-flex flex-x-between">
              <div className="tag_color">
                <span
                  className="tag_color__icon"
                  style={{ backgroundColor: "#7ca" }}
                />
                فیروزه ای
              </div>
              <span>2 عدد</span>
            </div>
          </li>
          <li className="col-2">
            <img src={avatar} className="m-b-8" />
            <div className="d-flex flex-x-between">
              <div className="tag_color">
                <span
                  className="tag_color__icon"
                  style={{ backgroundColor: "#c1c1c1" }}
                />
                فیروزه ای
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default PicturesContainer;
