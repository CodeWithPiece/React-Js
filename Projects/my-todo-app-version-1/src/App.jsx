import AddTodo from "./components/AddTodo";
import AppTitle from "./components/AppTitle";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container text-center">
      <AppTitle />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
