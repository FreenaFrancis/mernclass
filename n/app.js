// // open terminal - type    npm install , npm i express
// // single thread - only one req pass at a time
// // packages - npm 
    
// // function add(a,b){
// //     return a+b
// // }

// // module.exports.add =add;

// // node.js modules - path,fs,http

// // path modules

// const path = require('path')
// console.log(path);

// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.dirname(__filename));

// // parse - object ayaittu ayairikum return

// console.log(path.parse(__filename));
// console.log(path.join(__dirname,"api","script.js"));

// filesystem(fs) - write,read,append , rename,delete 
// const fs = require('fs');

// create

// const fs = require('fs');
// const path = require('path');

// fs.writeFile(path.join(__dirname, "Example", "hello.js"), "username:freena", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File is written successfully");
// });


// // appendFile
// fs.appendFile(path.join(__dirname,"Example","hello.js"),"\nplace:pkd",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("File is appended successfully");
// })


// // readFile

// fs.readFile(path.join(__dirname, 'Example', 'hello.js'),'utf8',(err,data)=> {
//     if(err) {
//     throw err;
//     }
//     console.log("File is readed successfully");
//     console.log(data);
// })


// // delete  - unlink

// fs.unlink(path.join(__dirname,'Example', 'hello.js'),(err)=>{
// if(err){
//     throw err;
// }
// console.log("file is deleted successfully");
// })


// HTTp modules - get,post,update,delete
const http = require('http')

http.createServer((req,res)=>{   // server - req,res
res.write('hello');
res.end();


}).listen(5000,()=>console.log("server is running"))
