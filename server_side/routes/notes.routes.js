const express = require("express");
const {
  allNotesGet,
  notesPost,
  notesDelete,
  getNote,
  updateNote,
  get_All_Note_By_Admin,
  deleteAllNoteAdmin,
} = require("../controller/notes.controller");
const isAuth = require("../middleware/Auth");
const storage = require("../config/multer");
const isAdmin = require("../middleware/isAdmin");

const notesRoute = express.Router();

notesRoute.post("/create", isAuth, notesPost);

notesRoute.delete("/delete/:notesId", isAuth, notesDelete);

notesRoute.get("/getAllNote", isAuth, allNotesGet);

notesRoute.get("/getSingleNote/:noteId", isAuth, getNote);

notesRoute.patch("/update/:noteId", isAuth, storage.single("notesImage"), updateNote);

notesRoute.get("/getAllNotesbyAdmin", isAuth, isAdmin, get_All_Note_By_Admin);

notesRoute.delete("/deleteAllNoteByAdmin", isAuth, isAdmin, deleteAllNoteAdmin);

module.exports = notesRoute;
