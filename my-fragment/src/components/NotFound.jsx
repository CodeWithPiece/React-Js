import React from "react";

const NotFound = (props) => {
  return (
    <>
      {props.foodData.length === 0 && (
        <center>
          <img
            src="https://img.freepik.com/free-vector/traffic-sign-page-404-found-flat-illustration_80328-232.jpg?size=626&ext=jpg&ga=GA1.1.339697918.1670864008&semt=sph"
            className="img-fluid"
            alt="..."
          ></img>
          <h2>{props.title}</h2>
        </center>
      )}
    </>
  );
};

export default NotFound;
