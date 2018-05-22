console.log("Starting notes.js");
const fs = require('fs');

var fetchNotes = () => {
  try {
    var allNotes = fs.readFileSync('notes.json');
    var notes = JSON.parse(allNotes);
    return notes
  } catch(e) {
    return [];
  }
}

var saveNote = (notes) => {
  fs.writeFileSync('notes.json' , JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };

  var duplicate = notes.filter((note) => note.title === title);
  if(duplicate.length === 0)
  {
    notes.push(note);
    saveNote(notes);
    console.log("Note is added Successfully.");
    console.log("Title: -", title)
    console.log("Body: -", body);
  }else {
    console.log("Sorry the title already exist.");
  }
}


var getAll = () => {
  console.log("List of all Notes: -")
  var notes = fetchNotes();
  if(notes.length === 0) {
    console.log("Sorry currently there are no notes saved yet.")
  } else {
    console.log("List of Notes: -")
    console.log(notes);
  }
}


var get = (title) => {
  var notes = fetchNotes();
  var duplicate = notes.filter((note) => note.title === title);
  if (duplicate.length === 0) {
    console.log("Sorry note with the given title does not exist.")
  } else {
    console.log("Note Found");
    console.log("Title: - ", duplicate[0].title);
    console.log("Body: -", duplicate[0].body);
  }
}


var remove = (title) => {
  var notes = fetchNotes();
  var duplicate = notes.filter((note) => note.title !== title);
  saveNote(duplicate);
  if(duplicate.length === notes.length)
  {
    console.log("Sorry any note with following title does not exist");
  } else {
    console.log("Notes with given title are successfullt removed.")
  }
}


module.exports = {
  addNote,
  getAll,
  get,
  remove
};
