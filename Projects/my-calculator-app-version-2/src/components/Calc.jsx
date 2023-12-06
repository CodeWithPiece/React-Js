import React, { useState } from "react";
import style from "./Calculator.module.css";
import InputDisplay from "./InputDisplay";
import ButtonContainer from "./ButtonContainer";

const Calc = () => {
  let [input, setInput] = useState("");
  let [finalValue, setFinalValue] = useState("");

  function updateInput(event) {
    setInput(event.target.value);
  }

  function getInput(event, value) {
    if (value === "AC") {
      setInput("");
      setFinalValue("");
    } else if (value === "C") {
      setInput("");
    } else if (value === "del") {
      setInput(input.substring(0, input.length - 1));
    } else if (value === "=") {
      let output = eval(input);
      setFinalValue(output);
      setInput("");
    } else {
      const newVal = input.concat(value);
      setInput(newVal);
    }
  }

  return (
    <>
      <div className={style.calculator}>
        <InputDisplay
          show={input}
          inputHandler={updateInput}
          finalVal={finalValue}
        />
        <ButtonContainer handleInput={getInput} />
      </div>
    </>
  );
};

export default Calc;
