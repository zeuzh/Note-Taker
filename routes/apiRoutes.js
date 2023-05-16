const router = require("express").Router();
const { readFromFile, readAndAppend } = require("../utils/helpers");

router.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();

  readAndAppend(newNote, "./db/db.json");
  res.json(newNote);
});

module.exports = router;
