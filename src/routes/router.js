const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.send({
    serverMessage: "Hello World!",
    serverTime: new Date(),
  });
});

module.exports = router;
