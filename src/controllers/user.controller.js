const { user: UserModel } = require("../models");

/**
 * @param {import("express").Request} _req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const index = async (_req, res, _next) => {
  return res.send({
    message: "Success",
    data: await UserModel.findAll({
      attributes: ["id", "name", "email"],
    }),
  });
};

module.exports = { index };
