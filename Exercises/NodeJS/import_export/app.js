// In NodeJS, require() is a built-in function to include external modules that exist in separate files.
// require() statement basically reads a JavaScript file, executes it, and then proceeds to return the export object.
// require() statement not only allows to add built-in core NodeJS modules but also community-based and local modules.

// import() & export() statements are used to refer to an ES module.
// Other modules with file types such as .json cannot be imported with these statements.
// They are permitted to be used only in ES modules and the specifier of this statement can either be a URL-style relative path or a package name. Also, the import statement cannot be used in embedded scripts unless such script has a type="module".
//  A dynamic import can be used for scripts whose type is not “module”

//While CommonJS and ES6 modules share similar syntax, they work in fundamentally different ways:
//CommonJS modules load dependencies on demand while executing the code
//ES6 modules are pre-parsed in order to resolve further imports before code is executed.

//! 1. How to enable import in node.js
//?1a
//In the package.json file add “type” : “module”. Adding this enables ES6 modules.
//?1b
//Another way to do this is by creating a file with .mjs extension.
//If we are using the file with .mjs extension then we don’t have to add “type”: “module” in the package.json file.
//We can directly write the program and can execute it by typing node –experimental-modules index.mjs in the terminal.

//! 2. node.js environment variables that are not available when using import syntax
// dotenv
// - ??? 

//! 3. create functions using import/export
import { logHello, logGoodbye } from "./utilities.js";
logHello();
logGoodbye();

//! 4. import the file system module using the import syntax
import fs from "fs";

console.log(fs.readFileSync("./utilities.js"));
