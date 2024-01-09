import React, { useContext } from "react";
import { ItemContext } from "../store/ItemContext";

const TodoItem = ({ todoItem }) => {
  const { items, addItem, deleteItem } = useContext(ItemContext);

  const handleDelete = (itemName) => {
    deleteItem(itemName);
  };

  return (
    <li>
      {todoItem}
      <button
        style={{ marginLeft: "20px" }}
        onClick={(event) => {
          handleDelete(todoItem);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
