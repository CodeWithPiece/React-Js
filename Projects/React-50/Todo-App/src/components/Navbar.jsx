import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { MdLogout } from "react-icons/md";

const Navbar = ({ status }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav id="navbar">
      <Link id="link" to={"/"}>
        <p>Qucik Notes</p>
      </Link>
      {status === null && (
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Logout</Tooltip>}>
          <span onClick={handleLogout}>
            <MdLogout size={14} />
          </span>
        </OverlayTrigger>
      )}
    </nav>
  );
};

export default Navbar;
