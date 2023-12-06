import AddTodo from "./components/AddTodo";
import AppTitle from "./components/AppTitle";
import TodoList from "./components/TodoList";

function App() {
  const todoItems = [
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
  ];

  return (
    <div className="container text-center">
      <AppTitle />
      <AddTodo />
      <TodoList todos={todoItems} />
    </div>
  );
}

export default App;
