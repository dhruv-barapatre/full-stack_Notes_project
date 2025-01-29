const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const cookiesParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (req.body.role) {
    return res.status(403).json({ message: "Role Can not Be Sent" });
  }

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Fill All The Fields..." });
  }

  try {
    const isUser = await userModel.findOne({ email });
    if (isUser) {
      return res.status(409).json({ message: "User Already Registered..." });
    }

    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      const { password, ...userId } = req.body;
      const verificationToken = jwt.sign({ userId }, process.env.secretKey);
      await userModel.create({ name, email, password: hash });
      res
        .cookie("verificationToken", verificationToken)
        .status(201)
        .json({ message: "User Created Succesfully..." });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  const { verificationToken } = req.cookies;
  // jwt.verify(verificationToken, process.env.secretKey, (err, decoded) => {
  //   if (err) {
  //     console.log(err.message);
  //   }
  //   if (decoded) {
  //     console.log("first");
  //   }
  //   console.log(verificationToken);
  // });
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Fill All The Fields..." });
  }
  try {
    const userdata = await userModel.findOne({ email });
    if (!userdata) {
      return res.status(400).json({ message: "User Not Found..." });
    }
    bcrypt.compare(password, userdata.password, (err, result) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      if (!result) {
        return res
          .status(400)
          .json({ message: "Invalid or Wrong Password..." });
      }
      const { password, ...userId } = userdata._doc;
      const verificationToken = jwt.sign({ userId }, process.env.secretKey);
      res
        .cookie("verificationToken", verificationToken)
        .status(200)
        .json({ message: "User Signed In Succesfully..." });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signUp, signIn };
