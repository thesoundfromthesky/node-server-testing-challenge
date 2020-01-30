const express = require("express");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

let users = [{ username: "hello", password: "tower" }];

server.post("/api/users", (req, res) => {
  users.push(req.body);
  res.status(200).json(req.body);
});

server.delete("/api/users/:username", (req, res) => {
  const username = req.params.username;
  console.log(username);
  users = users.filter(user => {
    if (user.username === username) {
      return false;
    } else {
      return true;
    }
  });
  res.status(200).json({ deleted: username, success: true });
});

module.exports = server;
