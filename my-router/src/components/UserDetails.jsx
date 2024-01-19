import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    image: "",
    phone: "",
    address: {
      address: "",
      city: "",
    },
  });
  const { id } = useParams();
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`https://dummyjson.com/users/${id}`, {
        signal: controller.signal,
      })
      .then(function (response) {
        // handle success
        setUser(response.data);
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
  }, [id]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 text-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src={user.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                {`${user.firstName} ${user.lastName}`}
              </p>
              <p className="card-text">{user.phone}</p>
              <p className="card-text">{`${user.address.address}, ${user.address.city}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
