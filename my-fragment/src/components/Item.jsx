import React from "react";
import style from "./Item.module.css";

const Item = (props) => {
  const { foodItem, author } = props;
  function clickMe(food) {
    console.log(`${food} is being bought`);
  }
  return (
    <>
      <li className="list-group-item list-group-item-action">
        {foodItem.food + "-" + foodItem.key + "-" + author.person}
        <button
          type="button"
          className={`${style.button} btn btn-success`}
          onClick={() => {
            clickMe(foodItem.food);
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
