import React from "react";
import style from "./FoodInput.module.css";
import { useState } from "react";

const FoodInput = () => {
  // let textStateArr = useState("Hello Food");
  // let currentText = textStateArr[0];
  // let setCurrentText = textStateArr[1];

  let [currentText, setCurrentText] = useState("Hello Food");

  function foodInput(event) {
    setCurrentText(event.target.value);
  }

  function getNewFood() {
    if (currentText === "") {
      console.log("No Food Added");
    } else {
      console.log(`Your added food is ${currentText}`);
    }
  }

  return (
    <>
      <div className="col-11 col-md-6">
        <input
          className={`${style.foodInput}`}
          placeholder="Enter food item here..."
          onChange={(event) => {
            foodInput(event);
          }}
        />
      </div>
      <div className={` ${style.button} col-11 col-md-2`}>
        <center>
          <button
            type="button"
            className={`btn btn-success w-100`}
            onClick={getNewFood}
          >
            Buy
          </button>
        </center>
      </div>
      <div className="col-11 col-md-8 mt-2">
        <p>{currentText}</p>
      </div>
    </>
  );
};

export default FoodInput;
