import React from "react";

const Loader = () => {
  return (
    <center className="welcome-msg">
      <div
        className="spinner-border"
        role="status"
        style={{ height: "1.5rem", width: "1.5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="fs-4 ms-2">Loading...</span>
    </center>
  );
};

export default Loader;
