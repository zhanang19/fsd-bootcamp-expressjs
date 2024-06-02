const express = require("express");

const router = express.Router();

const { verifyToken } = require("../middlewares/auth");
const { index, show } = require("../controllers/post.controller");

router.get("/", verifyToken, index);
router.get("/:id", verifyToken, show);

module.exports = router;
