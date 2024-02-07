import { useRef } from "react";
import "./App.css";

function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    sessionStorage.setItem("name", nameRef.current.value);
    sessionStorage.setItem("email", emailRef.current.value);
  };

  return (
    <>
      <h1>Session Storage</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input type="text" placeholder="Enter name" ref={nameRef} />
        <br />
        <input type="email" placeholder="Enter email" ref={emailRef} />
        <br />
        <button>Submit Data</button>
      </form>
      <p>Hello, {sessionStorage.getItem("name")}</p>
    </>
  );
}

export default App;
