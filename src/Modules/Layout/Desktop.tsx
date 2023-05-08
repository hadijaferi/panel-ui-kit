import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import style from "./Desktop.module.sass";

function DesktopLayout(props: any) {
  return (
    <div className={style.mainLayout}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default DesktopLayout;
