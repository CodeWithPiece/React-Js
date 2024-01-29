import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, add } from "./redux/actions/counterAction";
import { toogle } from "./redux/actions/toogleAction";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state.counterReducer;
  });
  const isShow = useSelector((state) => {
    return state.toogleReducer;
  });

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAdd = () => {
    dispatch(add(5));
  };

  const handleToogle = () => {
    dispatch(toogle());
  };

  return (
    <>
      <h1>Redux Counter</h1>
      <div className="toogle-div">
        {isShow && <p>This is confidentail data...!!</p>}
        <button onClick={handleToogle}>Toogle</button>
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleAdd}>Increment By 5</button>
      <h3>Count: {value}</h3>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;
