console.log("Starting app.js");
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

var command = process.argv[2];

var args = yargs
          .command('add', 'Add a new note', {
            title: {
              describe: 'Title of note',
              demand: true,
              alias: 't'
            },
            body: {
              
            }
          })
          .argv;

console.log("Command:", command);
if(command === "add") {
  notes.addNote(args.title , args.body);
} else if(command === "list") {
  notes.getAll();
} else if(command === "read") {
  notes.get(args.title);
} else if(command === "remove") {
  notes.remove(args.title);
} else {
  console.log("Command not recognized.");
}
