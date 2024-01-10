import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { item: "Food" },
    { item: "Snacks" },
    { item: "Delicious" },
  ]);

  const addTodo = (newTodo) => {
    setTodos((currentTodo) => {
      return [...currentTodo, { item: newTodo }];
    });
  };

  const deleteTodo = (deleteTodoItem) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => {
        return todo.item !== deleteTodoItem;
      });
    });
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
