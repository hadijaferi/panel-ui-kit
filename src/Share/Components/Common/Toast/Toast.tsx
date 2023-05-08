import React, { Component, ReactNode } from "react";
import { ToastOptions } from "react-toastify";
import generateClassName from "../../../Helpers/Dom/generateClassName";
// import { notifTypes } from "../../../Models/Theme/notifType";
import ToastStyle from "./Toast.module.sass";

interface IToastProps {
  title: string;
  description: string | ReactNode;
  type: any; // notifTypes  alijamallo
  options: ToastOptions;
  closeFunc: () => void;
}

interface ToastStates {
  progress: number;
}

export default class Toast extends Component<IToastProps, ToastStates> {
  state: ToastStates = {
    progress: 100,
  };

  interval: any;

  componentDidMount() {
    const duration = (this.props.options.autoClose as number) - 100;
    if (duration && duration > 0) {
      this.interval = setInterval(() => {
        const part = 100 / (duration / 100);
        this.setState({
          progress: this.state.progress - part,
        });
        if (this.state.progress < 1) {
          clearInterval(this.interval);
        }
      }, 100);
    }
  }

  render() {
    return (
      <div
        className={generateClassName([
          ToastStyle.acToast,
          ToastStyle[this.props.type],
        ])}>
        <div className={ToastStyle.acText}>
          <div className={ToastStyle.acTitle}>{this.props.title}</div>
          <div className={ToastStyle.acSubTitle}>{this.props.description}</div>
        </div>
      </div>
    );
  }

  // return (
  //   <div
  //     className={generateClassName([
  //       ToastStyle.acToastMobile,
  //       "d-flex flex-x-between flex-y-center",
  //     ])}>
  //     <div className="d-flex flex-y-center">
  //
  //       <span className={ToastStyle.acText}>{this.props.description}</span>
  //     </div>
  //     <Button
  //       theme="iconic"
  //       className={ToastStyle.close}
  //       onClick={this.props.closeFunc}>
  //     </Button>
  //   </div>
  // );
}
