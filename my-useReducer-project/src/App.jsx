import AddTodo from "./pages/AddTodo";
import NoTodo from "./pages/NoTodo";
import TodoList from "./pages/TodoList";
import TodoContextProvider from "./store/TodoContext";

function App() {
  return (
    <>
      <TodoContextProvider>
        <AddTodo />
        <NoTodo />
        <TodoList />
      </TodoContextProvider>
    </>
  );
}

export default App;
