var calc = require('./calc')

let result=calc.add(2,5);

console.log(result);

// var express = require('express');
// const app = express();
// app.use(express.json());
// const port= 5500;

// app.get('/',(req,res)=>{
//     res.send('hello');
   
// })



// app.listen(port,()=>console.log('server is running'))
// ////////////////////////////////////////////////////////////////////////////////
// const fs = require('fs');

// // CREATE: Write to a file
// fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
//   if (err) throw err;
//   console.log('File created successfully');
// });

// // READ: Read from a file
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('File content:', data);
// });

// // UPDATE: Append to a file
// fs.appendFile('example.txt', '\nAppending additional content.', (err) => {
//   if (err) throw err;
//   console.log('File updated successfully');
// });

// // DELETE: Delete a file
// fs.unlink('example.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted successfully');
// });




// ////////////////////////////////////

// const http = require("http")



// http.createServer((req,res)=>{
//     res.write("hello");

//     console.log(req.url);  // to find url
//     res.end();


// }).listen(3001,()=>console.log("server is running"))





