import { useRef } from "react";

function App() {
  let count = useRef(0);
  let nameElement = useRef();
  let emailElement = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    nameElement.current.style.background = "#ff54ee";
    console.log(nameElement.current);
    console.log(nameElement.current.value);
    emailElement.current.style.background = "#ff54ee";
    console.log(emailElement.current);
    console.log(emailElement.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={nameElement} type="text" placeholder="Enter name" />
        <br />
        <br />
        <input ref={emailElement} type="text" placeholder="Enter email" />
        <br />
        <br />
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default App;
