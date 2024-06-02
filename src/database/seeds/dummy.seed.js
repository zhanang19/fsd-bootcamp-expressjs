const postModel = require("../../models/post");
const userModel = require("../../models/user");

/**
 * @param { import("knex").Knex } knex
 *
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const defaultPassword = "Qwerty123";

  console.log("Disabling foreign key checks");
  await knex.raw("SET foreign_key_checks = 0;");

  console.log("Truncating all tables");
  await knex(postModel.tableName).truncate();
  await knex(userModel.tableName).truncate();

  console.log("Inserting dummy users and posts");
  for (let i = 1; i <= 5; i++) {
    const [userId] = await userModel.create({ name: `User ${i}`, email: `test${i}@example.com`, password: defaultPassword });

    for (let j = 1; j <= 5; j++) {
      await postModel.create({ user_id: userId, title: `Article ${j}`, content: "Lorem ipsum sit dolor amet" });
    }
  }

  console.log("Enabling foreign key checks");
  await knex.raw("SET foreign_key_checks = 1;");

  console.log("Done");
};
