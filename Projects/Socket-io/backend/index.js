const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    credentials: true,
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log(`Id: ${socket.id}`);
});

server.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
