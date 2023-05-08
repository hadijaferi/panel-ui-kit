import React, { Component } from "react";
import { Collapse, UnmountClosed } from "react-collapse";

export default class Index extends Component {
  state = {
    open: false,
  };

  Block = (
    isOpen: boolean,
    title: string,
    onToggle: () => void,
    children: any,
  ) => {
    return (
      <div className="block">
        <button className="btn toggle" onClick={onToggle}>
          <span>{title}</span>
        </button>
        <Collapse isOpened={isOpen}>{children}</Collapse>
      </div>
    );
  };

  render() {
    return (
      <>
        <div> hi man </div>
        <button
          onClick={() => {
            this.setState({ open: true });
          }}>
          amir amir
        </button>
        <UnmountClosed
          isOpened={this.state.open}>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
          <div>Random content</div>
        </UnmountClosed>
      </>
    );
  }
}
