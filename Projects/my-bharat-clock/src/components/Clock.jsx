import React from "react";
import "../style/Clock.css";

const Clock = () => {
  let currentDate = new Date().toLocaleDateString();
  let currentTime = new Date().toLocaleTimeString();
  console.log(`${currentDate} ${currentTime}`);
  return (
    <div className="row justify-content-center">
      <div className="col-md-3">
        <div className="card my-card">
          <img
            src="https://images.pexels.com/photos/19098713/pexels-photo-19098713/free-photo-of-globe-monument-in-national-park.jpeg"
            className="card-img-top"
            alt="india in globe"
          />
          <div className="card-body">
            <h5 className="card-title">{currentDate + " " + currentTime}</h5>
            <p className="card-text">
              Life is like riding a bicycle. To keep your balance, you must keep
              moving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
