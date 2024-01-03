import React from "react";

const Random = () => {
  let number = Math.random() * 100;

  return (
    <div style={{ backgroundColor: "#776691" }}>
      <h1>Random Number: {Math.round(number)}</h1>
    </div>
  );
};

export default Random;
