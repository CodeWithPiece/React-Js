import React from "react";
import Header from "./Header";
import "../css/Main.css";
import Body from "./Body";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row parent-div">
          <Header />
          <Body/>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Main;
