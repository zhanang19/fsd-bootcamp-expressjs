const { all: getAllUsers } = require("../models/user");

/**
 * @param {import("express").Request} _req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const index = (_req, res, _next) => {
  return res.send({
    message: "Success",
    data: getAllUsers(),
  });
};

module.exports = { index };
