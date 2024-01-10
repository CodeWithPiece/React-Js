import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../store/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return <Todo key={index} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
