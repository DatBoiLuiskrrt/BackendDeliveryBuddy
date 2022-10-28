const { logger } = require("./middleware/middleware");
const express = require("express");
const server = express();
server.use(express.json());
const locationsRouter = require("../locations/locations-router");

server.use("/api/locations", locationsRouter);
server.use(logger);

server.get("/", (req, res, next) => {
  res.send(`<h1>Let's write some code foo!</h1>`);
});

module.exports = server;
