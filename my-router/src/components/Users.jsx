import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://dummyjson.com/users", {
        signal: controller.signal,
      })
      .then(function (response) {
        // handle success
        setUsers(response.data.users);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Number</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">View</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{`${user.firstName} ${user.lastName}`}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td className="text-success">
                          <Link
                            className="nav-link active"
                            to={`/user/${user.id}`}
                          >
                            <FaRegEye className="me-1" />
                            View
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
