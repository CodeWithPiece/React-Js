import { useState } from "react";
import Demo from "./Demo";

function App() {
  function getValue(data) {
    console.log(`You sent ${data} to me.`);
  }

  return (
    <>
      <Demo handleClick={getValue} />
    </>
  );
}

export default App;
