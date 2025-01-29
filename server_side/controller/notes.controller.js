const notesModel = require("../model/notes.model");

const allNotesGet = async (req, res) => {
  const userId = req.user._id;
  try {
    const data = await notesModel.find({ userId });
    if (data.length == 0) {
      return res.status(404).json({ message: "No notes found OF This User.." });
    }
    res.status(200).json({ message: "notes get succesfuly..", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getNote = async (req, res) => {
  const { noteId } = req.params;
  try {
    const data = await notesModel.findById({ _id: noteId });
    if (!data) {
      return res.status(404).json({ message: "Note not found" });
    }
    if (data.userId == req.user._id) {
      return res
        .status(200)
        .json({ message: "Notes Get Succesfully", note: data });
    }
    res.status(200).json({
      message: "You havenot permission to read other user's note....",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const notesPost = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ message: "Fill all Fields" });
  }
  try {
    await notesModel.create({ title, body, userId: req.user._id });
    res.status(200).json({ message: "Notes Created Succesfully...." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const notesDelete = async (req, res) => {
  const { notesId } = req.params;
  if (!notesId) {
    return res.status(400).json({ message: "Notes ID is required..." });
  }
  try {
    const isNotes = await notesModel.findById(notesId);
    if (!isNotes) {
      return res
        .status(400)
        .json({ message: "Notes Not Found... OR Wrong note id" });
    }
    if (isNotes.userId == req.user._id) {
      await notesModel.findByIdAndDelete(notesId);
      res.status(200).json({ message: "Note Deleted Succesfully..." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const { title, body, userId } = req.body;
  if (!noteId) {
    return res.status(400).json({ message: "Notes ID is required..." });
  }
  try {
    const isNotes = await notesModel.findById(noteId);
    if (!isNotes) {
      return res.status(400).json({ message: "Note Not Found...." });
    }
    if (isNotes.userId != req.user._id) {
      return res
        .status(400)
        .json({ message: "You Can Update Your's Note Only...." });
    }
    await notesModel.findByIdAndUpdate(noteId, {
      title,
      body,
      userId,
      notesImage: req.file.filename,
    });
    res.status(200).json({ message: "Notes Updated SuccesFully...." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const get_All_Note_By_Admin = async (req, res) => {
  try {
    const notes = await notesModel.find();
    if (!notes) {
      return res.status(400).json({ message: "No Notes Found..." });
    }
    res.status(200).json({ message: "Notes Get Succesfully...", notes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send("ok");
};

const deleteAllNoteAdmin = async (req, res) => {
  try {
    await notesModel.deleteMany();
    res.status(200).json({ message: "All Notes Deleted Succesfulyy.." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  allNotesGet,
  notesPost,
  notesDelete,
  getNote,
  updateNote,
  get_All_Note_By_Admin,
  deleteAllNoteAdmin,
};
