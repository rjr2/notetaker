const { v4: uuidv4 } = require("uuid");
const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class fsUtils {
  read() {
    return readFile("db/db.json", "utf8");
  }
  getNotes() {
    return this.read().then((jackNotes) => {
      let notesArray = [];
      try {
        notesArray = notesArray.concat(JSON.parse(jackNotes));
      } catch (error) {
        notesArray = [];
      }
      return notesArray;
    });
  }
  write(note) {
    return writeFile("db/db.json", JSON.stringify(note));
  }
  addNote(note) {
    const { title, text } = note;
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    return this.getNotes().then(notesArray => [...notesArray, newNote]).then(newNewNotes => this.write(newNewNotes)).then(() => newNote)
  }
}

module.exports = new fsUtils();
