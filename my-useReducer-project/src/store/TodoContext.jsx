import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = [
  { item: "Food" },
  { item: "Snacks" },
  { item: "Delicious" },
];

const reducer = (state, action) => {
  let newState = state;
  if (action.type === "ADD_ITEM") {
    return [...newState, { item: action.payload.newTodo }];
  }
  if (action.type === "DELETE_ITEM") {
    return newState.filter((todo) => {
      return todo.item !== action.payload.deleteTodoItem;
    });
  }
  return newState;
};

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const addTodo = (newTodo) => {
    //We are passing action in dispatch
    // Dispatch call reducer function with action as a parameter to manipulate state
    dispatch({
      type: "ADD_ITEM",
      payload: {
        newTodo,
      },
    });
  };

  const deleteTodo = (deleteTodoItem) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        deleteTodoItem,
      },
    });
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
