import React from "react";
import "./Login.css";
import Navbar from "./Navbar";

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
                required="true"
              />
              <input
                type="password"
                id="email"
                name="password"
                placeholder="Password"
                required="true"
              />
            </div>

            <button className="form-submit-btn" type="submit">
              Log In
            </button>
          </form>

          <p className="signup-link">
            Don't have an account?{" "}
            <a href="#" className="signup-link link">
              Create account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
