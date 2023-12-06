import React, { useState } from "react";
import style from "./Calculator.module.css";
import InputDisplay from "./InputDisplay";
import ButtonContainer from "./ButtonContainer";

const Calculator = () => {
  let [input, setInput] = useState("");
  let [finalValue, setFinalValue] = useState("");

  function updateInput(event) {
    setInput(event.target.value);
  }

  function getInput(event, value) {
    if (value === "AC") {
      setInput("");
      setFinalValue("");
    } else {
      input = input + value;
      setInput(input);
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

export default Calculator;
