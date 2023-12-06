import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const todoItems = props.todos;
  const { deleteHandler } = props;

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-12 col-md-10">
        {todoItems.length != 0 && (
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Sl No.</th>
                      <th>Todo</th>
                      <th>Date</th>
                      <th>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todoItems.map((item, index) => {
                      return (
                        <TodoItem
                          key={item.name}
                          todoItems={item}
                          index={index}
                          handleDelete={deleteHandler}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
