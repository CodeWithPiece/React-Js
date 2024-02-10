import React from "react";
import "../css/Header.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Header = () => {
  return (
    <div className="col-md-3 h-100">
      <div className="d-flex flex-column justify-content-between h-100 ms-3">
        <div>
          <div className="logo-container d-flex justify-content-center align-items-center mt-1">
            <img
              src="./images/twitlogo.svg"
              alt="Twitter Logo"
              className="main-logo"
              draggable={false}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center profile-container mb-2">
          <div className="d-flex align-items-center">
            <img
              src="./images/user.jpg"
              alt="Twitter Logo"
              className="logo-profile"
              draggable={false}
            />
            <div className="profile-text">
              <p className="fw-bolder profile-name">Niru</p>
              <p className="profile-username">@Niru23342343</p>
            </div>
          </div>
          <HiOutlineDotsHorizontal className="fs-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
