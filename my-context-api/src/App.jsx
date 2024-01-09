import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { ItemContext } from "./store/ItemContext";

function App() {
  const [items, setItems] = useState(["Mango", "Litchi", "Guava"]);

  const addItem = (itemName) => {
    setItems((currentItems) => {
      return [...currentItems, itemName];
    });
  };

  const deleteItem = (itemName) => {
    setItems(
      items.filter((item) => {
        return item != itemName;
      })
    );
  };

  return (
    <>
      <ItemContext.Provider value={{ items, addItem, deleteItem }}>
        <AddTodo inputHandle={addItem} />
        <TodoItems todoItems={items} deleteHandle={deleteItem} />
      </ItemContext.Provider>
    </>
  );
}

export default App;
