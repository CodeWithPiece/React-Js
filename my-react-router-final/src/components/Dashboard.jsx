import React from "react";
import "../App.css";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <ul className="nav-link">
            <li>
              <NavLink
                to="profile"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="setting"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                Setting
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Dashboard;
