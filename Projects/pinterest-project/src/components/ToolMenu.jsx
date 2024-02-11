import React from "react";
import "./ToolMenu.css";
import { IoNotifications } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const ToolMenu = () => {
  return (
    <div id="tool-menu">
      <IoNotifications className="tool-icon" />
      <AiFillMessage className="tool-icon" />
      <FaUserCircle className="tool-icon" />
      <IoIosArrowDown id="down-arrow" />
    </div>
  );
};

export default ToolMenu;
