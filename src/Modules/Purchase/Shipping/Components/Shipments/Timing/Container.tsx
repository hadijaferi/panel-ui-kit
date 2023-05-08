import React, { Component } from "react";
import style from "../../Style.module.sass";
import RadioButton from "../../../../../../Share/Components/Common/Form/RadioButton/RadioButton";
import TabSelect from "../../../../../../Share/Components/Common/TabSelect/TabSelect";

class TimingContainer extends Component {
  render() {
    return (
      <div className={style.sendingItemSelector}>
        <TabSelect
          className={style.tab}
          item={[
            {
              title: "شنبه 14 دی",
              id: 1,
            },
            {
              title: "یک شنبه 15 دی",
              id: 2,
            },
            {
              title: "دو شنبه 16 دی",
              id: 3,
            },
            {
              title: "سه شنبه 17 دی",
              id: 4,
            },
          ]}
          activeTab={2}
          onChange={() => {}}
        />
        <div className={style.tabBottom}>
          <ul>
            <li>
              <RadioButton
                checked
                name="xx"
                title="ساعت 9"
                onCheck={() => {}}
              />
            </li>
            <li>
              <RadioButton
                name="xx"
                title="ساعت 10 الی 18"
                onCheck={() => {}}
              />
            </li>
            <li>
              <RadioButton
                name="xx"
                title="ساعت 18 الی 23"
                onCheck={() => {}}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TimingContainer;
