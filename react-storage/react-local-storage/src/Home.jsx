import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const list = ["Delhi", "Gujart", "Ranchi", "Dhanbad", "Goa", "Canada"];
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const nameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    setData((currentData) => {
      return {
        ...currentData,
        name: localStorage.getItem("name"),
        number: localStorage.getItem("number"),
        email: localStorage.getItem("email"),
      };
    });
    console.log(localStorage.getItem("list"));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("name", nameRef.current.value);
    localStorage.setItem("number", numberRef.current.value);
    localStorage.setItem("email", emailRef.current.value);
  };

  const handleName = (event) => {
    setData((currentData) => {
      return { ...currentData, name: event.target.value };
    });
    localStorage.setItem("name", event.target.value);
  };

  const handleNumber = (event) => {
    setData((currentData) => {
      return { ...currentData, number: event.target.value };
    });
    localStorage.setItem("number", event.target.value);
  };

  const handleEmail = (event) => {
    setData((currentData) => {
      return { ...currentData, email: event.target.value };
    });
    localStorage.setItem("email", event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          ref={nameRef}
          value={data.name}
          onChange={handleName}
        />
        <br />
        <input
          type="number"
          placeholder="Enter number"
          ref={numberRef}
          onChange={handleNumber}
          value={data.number}
        />
        <br />
        <input
          type="email"
          placeholder="Enter email"
          ref={emailRef}
          onChange={handleEmail}
          value={data.email}
        />
        <br />
        <button>Save Data</button>
      </form>
    </>
  );
};

export default Home;
