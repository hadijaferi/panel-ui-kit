import React, { Component } from "react";
import style from "./Selector.module.sass";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";

interface SelectorItem {
  value: string;
  color: string | null;
  title: string;
}

interface ISelectorProps {
  value: string;
  title?: string;
  className?: string;
  items: SelectorItem[];
  onChange: (value: string) => void;
}

class Selector extends Component<ISelectorProps> {
  render() {
    return (
      <div
        className={generateClassName([
          "d-flex flex-y-center",
          this.props.className,
        ])}>
        {this.props.title ? (
          <div className={generateClassName([style.MainTitle, "col-2 m-l-8"])}>
            {this.props.title}
          </div>
        ) : (
          <div />
        )}

        <div className="d-flex">
          {this.props.items.map((item, i) => (
            <div
              key={i}
              className={generateClassName([
                style.item,
                this.props.value === item.value && style.active,
              ])}
              onClick={() => {
                this.props.onChange(item.value);
              }}>
              {item.color && (
                <span
                  style={{ background: item.color }}
                  className={style.colorShow}
                />
              )}
              <span className={style.title}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Selector;
