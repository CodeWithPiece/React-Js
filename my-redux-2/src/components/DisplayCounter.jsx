import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => {
    return store.counter;
  });
  return (
    <>
      <h5 className="card-title">Counter Application</h5>
      <p className="card-text">Counter current value is: {counter}</p>
    </>
  );
};

export default DisplayCounter;
