const isAdmin = (req, res, next) => {
  if (req.user.role != "admin") {
    return res
      .status(403)
      .json({ message: "You are not authorized to access this resoure" });
  }
  next();
};

module.exports = isAdmin;
