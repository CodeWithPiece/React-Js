import React, { useState } from "react";
import Foods from "./Foods";
import InputFood from "./InputFood";

const App = () => {
  let [val, setVal] = useState("");
  let [foods, setFoods] = useState([
    "Mango",
    "Guava",
    "Litchi",
    "Lemon",
    "Papaya",
    "Orange",
  ]);

  function getNewFood(food) {
    setFoods([...foods, food]);
    console.log(`Your new food is ${food}`);
  }

  function setValue(event) {
    setVal(event.target.value);
  }

  function selectedFood(food) {
    console.log(`Your selected food is ${food}`);
  }

  return (
    <>
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center">Foods</h1>
            <InputFood handleInput={getNewFood} typingInput={setValue} />
            <p>{val}</p>
            <Foods items={foods} handleClick={selectedFood} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
