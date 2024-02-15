import React from "react";
import "./Body.css";
import Note from "./Note";

const Body = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className=" col-12 col-md-5" id="body">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
