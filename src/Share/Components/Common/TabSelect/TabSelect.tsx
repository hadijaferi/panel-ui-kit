import React, { PureComponent } from "react";
import { ITabSelectProps } from "./Models/ITabSelectProps";
import style from "./TabSelect.module.sass";
import Icon from "../Icon/Icon";
import generateClassName from "../../../Helpers/Dom/generateClassName";

interface TabSelectState {
  active: boolean;
}

class TabSelect extends PureComponent<ITabSelectProps, TabSelectState> {
  render() {
    return (
      <div
        className={generateClassName([
          style.titleCard,
          this.props.sticky && style.sticky,
          this.props.className,
        ])}>
        <div className="d-flex flex-y-center">
          {this.props.title && (
            <div className={style.title}>
              {this.props.icon && (
                <Icon name={this.props.icon} size="large" className="m-l-8" />
              )}
              {this.props.title}
            </div>
          )}
          <ul className={style.titleStep}>
            {this.props.item.map((item, index) => (
              <li
                className={generateClassName([
                  this.props.activeTab === item.id && style.active,
                ])}
                key={item.id}>
                <div
                  onClick={() => {
                    if (this.props.activeTab !== item.id) {
                      this.props.onChange(item.id || index);
                    }
                  }}>
                  {item.title}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TabSelect;
