import React, { useContext, useRef } from "react";
import { ItemContext } from "../store/ItemContext";

const AddTodo = () => {
  const { items, addItem, deleteItem } = useContext(ItemContext);
  const nameRef = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    addItem(nameRef.current.value);
    nameRef.current.value = "";
    nameRef.current.focus();
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <input ref={nameRef} type="text" placeholder="Enter name" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddTodo;
