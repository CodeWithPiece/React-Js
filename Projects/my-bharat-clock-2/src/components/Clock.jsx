import React, { useEffect, useState } from "react";
import "../style/Clock.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("Interval Started...!!");
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      console.log("Interval Cleared...!!");
      clearInterval(intervalId);
    };
  }, []);

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
            <h5 className="card-title">
              {date.toLocaleDateString() + " " + date.toLocaleTimeString()}
            </h5>
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
