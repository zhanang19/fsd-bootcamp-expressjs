const knex = require("./knex");
const user = require("./user");

const TABLE_NAME = "posts";

const getAllWithAuthor = async () => {
  return knex({ p: TABLE_NAME })
    .select(
      "p.id",
      "p.title",
      "p.content",
      "p.created_at",
      "u.id as author_id",
      "u.name as author_name"
    )
    .join({ u: user.tableName }, "p.user_id", "=", "u.id");
};

const findByIdWithAuthor = async (id) => {
  return knex({ p: TABLE_NAME })
    .select(
      "p.id",
      "p.title",
      "p.content",
      "p.created_at",
      "u.id as author_id",
      "u.name as author_name"
    )
    .join({ u: user.tableName }, "p.user_id", "=", "u.id")
    .where("p.id", id)
    .first();
};

const create = async (data) => {
  const { user_id, title, content } = data;

  return knex(TABLE_NAME)
    .insert({ user_id, title, content });
};

module.exports = {
  getAllWithAuthor,
  findByIdWithAuthor,
  create,
  tableName: TABLE_NAME,
};
