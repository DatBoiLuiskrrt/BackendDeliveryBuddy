const { json } = require("express");
const express = require("express");
const { default: knex } = require("knex");
const router = express.Router();
const db = require("../data/db-config");
const Location = require("./locations-model");
const { validateLocationId } = require("../api/middleware/middleware");
router.get("/", (req, res, next) => {
  // Return an array with all the users
  Location.get()
    .then((locations) => {
      res.json(locations);
    })
    .catch(next);
});

router.get("/:id", validateLocationId, (req, res, next) => {
  // Return the location object
  // Location.getById(req.params.id)
  //   .then((locationById) => {
  //     res.json(locationById);
  //   })
  // .catch(next);
  res.json(req.location);
  // this needs a middleware to verify user id
});

router.post("/", (req, res, next) => {
  const locationData = req.body;
  db("locations")
    .insert(locationData)
    .then((ids) => {
      db("locations")
        .where({ id: ids[0] })
        .then((newLocationEntry) => {
          res.status(201).json(newLocationEntry);
        });
    })
    .catch((err) => {
      console.log("POST error, err");
      res.status(500).json({ message: "Failed to post data" });
    });
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

module.exports = router;
