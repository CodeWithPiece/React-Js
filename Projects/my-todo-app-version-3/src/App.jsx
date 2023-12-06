import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppTitle from "./components/AppTitle";
import TodoList from "./components/TodoList";

function App() {
  let todoText = "";
  let todoDate = "";
  let todoEvent, dateEvent;
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

  function getTodoText(event) {
    todoText = event.target.value;
    todoEvent = event;
  }

  function getTodoDate(event) {
    todoDate = event.target.value;
    dateEvent = event;
  }

  function addTodo(event) {
    // Add Todo Code
    if (todoText && todoDate) {
      let newTodo = {
        name: todoText,
        date: todoDate,
      };
      let newTodoArr = [...todoArr, newTodo];
      setTodoArr(newTodoArr);
      console.log(todoArr);
      todoEvent.target.value = "";
      dateEvent.target.value = "";
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
        textHandler={getTodoText}
        dateHandler={getTodoDate}
        buttonHandler={addTodo}
      />
      <TodoList todos={todoArr} deleteHandler={deleteTodo} />
    </div>
  );
}

export default App;
