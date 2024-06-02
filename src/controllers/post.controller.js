const { post: PostModel } = require("../models");

/**
 * @param {import("express").Request} _req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const index = async (_req, res, _next) => {
  const posts = await PostModel.findAll({
    attributes: ["id", "title", "content", "created_at"],
    include: "author",
  });

  return res.send({
    message: "Success",
    data: posts.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      author: {
        id: post.author.id,
        name: post.author.name,
      },
      created_at: post.created_at,
    })),
  });
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const show = async (req, res, _next) => {
  const { id } = req.params;
  const post = await PostModel.findByPk(id, {
    attributes: ["id", "user_id", "title", "content", "created_at"],
    include: "author",
  });

  if (!post) {
    return res.status(404).send({
      message: "Post not found",
      data: null,
    });
  }

  return res.send({
    message: "Success",
    data: {
      id: post.id,
      title: post.title,
      content: post.content,
      author: {
        id: post.author.id,
        name: post.author.name,
      },
      created_at: post.created_at,
    },
  });
};

module.exports = { index, show };
