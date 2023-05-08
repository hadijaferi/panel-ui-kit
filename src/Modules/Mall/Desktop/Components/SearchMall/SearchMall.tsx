import React from "react";
import FloorTitle from "./Components/FloorTitle/FloorTitle";
import FloorsButton from "./Components/FloorsButton/FloorsButton";
import StoreList from "./Components/StoreList/StoreList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./SearchMall.module.sass";

const SearchMall = () => {
  return (
    <div className={style.mallBody}>
      <Header />
      <FloorTitle />
      <div className="container">
        <div className="row">
          <div className="col-2 col-xl-3">
            <FloorsButton />
          </div>
          <div className="col-10 col-xl-9">
            <StoreList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchMall;
