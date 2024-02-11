import React from "react";
import "../css/Body.css";
import BodyTab from "./BodyTab";
import BodyMain from "./BodyMain";

const Body = () => {
  return (
    <div className="col-md-6 h-100">
      <BodyTab />
      <BodyMain/>
    </div>
  );
};

export default Body;
