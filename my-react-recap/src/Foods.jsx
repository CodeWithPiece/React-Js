import React, { useState } from "react";
import style from "./Food.module.css";
import { FaCartArrowDown } from "react-icons/fa6";

const Foods = (props) => {
  let [boughtFood, setBoughtFood] = useState([]);
  const foods = props.items;
  const handleClick = props.handleClick;

  function getData(food, event) {
    // console.log(`Your selected food is ${food}.`);
    setBoughtFood([...boughtFood, food]);

    //Parent behaviour
    handleClick(food);
  }

  return (
    <>
      <ul className="list-group mt-3">
        {foods.map((food) => {
          return (
            <li
              key={food}
              className={`list-group-item list-group-item-action ${
                boughtFood.includes(food) && "active"
              }`}
            >
              {food}
              <button
                className={`${style.button} btn btn-warning`}
                onClick={(event) => {
                  getData(food, event);
                }}
              >
                BUY
                <FaCartArrowDown className="ms-2" color="black" />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Foods;
