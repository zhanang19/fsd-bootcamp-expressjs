"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
    await queryInterface.bulkDelete("users", null, {});

    const defaultPasswordHash =
      "$2a$04$l95ovZvTeq3rDHJGbCB5JeMIQJQ3iJfVBiTKzxYcQDvClR4KxaSIa";
    const users = [];
    const posts = [];

    for (let i = 1; i <= 5; i++) {
      users.push({
        id: i,
        name: `User ${i}`,
        email: `test${i}@example.com`,
        password: defaultPasswordHash,
      });

      for (let j = 1; j <= 5; j++) {
        posts.push({
          title: `Post ${j} by User ${i}`,
          content: `Content Post ${j} by User ${i}`,
          user_id: i,
        });
      }
    }

    await queryInterface.bulkInsert("users", users);
    await queryInterface.bulkInsert("posts", posts);
  },

  /**
   * @param {import('sequelize').QueryInterface} _queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async down(_queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
