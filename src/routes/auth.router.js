const express = require("express");

const router = express.Router();

const { validateLogin, validateRegister } = require("../middlewares/validator");
const { login, register } = require("../controllers/auth.controller");

router.post("/login", validateLogin, login);
router.post("/register", validateRegister, register);

module.exports = router;
