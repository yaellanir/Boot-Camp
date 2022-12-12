// 1. Create a new txt file using the same fs module method we have
// learned before.
// 2. Create a copy of the newly created txt file using a method from
// the fs module.
// 3. Rename one of the files using a method from the fs module.
// 4. Get a list of all the file names of the current directory using a
// method from the fs module.
// 5. Find out and implement another method for the fs module.
const fs = require("fs");

fs.writeFileSync("notes.txt", "hello, i am a new text");
fs.copyFileSync("notes.txt", "copied_notes.txt");
fs.renameSync("notes.txt", "new_notes.txt");
fs.readdirSync("../file_system").forEach((file) => {
  console.log(file);
});
console.log(fs.readdirSync("../file_system"));
fs.readFileSync("app.js");
console.log(fs.readFileSync("app.js", { encoding: "utf8" }));
