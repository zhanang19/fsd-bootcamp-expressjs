const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");
const userRouter = require("./routes/user.router");
const postRouter = require("./routes/post.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running");
});
