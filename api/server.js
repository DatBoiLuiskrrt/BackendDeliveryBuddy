const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res, next) => {
  res.send(`<h1>Let's write some code foo!</h1>`);
});

module.exports = server;
