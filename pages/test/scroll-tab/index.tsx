import React, { Component } from "react";
import SwiperCore, { Navigation } from "swiper";
import { ILayouts } from "../../../src/infrastructure/Models/Theme/ILayouts";
import ScrollTab from "../../../src/Share/Components/Common/ScrollTab/ScrollTab";

SwiperCore.use([Navigation]);

export const getServerSideProps = async () => {
  return {
    props: {
      namespacesRequired: ["service"],
      Layout: ILayouts.WEBSITE,
    },
  };
};

export default class Index extends Component {
  render() {
    return (
      <>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <h1>amir</h1>
        <ScrollTab
          uniqueId="tab-10"
          items={[
            { elementId: "div-1", title: "div-1" },
            { elementId: "div-2", title: "div-2" },
          ]}>
          <div id="div-1">
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div id="div-2" className="m-t-32">
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
            <h1>amir</h1>
          </div>
        </ScrollTab>
      </>
    );
  }
}
