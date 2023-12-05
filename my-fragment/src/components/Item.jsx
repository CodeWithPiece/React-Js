import React from "react";
import style from "./Item.module.css";

const Item = (props) => {
  const { foodItem, author, handleClick, bought } = props;
  return (
    <>
      <li className={`list-group-item ${bought && "active"}`}>
        {foodItem.food + "-" + foodItem.key + "-" + author.person}
        <button
          type="button"
          className={`${style.button} btn btn-success`}
          onClick={handleClick}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
