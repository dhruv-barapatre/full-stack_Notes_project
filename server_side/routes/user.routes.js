const express = require("express");
const { signUp, signIn } = require("../controller/user.controller");
const isAuth = require("../middleware/Auth");

const userRouter = express.Router();

userRouter.post("/signup", signUp);

userRouter.post("/signin", signIn);

userRouter.get("*", (req, res) => {
  res.status(400).json("you use wrong method...or wrong route");
});

module.exports = { userRouter };
