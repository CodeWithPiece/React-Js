import React from "react";
import style from "./Food.module.css";

const Foods = (props) => {
  const foods = props.foods;

  function getData(food, event) {
    console.log(`Your selected food is ${food}.`);
    // console.log(event.target.innerText);
  }

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Foods</h1>
            <ul className="list-group">
              {foods.map((food) => {
                return (
                  <li
                    key={food}
                    className="list-group-item list-group-item-action"
                  >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Foods;
