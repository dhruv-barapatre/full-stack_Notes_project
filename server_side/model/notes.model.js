const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: {
      require: true,
      type: String,
    },
    body: {
      require: true,
      type: String,
    },
    userId: {
      require: true,
      type: String,
    },
    notesImage: {
      default: "https://cdn-icons-png.flaticon.com/128/768/768818.png",
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const notesModel = mongoose.model("notes", notesSchema);

module.exports = notesModel;
