import React from "react";
import Foods from "./Foods";

const App = () => {
  const foods = ["Mango", "Guava", "Litchi", "Lemon", "Papaya", "Orange"];

  return (
    <>
      <Foods foods={foods} />
    </>
  );
};

export default App;
