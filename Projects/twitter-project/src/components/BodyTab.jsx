import React from "react";
import "../css/BodyTab.css";
import { TbSettings } from "react-icons/tb";

const BodyTab = () => {
  return (
    <div className="body-tab d-flex align-items-center">
      <div className="flex-fill text-center tab tab-for">For you</div>
      <div className="flex-fill text-center tab tab-following">Following</div>
      <div className="flex-shrink-1 tab-setting">
        <div className="d-flex justify-content-center align-items-center">
          <TbSettings />
        </div>
      </div>
    </div>
  );
};

export default BodyTab;
