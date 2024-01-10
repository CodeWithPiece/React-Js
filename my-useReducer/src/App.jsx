import { useReducer } from "react";

const initialState = 100;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>Count: {state}</h1>
        <button
          onClick={() => {
            dispatch("increment");
          }}
        >
          Increment
        </button>
        <br />
        <button
          onClick={() => {
            dispatch("decrement");
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
