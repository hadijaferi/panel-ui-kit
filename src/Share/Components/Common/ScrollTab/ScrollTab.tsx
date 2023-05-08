import React, {Component, ReactNode} from "react";
import generateKey from "../../../../../utils/generateKey";
import {ELEMENTS} from "../../../Constants/Dom/ELEMENTS";
import style from "./ScrollTab.module.sass";

export interface ITabItem {
  elementId: string;
  title: string;
  headerId: string;
}

export interface ITabItemProps {
  elementId: string;
  title: string;
}

interface ITabProps {
  items: ITabItemProps[];
  uniqueId: string;
}

interface ITabStates {
  items: ITabItem[];
}

export default class ScrollTab extends Component<ITabProps, ITabStates> {
  state: ITabStates = {
    items: [],
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScrollDocument);
    const items = this.props.items.map(i => ({
      title: i.title,
      elementId: i.elementId,
      headerId: generateKey(),
    }));
    this.setState({items});
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollDocument);
  }

  onScrollDocument = () => {
    this.state.items.forEach(item => {
      if (this.isInViewport(item.elementId)) {
        document?.getElementById(item?.headerId)?.classList.add(style.active);
      } else if (document?.getElementById(item?.headerId)?.classList) {
        document
            ?.getElementById(item?.headerId)
            ?.classList.remove(style.active);
      }
    });
  };

  scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    const header = document.getElementById(this.props.uniqueId);

    const headerSite = document.getElementById(ELEMENTS.HEADER);
    const offset =
        (header?.offsetHeight || 0) + (headerSite?.offsetHeight || 0);
    window.scrollTo({
      top: (this.getOffsetTop(element) || 0) - offset,
      behavior: "smooth",
    });
  };

  isInViewport(elementId = "") {
    const header = document.getElementById(this.props.uniqueId);
    const offset =
        (header?.getBoundingClientRect()?.bottom || 0) +
        (header?.offsetHeight || 0);
    const element = document.getElementById(elementId);
    if (
        window.scrollY + offset >= (this.getOffsetTop(element) || 0) &&
        window.scrollY + offset <=
        (element?.offsetHeight || 0) + (this.getOffsetTop(element) || 0)
    ) {
      return true;
    }

    return false;
  }

  // eslint-disable-next-line react/sort-comp
  getOffsetTop(elem: any) {
    let offsetTop = 0;
    do {
      if (!Number.isNaN(elem?.offsetTop)) {
        offsetTop += elem?.offsetTop;
      }
      // eslint-disable-next-line no-cond-assign
    } while ((elem = elem?.offsetParent));
    return offsetTop;
  }

  render(): ReactNode {
    return (
        <div className={style.acScrollTab}>
          <div className={style.titleCard}>
            <ul id={this.props.uniqueId} className={style.titleStep}>
              {this.state.items.map(item => {
                return (
                    <div
                        key={item.elementId}
                        id={item.headerId}
                        onClick={() => this.scrollToElement(item.elementId)}
                        className="fontWeight-500">
                      {item.title}
                    </div>
                );
              })}
            </ul>
          </div>
          {this.props.children}
        </div>
    );
  }
}
