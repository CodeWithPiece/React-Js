import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [fetching, setFetching] = useState(false);
  const [btnText, setBtnText] = useState("Get Data");

  const fetchData = () => {
    setFetching(true);
    setBtnText("Loading...");
    axios
      .get("https://dummyjson.com/comments")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setFetching(false);
        setBtnText("Get Data");
      });
  };

  return (
    <>
      <button className="btn btn-primary" type="button" onClick={fetchData}>
        {fetching && (
          <span
            className="spinner-border spinner-border-sm me-2"
            aria-hidden="true"
          ></span>
        )}
        {btnText}
      </button>
    </>
  );
}

export default App;
