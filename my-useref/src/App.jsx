import { useState } from "react";
import Form from "./Form";

function App() {
  const [arr, setArr] = useState([
    { name: "Nirmal Kumar", email: "nirmal@gmail.com" },
  ]);

  function handleClick(nameVal, emailVal) {
    //old way
    // const newArr = [...arr, { name: nameVal, email: emailVal }];
    // setArr(newArr);

    //new way (Functional Updates)
    setArr((currentArr) => [...currentArr, { name: nameVal, email: emailVal }]);
  }

  return (
    <>
      <Form handleClick={handleClick} />
      <ul>
        {arr.map((elem) => {
          return (
            <li key={elem.name}>
              Name: {elem.name} & Email Address: {elem.email}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
