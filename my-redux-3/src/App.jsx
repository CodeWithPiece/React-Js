import { useSelector, useDispatch } from "react-redux";
import { decrementNumber, incrementNumber } from "./actions/appActions";
import List from "./components/List";

function App() {
  const currentState = useSelector((store) => {
    return store.counterReducer.value;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-inline-flex">
        <button
          type="button"
          className="btn btn-success me-2"
          onClick={() => {
            dispatch(incrementNumber());
          }}
        >
          Success
        </button>
        <input
          type="text"
          className="form-control w-25 text-center"
          value={currentState}
          readOnly
        ></input>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={() => {
            dispatch(decrementNumber());
          }}
        >
          Danger
        </button>
      </div>
      <List />
    </>
  );
}

export default App;
