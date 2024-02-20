import React from "react";
import "./SignUp.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div id="login-container">
        <div className="form-container">
          <div className="logo-container">Create Account</div>
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                required={true}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required={true}
              />
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                required={true}
              />
            </div>

            <button className="form-submit-btn" type="submit">
              Create Account
            </button>
          </form>

          <p className="signup-link">
            Already have an account?{" "}
            <Link className="signup-link link" to={"/"}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
