/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("locations", (tbl) => {
    //creates an id column, auto inc integers
    tbl.increments();
    //chainnig constraints
    //notnullable = required
    tbl.float("comments", 256).notNullable();
    tbl.text("address", 256).notNullable();
    //if not provided set to false by default
    tbl.boolean("dangerous").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("locations");
};
