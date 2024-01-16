import React, { useEffect, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mount useEffect...!!");
    return () => {
      console.log("Unmounted useEffect...!!");
    };
  }, []);

  useEffect(() => {
    console.log("Update useEffect...!!");
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count += 1));
        }}
      >
        Click
      </button>
    </>
  );
};

export default Counter;
