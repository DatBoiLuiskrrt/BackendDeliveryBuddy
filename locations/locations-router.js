const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  // Return an array with all the users
});

router.get("/:id", (req, res, next) => {
  // Return the location object
  // this needs a middleware to verify user id
});

router.post("/", (req, res, next) => {
  // Return the newly created location object
  // this needs a middleware to check that the request body is valid
});

router.put("/:id", (req, res, next) => {
  // Return the freshly updated location object
  // this needs a middleware to verify user id
  // Also needs another middleware to check that the user request body is valid.
});

router.delete("/:id", (req, res, next) => {
  // Return the newly deleted location object
  // this needs a middleware to verify location id
});

router.get("/:id/posts", (req, res, next) => {
  // Return the array of locations posts
  // Verify location id
  // Verify req.body is valid
});

router.post("/:id/posts", (req, res, next) => {
  // Return the newly created location post
  // verify user id
  // verify req.body is valid
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage:
      "Sadly, something went bad inside the location-router.js file",
    message: err.message,
    stack: err.stack,
  });
});
