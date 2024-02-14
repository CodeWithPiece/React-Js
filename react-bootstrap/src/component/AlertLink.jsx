import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertLink = () => {
  return (
    <Alert variant={"danger"}>
      This is a danger alert with{" "}
      <Alert.Link href="https://www.google.com/" target="_blank">
        an example link
      </Alert.Link>
      . Give it a click if you like.
    </Alert>
  );
};

export default AlertLink;
