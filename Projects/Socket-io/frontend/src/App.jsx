import React, { useEffect } from "react";
import { io } from "socket.io-client";

const App = () => {
  useEffect(() => {
    const socket = io("http://localhost:3000/", { transports: ["websocket"] });
    socket.on("connect", () => {
      console.log(`User connected: ${socket.id}`);
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected`);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>App</div>;
};

export default App;
