import React from "react";

const Item = (props) => {
  const { foodItem, author } = props;
  return (
    <>
      <a href="#" className="list-group-item list-group-item-action">
        {foodItem.food + "-" + foodItem.key + "-" + author.person}
      </a>
    </>
  );
};

export default Item;
