const db = require("../data/db-config");

module.exports = {
  get,
  getById,
  insert,
  update,
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

function update(id, changes) {
  return db("locations")
    .where({ id })
    .update(changes)
    .then((rows) => {
      return getById(id);
    });
}
