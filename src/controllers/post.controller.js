const {
  getAllWithAuthor: getAllPostsWithAuthor,
  findByIdWithAuthor: findPostWithAuthor,
} = require("../models/post");

/**
 * @param {import("express").Request} _req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const index = async (_req, res, _next) => {
  const posts = await getAllPostsWithAuthor();

  return res.send({
    message: "Success",
    data: posts.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      author: {
        id: post.author_id,
        name: post.author_name,
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
  const post = await findPostWithAuthor(id);

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
        id: post.author_id,
        name: post.author_name,
      },
      created_at: post.created_at,
    },
  });
};

module.exports = { index, show };
