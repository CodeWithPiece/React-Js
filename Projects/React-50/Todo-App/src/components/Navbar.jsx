import React from "react";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <p>Qucik Notes</p>
      <span>
        <IoSearch size={16} />
      </span>
    </nav>
  );
};

export default Navbar;
