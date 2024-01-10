import React, { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <li>
      {todo.item}
      <button
        style={{ marginLeft: "20px" }}
        onClick={() => {
          deleteTodo(todo.item);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;
