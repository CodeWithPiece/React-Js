import React from "react";
import style from "./Calculator.module.css";
import InputDisplay from "./InputDisplay";
import ButtonContainer from "./ButtonContainer";

const Calculator = () => {
  return (
    <>
      <div className={style.calculator}>
        <InputDisplay />
        <ButtonContainer />
      </div>
    </>
  );
};

export default Calculator;
