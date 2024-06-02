const knex = require("./knex");

const TABLE_NAME = "users";

const getAll = async () => {
  return knex(TABLE_NAME)
    .select("id", "name", "email");
};

const create = async (data) => {
  const { name, email, password } = data;

  return knex(TABLE_NAME)
    .insert({ name, email, password });
};

module.exports = {
  getAll,
  create,
  tableName: TABLE_NAME,
};
