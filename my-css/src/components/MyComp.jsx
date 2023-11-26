import React from "react";
import style from "../style/MyComp.module.css";

const MyComp = () => {
  return (
    <>
      <h1 className={`${style["my-h1"]} text-uppercase fs-6 text-center`}>
        Hello From Custom Css
      </h1>
    </>
  );
};

export default MyComp;
