import React from "react";
import { FaPinterest } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div id="nav-menu">
      <FaPinterest id="logo" />
      <h1 id="menu-home">Home</h1>
      <h1>Explore</h1>
      <h1 id="menu-create">
        Create
        <IoIosArrowDown />
      </h1>
    </div>
  );
};

export default NavMenu;
