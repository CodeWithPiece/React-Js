import React from "react";

const Random = () => {
  let number = Math.random() * 100;

  return (
    <div style={{ backgroundColor: "#fe343d" }}>
      <h1>Random Number: {Math.round(number)}</h1>
    </div>
  );
};

export default Random;
