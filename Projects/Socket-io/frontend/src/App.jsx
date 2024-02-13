import React from "react";
import { io } from "socket.io-client";

const App = () => {
  const socket = io("http://localhost:3000/", { transports: ["websocket"] });
  return <div>App</div>;
};

export default App;
