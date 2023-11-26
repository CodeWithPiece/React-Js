import React from "react";

const TodoList = () => {
  let todoName = "Study All Day";
  let todoDate = "26/11/2023";

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-12 col-md-10">
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
                  <tr>
                    <td>1.</td>
                    <td>{todoName}</td>
                    <td>{todoDate}</td>
                    <td>
                      <button className="btn btn-danger" type="button">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>{todoName}</td>
                    <td>{todoDate}</td>
                    <td>
                      <button className="btn btn-danger" type="button">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>{todoName}</td>
                    <td>{todoDate}</td>
                    <td>
                      <button className="btn btn-danger" type="button">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
