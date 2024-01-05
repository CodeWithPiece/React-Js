import React from "react";
import Foods from "./Foods";
import InputFood from "./InputFood";

const App = () => {
  const foods = ["Mango", "Guava", "Litchi", "Lemon", "Papaya", "Orange"];

  function getNewFood(food) {
    console.log(`Your new food is ${food}`);
  }

  function selectedFood(food) {
    console.log(`Your selected food is ${food}`);
  }

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-center">Foods</h1>
            <InputFood handleInput={getNewFood} />
            <Foods foods={foods} handleClick={selectedFood} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
