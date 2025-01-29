const express = require("express");
const connection = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const notesRoute = require("./routes/notes.routes");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.static("./upload/images"));

app.use("/user", userRouter);
app.use("/notes", notesRoute);

app.all("*", (req, res) => {
  res.status(403).json("...");
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected With Db");
  } catch (error) {
    console.log(error.message);
  }
});
