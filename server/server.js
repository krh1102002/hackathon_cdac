const express = require("express");
const cors = require("cors");

// user routes
const authorization = require("./routes/authorization");
const userRouter = require("./routes/user");
const categoryRouter = require("./routes/categories");
const blogRouter = require("./routes/blogs");
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(authorization);
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/blog", blogRouter);

app.listen(4000, "localhost", () => {
  console.log("Server is listing on port 4000");
});
