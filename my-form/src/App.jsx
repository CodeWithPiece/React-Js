import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function getValue(event) {
    event.preventDefault();
    console.log(`Name: ${name}, Email Address: ${email}`);
  }

  return (
    <>
      <form onSubmit={getValue}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            onChange={(event) => {
              handleName(event);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            value={email}
            placeholder="Enter Email"
            onChange={(event) => {
              handleEmail(event);
            }}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;
