import React from "react";
import style from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  const buttonNames = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "del",
    ".",
    "=",
  ];

  return (
    <>
      <div className={style.buttonContainer}>
        {buttonNames.map((name) => {
          if (
            name === "AC" ||
            name === "C" ||
            name === "%" ||
            name === "/" ||
            name === "x" ||
            name === "-" ||
            name === "+" ||
            name === "=" ||
            name === "." ||
            name === "del"
          ) {
            return (
              <button
                key={name}
                type="button"
                className={`${style.button} btn btn-warning`}
              >
                {name}
              </button>
            );
          } else {
            return (
              <button
                key={name}
                type="button"
                className={`${style.button} btn btn-primary`}
              >
                {name}
              </button>
            );
          }
        })}
      </div>
    </>
  );
};

export default ButtonContainer;
