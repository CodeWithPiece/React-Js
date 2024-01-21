import React from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <h3>Navbar</h3>
          <ul className="nav-link">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
