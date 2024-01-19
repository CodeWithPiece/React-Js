import React, { useRef } from "react";
import axios from "axios";

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (event) => {
    // Sending form-data
    event.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    axios
      .post("http://localhost:3000/data", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        //always be executed.
      });
  };

  return (
    <>
      <h3>Sending via form-data</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input ref={nameRef} type="text" name="name" placeholder="Name" />
        <br />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <br />
        <br />
        <button>Submit Avatar</button>
      </form>
    </>
  );
};

export default Form;
