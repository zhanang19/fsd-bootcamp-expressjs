const dbConfig = require("../config/database");

/**
 * @type { import("knex").Knex.Config }
 */
const config = dbConfig[process.env.NODE_ENV || "development"];

config.seeds

const knex = require("knex")(config);

module.exports = knex;
