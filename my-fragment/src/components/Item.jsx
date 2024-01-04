import React from "react";
import style from "./Item.module.css";

const Item = (props) => {
  const { foodItem, author, handleClick, bought } = props;
  return (
    <>
      <li className={`list-group-item ${bought && "active"}`}>
        {foodItem.key + "-" + foodItem.food + "-" + author.person}
        <button
          type="button"
          className={`${style.button} btn btn-success`}
          // onClick={(event) => {
          //   handleClick(event);
          // }}
          onClick={(event) => {
            handleClick(foodItem.food, event);
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
