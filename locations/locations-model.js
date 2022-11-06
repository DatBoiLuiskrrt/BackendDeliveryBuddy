const db = require("../data/db-config");

module.exports = {
  get,
  getById,
  insert,
};

function get() {
  return db("locations");
}

function getById(id) {
  return db("locations").where({ id }).first();
}

function insert(location) {
  return db("locations")
    .insert(location)
    .then((locations) => {
      return getById(locations[0]);
    });
}
