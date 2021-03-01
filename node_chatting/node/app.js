const express = require("express");
const redis = require("socket.io");

const app = express();
const port = 3000;
io.adapter(redis({ host: "redis", port: 6379 }));

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

const server = app.listen(port, () => {
  console.log(`express listening on ${port}`);
});

const listen = require("socket.io");
const io = listen(server);

const color = ["yellow", "green", "red", "blue", "white", "black"];

io.on("connection", (socket) => {
  const username = color[Math.floor(Math.random() * 6)];
  socket.broadcast.emit("join", { username });
  socket.broadcast.emit("leave", { username });
  //   console.log("소켓 서버 접속");
  socket.on("client message", (data) => {
    // console.log(data);
    io.emit("server message", {
      username,
      message: data.message,
    });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("leave", { username });
  });
});
