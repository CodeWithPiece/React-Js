import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const [state, setState] = useState(true);
  useEffect(() => {
    console.log("Mount useEffect...!!");
  }, []);

  useEffect(() => {
    console.log("Update useEffect...!!");
  }, [count]);

  return (
    <>
      {state && <h1>Count: {count}</h1>}
      <button
        onClick={() => {
          setCount(count++);
        }}
      >
        Click
      </button>
      <button>Toggle</button>
    </>
  );
}

export default App;
