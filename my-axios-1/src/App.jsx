import { useRef, useState } from "react";
import axios from "axios";

function App() {
  const [fetching, setFetching] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [btnText, setBtnText] = useState("Get Data");
  const commentId = useRef();

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

  const handleSubmit = (event) => {
    setSubmitting(true);
    event.preventDefault();
    axios
      .get(`https://dummyjson.com/comments/${commentId.current.value}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSubmitting(false);
        commentId.current.value = "";
        commentId.current.focus();
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 text-center p-3">
          <button className="btn btn-primary" type="button" onClick={fetchData}>
            {fetching && (
              <span
                className="spinner-border spinner-border-sm me-2"
                aria-hidden="true"
              ></span>
            )}
            {btnText}
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                ref={commentId}
                type="number"
                className="form-control"
                placeholder="Comment Id"
              />
            </div>
          </form>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary">
            {submitting && (
              <span
                className="spinner-border spinner-border-sm me-2"
                aria-hidden="true"
              ></span>
            )}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
