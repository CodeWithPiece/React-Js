import React from "react";
import css from "../style/AppTitle.module.css";

const AppTitle = () => {
  return (
    <div className="row justify-content-center m-3">
      <div className="col-4 p-2">
        <h2 className={`${css.title} ${css.familyName}`}>Todo App</h2>
      </div>
    </div>
  );
};

export default AppTitle;
