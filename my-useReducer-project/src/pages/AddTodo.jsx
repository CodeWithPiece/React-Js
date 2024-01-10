import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/TodoContext";

const AddTodo = () => {
  const inputRef = useRef();
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = () => {
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Input Todo" />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
