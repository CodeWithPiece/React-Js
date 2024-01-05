import React from "react";
import style from "./InputFood.module.css";

const InputFood = (props) => {
  const handleInput = props.handleInput;
  const typingInput = props.typingInput;

  function addFood(event) {
    if (event.key === "Enter") {
      // console.log(event.target.value);
      handleInput(event.target.value);
    }
  }

  function valueChange(event) {
    typingInput(event);
  }

  return (
    <>
      <input
        type="text"
        className={`${style.foodInput}`}
        placeholder="Enter food name"
        onChange={(event) => {
          valueChange(event);
        }}
        onKeyDown={(event) => {
          addFood(event);
        }}
      />
    </>
  );
};

export default InputFood;
