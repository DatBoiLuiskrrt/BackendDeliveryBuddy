const configs = require("../knexfile");
const knex = require("knex");

//this will have appropiate variable
const environment = process.env.NODE_ENV || "development";

module.exports = knex(configs[environment]);
//configs.development
//if we don't know what we are accessing we can use bracket
