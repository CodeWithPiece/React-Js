import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    console.log("Render");
    count.current = count.current + 1;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current-1}</h1>
    </>
  );
};

export default Counter;
