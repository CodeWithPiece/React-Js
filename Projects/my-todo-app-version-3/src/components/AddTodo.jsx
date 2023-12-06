import React from "react";
import css from "../style/AddTodo.module.css";

const AddTodo = (props) => {
  const { textHandler, dateHandler, buttonHandler } = props;

  return (
    <div className="row justify-content-center">
      <div className="col-6 col-md-5">
        <input
          type="text"
          className="form-control p-2"
          placeholder="Enter Todo Here..."
          onChange={textHandler}
        />
      </div>
      <div className="col-6 col-md-3">
        <input
          type="date"
          className="form-control p-2"
          onChange={dateHandler}
        />
      </div>
      <div className={`${css.b1} col-12 col-md-2`}>
        <div className="d-grid">
          <button
            className="btn btn-success"
            type="button"
            onClick={buttonHandler}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
