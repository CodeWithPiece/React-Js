// const express = require("express");
// const { Server } = require("socket.io");
// const http = require("http");
// const cors = require("cors");
// const PORT = 3000;
// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     credentials: true,
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   console.log(`Id: ${socket.id}`);
// });

// server.listen(PORT, () => {
//   console.log(`Listening to PORT: ${PORT}`);
// });



const express = require("express");
const socket = require("socket.io");
const cors = require("cors");
const PORT = 3000;
const app = express();
const server = app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
const io = socket(server, {
  cors: {
    origin: "http://localhost:5173/",
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});