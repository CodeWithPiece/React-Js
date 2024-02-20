import React from "react";
import "./Login.css";
import Navbar from "./Navbar";
import { Link, redirect } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <div id="login-container">
        <div className="form-container">
          <div className="logo-container">Log In</div>
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required={true}
              />
              <input
                type="password"
                id="password"
                name="password"
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
  const name = localStorage.getItem("name");
  console.log(`Checking Login...!!`);
  if (name === null || name === "") {
    return null;
  }
  return redirect("/home");
};
