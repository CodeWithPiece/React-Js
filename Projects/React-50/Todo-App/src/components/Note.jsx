import React from "react";
import Card from "react-bootstrap/Card";
import { MdMoreHoriz } from "react-icons/md";
import "./Note.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";

const Note = () => {
  return (
    <div id="card-main">
      <Card border="light">
        <Card.Body>
          <div id="card-data">
            <div id="div-title">
              <div id="div-title-content">
                <span className="text-center" id="date-container">
                  <p id="day">MON</p>
                  <p id="date">24</p>
                </span>
                <span className="ms-3" id="title-container">
                  <p id="title">#Task No. 1</p>
                  <p id="time">12: 30 PM</p>
                </span>
              </div>
              <div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>More Option</Tooltip>}
                >
                  <div className="dropdown">
                    <span id="more" data-bs-toggle="dropdown">
                      <MdMoreHoriz size={20} />
                    </span>

                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </OverlayTrigger>
              </div>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              doloremque voluptates expedita.
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Note;
