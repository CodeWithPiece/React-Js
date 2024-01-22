import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h2>Dashboad Page</h2>
      <Link to="profile">Visit Profile</Link>
      <br />
      <Link to="setting">Go To Setting</Link>
      <Outlet />
    </>
  );
};

export default Dashboard;
