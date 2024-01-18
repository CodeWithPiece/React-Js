import { useState } from "react";
import "./App.css";

function App() {
  const [fetching, setFetching] = useState(false);
  const [btnText, setBtnText] = useState("Fetch Data");

  const fetchData = () =>{
    setFetching(true);
    setBtnText("Loading...");
    setTimeout(()=>{
      setFetching(false);
      setBtnText("Fetch Data");
    },2000);
  }

  return (
    <>
      <button
        class="btn btn-primary"
        type="button"
        onClick={fetchData}
      >
        {fetching && (
          <span
            class="spinner-border spinner-border-sm me-2"
            aria-hidden="true"
          ></span>
        )}
        {btnText}
      </button>
    </>
  );
}

export default App;
