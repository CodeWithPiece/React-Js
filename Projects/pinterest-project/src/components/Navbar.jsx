import React from "react";
import "./Navbar.css";
import ToolMenu from "./ToolMenu";
import SearchMenu from "./SearchMenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div id="nav">
      <NavMenu />
      <SearchMenu />
      <ToolMenu />
    </div>
  );
};

export default Navbar;
