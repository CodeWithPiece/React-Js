import React from "react";
import Header from "./Header";
import "../css/Main.css";
import Body from "./Body";
import Search from "./Search";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row parent-div">
          <Header />
          <Body />
          <Search />
        </div>
      </div>
    </>
  );
};

export default Main;
