// const fs = require('fs');

// // // CREATE: Write to a file
// fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
//   if (err) throw err;
//   console.log('File created successfully');
// });

// // // READ: Read from a file
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('File content:', data);
// });


// // // UPDATE: Append to a file
// fs.appendFile('example.txt', '\nAppending additional content.', (err) => {
//   if (err) throw err;
//   console.log('File updated successfully');
// });

// // // DELETE: Delete a file
// fs.unlink('example.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted successfully');
// });

/////////////////////////////////////////////////////////////////////

const path = require('path');
const fs = require('fs');

// Writing to a file
fs.writeFile(path.join(__dirname, "api", "app.js"), "username:gfgf", (err) => {
  if (err) {
    throw err;
  }

  console.log('File written successfully');
});

// Appending to a file
fs.appendFile(path.join(__dirname, "api", "app.js"), "\nusername:gfg", (err) => {
  if (err) {
    throw err;
  }

  console.log('File appended successfully');
});

// Unlinking (deleting) a file
fs.unlink(path.join(__dirname, "api", "app.js"), (err) => {
  if (err) {
    throw err;
  } 

  console.log('File deleted successfully');
});

// Reading from a file
fs.readFile(path.join(__dirname, "api", "app.js"), "utf8", (err, data) => {
  if (err) {
    throw err;
  }

  console.log('File read successfully');
  console.log(data);
});

// ///////////////////////////   event loop   /////////////////////////////////
 
