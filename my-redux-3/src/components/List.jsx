import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteAction } from "../actions/appActions";

const List = () => {
  const listItem = useSelector((store) => {
    return store.listReducer;
  });
  const dispatch = useDispatch();

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Sl. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listItem.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.number}</td>
                    <td>{item.email}</td>
                    <td
                      className="text-danger"
                      onClick={() => {
                        dispatch(deleteAction(item.id));
                      }}
                    >
                      Delete <MdDelete />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
