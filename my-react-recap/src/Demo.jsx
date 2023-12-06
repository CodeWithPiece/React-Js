import React, { useState } from "react";

const Demo = (props) => {
  const { handleClick } = props;

  //   const [name, setName] = useState("");
  //   function clickMe() {
  //     console.log("Button Clicked...!!");
  //     setName("Nirmal");
  //     console.log(name);
  //   }

  const [person, setPerson] = useState({});
  const [data, setData] = useState("");

  function handleInput(event) {
    setData(event.target.value);
  }

  function clickMe() {
    const newPerson = {
      name: "Nirmal Kumar",
      age: 23,
    };
    setPerson(newPerson);
    console.log(person);
  }

  return (
    <>
      <div>
        <h3>Hello {person.name}</h3>
        <button onClick={clickMe}>Click Me</button>
        <br />
        <input
          type="text"
          value={data}
          onChange={(event) => {
            handleInput(event);
          }}
        />
        <br />
        <button
          onClick={() => {
            handleClick(data);
          }}
        >
          Send To Parent
        </button>
      </div>
    </>
  );
};

export default Demo;
