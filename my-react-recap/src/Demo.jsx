import React, { useState } from "react";

const Demo = () => {
  //   const [name, setName] = useState("");
  //   function clickMe() {
  //     console.log("Button Clicked...!!");
  //     setName("Nirmal");
  //     console.log(name);
  //   }

  const [person, setPerson] = useState({});

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
      </div>
    </>
  );
};

export default Demo;
