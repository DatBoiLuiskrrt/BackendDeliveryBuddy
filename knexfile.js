module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/locations.db",
    },
    userNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
