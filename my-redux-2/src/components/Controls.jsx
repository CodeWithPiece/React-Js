import React from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCERMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-danger px-4 gap-3"
        onClick={handleIncrement}
      >
        INCREMENT
      </button>
      <button
        type="button"
        className="btn btn-success px-4"
        onClick={handleDecrement}
      >
        DECREMENT
      </button>
    </div>
  );
};

export default Controls;
