import React from "react";
import style from "./InputDisplay.module.css";

const InputDisplay = (props) => {
  const { show, inputHandler, finalValue } = props;

  return (
    <>
      <h1>{finalValue}</h1>
      <input
        type="text"
        className={style.display}
        value={show}
        onChange={(event) => {
          inputHandler(event);
        }}
      />
    </>
  );
};

export default InputDisplay;
