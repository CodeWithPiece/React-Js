import { useRef } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const nameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    console.log(numberRef.current.value);
    console.log(emailRef.current.value);
    localStorage.setItem("name", nameRef.current.value);
    localStorage.setItem("number", numberRef.current.value);
    localStorage.setItem("email", emailRef.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" ref={nameRef} />
        <br />
        <input type="number" placeholder="Enter number" ref={numberRef} />
        <br />
        <input type="email" placeholder="Enter email" ref={emailRef} />
        <br />
        <button>Save Data</button>
        <br />
        <br />
      </form>
      <Home />
    </>
  );
}

export default App;
