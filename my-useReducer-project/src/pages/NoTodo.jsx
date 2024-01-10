import React, { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

const NoTodo = () => {
  const { todos } = useContext(TodoContext);
  return <>{todos.length === 0 && <p>No Items...</p>}</>;
};

export default NoTodo;
