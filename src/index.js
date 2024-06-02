const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");
const router = require("./routes/router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running");
});
