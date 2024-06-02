const express = require("express");

const router = express.Router();

const { index } = require("../controllers/user.controller");

router.get("/", index);

module.exports = router;
