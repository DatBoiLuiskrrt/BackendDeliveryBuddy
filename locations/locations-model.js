const db = require("../data/db-config");

module.exports = {
  get,
  getById,
};

function get() {
  return db("locations");
}

function getById(id) {
  return db("locations").where({ id }).first();
}
