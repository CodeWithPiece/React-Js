import React from "react";
import style from "./InputFood.module.css";

const InputFood = (props) => {
  const handleInput = props.handleInput;

  function addFood(event) {
    if (event.key === "Enter") {
      // console.log(event.target.value);
      handleInput(event.target.value);
    }
  }

  return (
    <>
      <input
        type="text"
        className={`${style.foodInput}`}
        placeholder="Enter food name"
        // onChange={(event) => {
        //   addFood(event);
        // }}
        onKeyDown={(event) => {
          addFood(event);
        }}
      />
    </>
  );
};

export default InputFood;
