const jwt = require("jsonwebtoken");
require("dotenv").config();
const isAuth = (req, res, next) => {
  const { verificationToken } = req.cookies;
  if (!verificationToken) {
    return res
      .status(401)
      .json({ message: "You are not Login..Login First...." });
  }
  jwt.verify(verificationToken, process.env.secretKey, (err, decode) => {
    if (err) {
      return res.status(401).json({ message: err.message });
    }
    if (!decode) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    req.user=decode.userId;
    next();
  });
};

module.exports = isAuth;
