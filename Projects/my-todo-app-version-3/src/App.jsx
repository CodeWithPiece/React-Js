import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppTitle from "./components/AppTitle";
import TodoList from "./components/TodoList";

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
    console.log(todoText, todoDate);
    if (todoText && todoDate) {
      let newTodo = {
        name: todoText,
        date: todoDate,
      };
      let newTodoArr = [...todoArr, newTodo];
      setTodoArr(newTodoArr);
      console.log(todoArr);
    }
  }

  function deleteTodo(event, todoItem) {
    // Pop Code
    const newTodoArr = [...todoArr];
    const updatedArr = newTodoArr.filter((value, index, array) => {
      return !(value.name === todoItem.name);
    });
    setTodoArr(updatedArr);
    console.log(todoArr);
  }

  return (
    <div className="container text-center">
      <AppTitle />
      <AddTodo
        buttonHandler={addTodo}
      />
      <TodoList todos={todoArr} deleteHandler={deleteTodo} />
    </div>
  );
}

export default App;
