import { useRef, useState } from "react";
import axios from "axios";

function App() {
  const [fetching, setFetching] = useState(false);
  const [btnText, setBtnText] = useState("Get Data");
  const commentId = useRef();
  const searchInput = useRef();
  const addInput = useRef();

  const fetchData = () => {
    setFetching(true);
    setBtnText("Loading...");
    //https://dummyjson.com/comments
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
    event.preventDefault();
    //https://dummyjson.com/comments/1
    axios
      .get(`https://dummyjson.com/comments/${commentId.current.value}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        commentId.current.value = "";
        commentId.current.focus();
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    //https://dummyjson.com/products/search?q=phone
    axios
      .get(`https://dummyjson.com/products/search`, {
        params: {
          q: searchInput.current.value,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        searchInput.current.value = "";
        searchInput.current.focus();
      });
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    //https://dummyjson.com/products/add
    axios
      .post(`https://dummyjson.com/products/add`, {
        title: addInput.current.value,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        addInput.current.value = "";
        addInput.current.focus();
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
          <button className="btn btn-primary" onClick={handleSubmit}>
            Get Comment
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-4">
          <form onSubmit={handleSearch}>
            <div>
              <input
                ref={searchInput}
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={handleSearch}>
            Search Product
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-4">
          <form onSubmit={handleAddProduct}>
            <div>
              <input
                ref={addInput}
                type="text"
                className="form-control"
                placeholder="Product Name"
              />
            </div>
          </form>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
