import reactLogo from "./assets/react.svg";
import { useSelector, useDispatch } from "react-redux";
import viteLogo from "/vite.svg";
import "./App.css";
import { counterAction } from "./redux/slices/counterSlice";

function App() {
  const { count, name, status } = useSelector((state) => {
    return state.counterReducer;
  });
  const dispatch = useDispatch();
  console.log(count);

  const handleClick = () => {
    dispatch(counterAction.setCount());
    dispatch(
      counterAction.setValue({
        name: "Nirmal",
        status: true,
      })
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Name: {name} & Status: {`${status}`}
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
