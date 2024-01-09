import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { ItemContext } from "../store/ItemContext";

const TodoItems = () => {
  const { items, addItem, deleteItem } = useContext(ItemContext);

  return (
    <ul>
      {items.map((item) => {
        return <TodoItem key={item} todoItem={item} />;
      })}
    </ul>
  );
};

export default TodoItems;
