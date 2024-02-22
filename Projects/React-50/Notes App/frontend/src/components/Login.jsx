import React, { useRef } from "react";
import "./Login.css";
import Navbar from "./Navbar";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(email.current.value, password.current.value);
    // localStorage.setItem("email", email.current.value);
    // navigate("/home");
    axios
      .get("http://localhost:8080/notes-app/api/v1/")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <>
      <Navbar />
      <div id="login-container">
        <div className="form-container">
          <div className="logo-container">Log In</div>
          <form
            className="form"
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <div className="form-group">
              <input
                type="text"
                id="email"
                name="email"
                ref={email}
                placeholder="Email"
                required={true}
              />
              <input
                type="password"
                id="password"
                name="password"
                ref={password}
                placeholder="Password"
                required={true}
              />
            </div>

            <button className="form-submit-btn" type="submit">
              Log In
            </button>
          </form>

          <p className="signup-link">
            Don't have an account?{" "}
            <Link className="signup-link link" to={"/register"}>
              Create account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

export const isLoggedIn = () => {
  const email = localStorage.getItem("email");
  console.log(`Checking Login...!!`);
  if (email === null || email === "") {
    return null;
  }
  return redirect("/home");
};
