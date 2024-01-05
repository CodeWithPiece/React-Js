import React from "react";
import style from "./Food.module.css";

const Foods = (props) => {
  const foods = props.foods;
  const handleClick = props.handleClick;

  function getData(food, event) {
    // console.log(`Your selected food is ${food}.`);
    handleClick(food);
  }

  return (
    <>
      <ul className="list-group mt-3">
        {foods.map((food) => {
          return (
            <li key={food} className="list-group-item list-group-item-action">
              {food}
              <button
                className={`${style.button} btn btn-primary`}
                onClick={(event) => {
                  getData(food, event);
                }}
              >
                BUY
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Foods;
