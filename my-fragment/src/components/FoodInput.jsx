import React from "react";
import style from "./FoodInput.module.css";

const FoodInput = ({ handleInput, handleClick }) => {
  return (
    <>
      <div className="col-11 col-md-6">
        <input
          className={`${style.foodInput}`}
          placeholder="Enter food item here..."
          // onChange={(event) => {
          //   handleInput(event);
          // }}
          onKeyDown={(event) => {
            handleInput(event);
          }}
        />
      </div>
      <div className={` ${style.button} col-11 col-md-2`}>
        <center>
          <button
            type="button"
            className={`btn btn-success w-100`}
            onClick={handleClick}
          >
            Add
          </button>
        </center>
      </div>
    </>
  );
};

export default FoodInput;
