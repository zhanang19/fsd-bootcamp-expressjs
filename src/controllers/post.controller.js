const { all: getAllPosts } = require("../models/post");

/**
 * @param {import("express").Request} _req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const index = (_req, res, _next) => {
  return res.send({
    message: "Success",
    data: getAllPosts(),
  });
};

module.exports = { index };
