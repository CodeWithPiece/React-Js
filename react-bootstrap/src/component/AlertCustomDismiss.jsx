import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const AlertCustomDismiss = () => {
  const [show, setShow] = useState(true);

  const handleClick = (value) => {
    setShow(value);
  };

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => {
              handleClick(false);
            }}
            variant="outline-success"
          >
            Close me
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button
          onClick={() => {
            handleClick(true);
          }}
        >
          Show Alert
        </Button>
      )}
    </>
  );
};

export default AlertCustomDismiss;
