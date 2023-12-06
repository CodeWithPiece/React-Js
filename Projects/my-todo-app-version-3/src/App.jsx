import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppTitle from "./components/AppTitle";
import TodoList from "./components/TodoList";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoArr, setTodoArr] = useState([
    {
      name: "PLaying Games",
      date: "12-11-2023",
    },
    {
      name: "Learn React",
      date: "13-11-2023",
    },
    {
      name: "Go To Gym",
      date: "14-11-2023",
    },
    {
      name: "Revision React",
      date: "15-11-2023",
    },
  ]);

  function addTodo(event, todoText, todoDate) {
    // Add Todo Code
    if (todoText && todoDate) {
      const newTodo = {
        name: todoText,
        date: todoDate,
      };
      const newTodoArr = [...todoArr, newTodo];
      setTodoArr(newTodoArr);
    }
  }

  function deleteTodo(event, todoItem) {
    // Pop Code
    const updatedArr = todoArr.filter((value, index, array) => {
      return value.name != todoItem.name;
    });
    setTodoArr(updatedArr);
  }

  return (
    <div className="container text-center">
      <AppTitle />
      <AddTodo buttonHandler={addTodo} />
      {todoArr.length === 0 && <WelcomeMessage />}
      <TodoList todos={todoArr} deleteHandler={deleteTodo} />
    </div>
  );
}

export default App;
