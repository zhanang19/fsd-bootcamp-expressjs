const { getAll: getAllUsers } = require("../models/user");

/**
 * @param {import("express").Request} _req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const index = async (_req, res, _next) => {
  return res.send({
    message: "Success",
    data: await getAllUsers(),
  });
};

module.exports = { index };
