import React from "react";

const Item = (props) => {
  const { foodItem, author } = props;
  return (
    <>
      <li className="list-group-item list-group-item-action">
        {foodItem.food + "-" + foodItem.key + "-" + author.person}
      </li>
    </>
  );
};

export default Item;
