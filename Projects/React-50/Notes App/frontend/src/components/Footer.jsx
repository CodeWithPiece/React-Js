import React from "react";
import "./Footer.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { IoMdAdd } from "react-icons/io";

const Footer = () => {
  return (
    <div id="footer">
      <div id="form-note">
        <input type="text" placeholder="Add Notes..." />
        <OverlayTrigger placement="top" overlay={<Tooltip>Add Note</Tooltip>}>
          <span>
            <IoMdAdd size={14} />
          </span>
        </OverlayTrigger>
      </div>
      <p>
        Notes memorize, organize thoughts, convey messages, and facilitate
        learning.
      </p>
    </div>
  );
};

export default Footer;
