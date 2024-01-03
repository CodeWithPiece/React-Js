import React from "react";
import "../style/AddTodo.css";

const AddTodo = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-6 col-md-5">
        <input
          type="text"
          className="form-control p-2"
          placeholder="Enter Todo Here..."
        />
      </div>
      <div className="col-6 col-md-3">
        <input type="date" className="form-control p-2" />
      </div>
      <div className="col-12 col-md-2 b1">
        <div className="d-grid">
          <button className="btn btn-success" type="button">
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
