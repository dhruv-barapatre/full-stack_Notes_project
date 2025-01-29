const multer = require("multer");

const upload = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const storage = multer({ storage: upload });

module.exports = storage;
