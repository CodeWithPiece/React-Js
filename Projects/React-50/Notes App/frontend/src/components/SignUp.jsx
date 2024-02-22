import React, { useRef } from "react";
import "./SignUp.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { doSignUp } from "../api/ServiceApi";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = (event) => {
    event.preventDefault();
    doSignUp(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      (res) => {
        console.log(res);
      }
    );
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <>
      <Navbar />
      <div id="login-container">
        <div className="form-container">
          <div className="logo-container">Create Account</div>
          <form className="form" onSubmit={handleSignUp}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                required={true}
                ref={nameRef}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required={true}
                ref={emailRef}
              />
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                required={true}
                ref={passwordRef}
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
