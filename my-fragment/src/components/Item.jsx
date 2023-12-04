import React from "react";
import style from "./Item.module.css";

const Item = (props) => {
  const { foodItem, author } = props;
  function clickMe(food, event) {
    console.log(`${food} is being bought`);
    // console.log(event);
  }
  return (
    <>
      <li className="list-group-item list-group-item-action">
        {foodItem.food + "-" + foodItem.key + "-" + author.person}
        <button
          type="button"
          className={`${style.button} btn btn-success`}
          onClick={(event) => {
            clickMe(foodItem.food, event);
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
