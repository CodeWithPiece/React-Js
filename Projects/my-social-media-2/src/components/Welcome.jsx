import React from "react";

const Welcome = ({ onGetPostClick }) => {
  return (
    <center className="welcome-msg">
      <h1>There are no posts.</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Get Posts From Server
      </button>
    </center>
  );
};

export default Welcome;
