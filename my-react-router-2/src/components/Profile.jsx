import React from "react";
import { Form, useNavigate, redirect } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    console.log("Logging out...!!");
    navigate("/");
  };

  return (
    <>
      <h1>This is my profile.</h1>
      <button
        className="btn btn-success"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Logout
      </button>
      <Form className="m-5" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Selet Image
          </label>
          <input type="file" name="image" className="form-control" id="image" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
};

export default Profile;

export const addProduct = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  return redirect("/");
};
