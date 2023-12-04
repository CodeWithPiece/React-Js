import React from "react";
import style from "./Item.module.css";

const Item = (props) => {
  const { foodItem, author, handleClick } = props;
  return (
    <>
      <li className="list-group-item">
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
