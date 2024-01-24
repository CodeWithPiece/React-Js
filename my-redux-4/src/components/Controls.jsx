import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCERMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: Number(inputRef.current.value),
      },
    });
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleSub = () => {
    dispatch({
      type: "MINUS",
      payload: {
        num: Number(inputRef.current.value),
      },
    });
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleToogle = () => {
    dispatch({
      type: "TOOGLE",
    });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-danger px-4 gap-3"
          onClick={handleDecrement}
        >
          DECRE
        </button>
        <button
          type="button"
          className="btn btn-success px-4"
          onClick={handleIncrement}
        >
          INCRE
        </button>
        <button
          type="button"
          className="btn btn-warning px-4"
          onClick={handleToogle}
        >
          TOOGLE
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
        <input
          ref={inputRef}
          type="number"
          className="form-control"
          placeholder="Enter Number"
        />
        <button
          type="button"
          className="btn btn-success px-4"
          onClick={handleAdd}
        >
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger px-4"
          onClick={handleSub}
        >
          SUBTRACT
        </button>
      </div>
    </>
  );
};

export default Controls;
