import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    console.log("Logging out...!!");
    navigate("/");
  };

  return (
    <>
      <h1>This is my profile.</h1>
      <button
        className="btn btn-success"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Profile;
