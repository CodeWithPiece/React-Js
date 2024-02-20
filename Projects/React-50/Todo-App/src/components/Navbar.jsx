import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link id="link" to={"/"}>
        <p>Qucik Notes</p>
      </Link>
    </nav>
  );
};

export default Navbar;
