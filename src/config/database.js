const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../../.env") });

/**
 * @type { Object.<string, import("knex").Knex.Config }
 */
module.exports = {
  development: {
    client: "mysql2",
    dialect: "mysql",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    migrations: {
      directory: path.join(__dirname, "../database/migrations"),
      tableName: "migrations",
    },
    seeds: {
      directory: path.join(__dirname, "../database/seeds"),
    },
  },
};
