const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");

const { cors } = require("./middlewares/app");
const authRouter = require("./routes/auth.router");
const userRouter = require("./routes/user.router");
const postRouter = require("./routes/post.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors);

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running");
});
