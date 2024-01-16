import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [state, setState] = useState(true);

  return (
    <>
      {state && <Counter />}
      <button
        className="btn btn-primary"
        onClick={() => {
          setState(!state);
        }}
      >
        Toggle
      </button>
    </>
  );
}

export default App;
