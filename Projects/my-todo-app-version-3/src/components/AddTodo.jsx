import React, { useState } from "react";
import css from "../style/AddTodo.module.css";

const AddTodo = (props) => {
  const { buttonHandler } = props;
  const [todoText, setTodoText] = useState("");
  const [todoDate, setTodoDate] = useState("");

  function textHandler(event) {
    setTodoText(event.target.value);
  }

  function dateHandler(event) {
    setTodoDate(event.target.value);
  }

  function addTodoHandler(event) {
    buttonHandler(event, todoText, todoDate);
    setTodoText("");
    setTodoDate("");
  }

  return (
    <div className="row justify-content-center">
      <div className="col-6 col-md-5">
        <input
          type="text"
          className="form-control p-2"
          placeholder="Enter Todo Here..."
          value={todoText}
          onChange={textHandler}
        />
      </div>
      <div className="col-6 col-md-3">
        <input
          type="date"
          className="form-control p-2"
          value={todoDate}
          onChange={dateHandler}
        />
      </div>
      <div className={`${css.b1} col-12 col-md-2`}>
        <div className="d-grid">
          <button
            className="btn btn-success"
            type="button"
            onClick={addTodoHandler}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
