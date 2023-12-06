import React from "react";

const TodoItem = (props) => {
  const { name, date } = props.todoItems;
  const {handleDelete} = props;
  return (
    <>
      <tr>
        <td>{props.index + 1}</td>
        <td>{name}</td>
        <td>{date}</td>
        <td>
          <button
            className="btn btn-danger"
            type="button"
            onClick={(event) => {
              handleDelete(event, props.todoItems);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default TodoItem;
