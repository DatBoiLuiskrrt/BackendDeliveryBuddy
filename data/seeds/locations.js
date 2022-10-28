/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//dependency injection
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  //reset primary keys del() does not cut it
  await knex("locations").truncate();
  await knex("locations").insert([
    //DELETE THE IDS!!!
    {
      comments: "He is not friendly",
      address: "1035 Airport Lane, San Antonio, TX",
      dangerous: true,
    },
    {
      comments: "Sex offender",
      address: "3049 Arroyo Lane, San Antonio, TX",
      dangerous: true,
    },
    {
      comments: "Has very dangerous dogs that attack you ",
      address: "6942 Puerto Lane, San Antonio, TX",
      dangerous: true,
    },
  ]);
};
