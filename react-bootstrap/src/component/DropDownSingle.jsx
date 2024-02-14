import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropDownSingle = () => {
  return (
    // <Dropdown>
    //   <Dropdown.Toggle variant="success">Dropdown Button</Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    //   </Dropdown.Menu>
    // </Dropdown>

    <DropdownButton title="Food Menu">
      <Dropdown.Item href="#/action-1">Breakfast</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Lunch</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">Dinner</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDownSingle;
