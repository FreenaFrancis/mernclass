// const http = require("http")



// http.createServer((req,res)=>{
//     res.write("hello");

//     console.log(req.url);  // to find url
//     res.end();


// }).listen(3001,()=>console.log("server is running"))
// //////////////////////////////////////////////////////////////////////////////////////////////

// Another method

// const http = require("http")
//  const server = http.createServer((req,res)=>{
//     res.write("hello");

//     console.log(req.url);  // to find url
//     res.end();


// });

// // const PORT = 3001
// const PORT =  process.env.PORT || 3001 //to deploy the 
// server.listen(PORT, ()=>console.log(`server is running on ${PORT}`))


//////////////////////////////////////////////////////////////////////////////////////////////





// const http = require("http");
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     if(req.url==="/"){
//         fs.readFile(path.join(__dirname, "views", "index.html"), "utf8", (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });//content type ariyan
//             // res.writeHead(200, { 'Content-Type': 'application/json' });//content type ariyan
//             res.end(data);
//         });
//     }

//     if(req.url ==="/contact"){
//         fs.readFile(path.join(__dirname, "views", "contact.html"), "utf8", (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });//content type ariyan
//             // res.writeHead(200, { 'Content-Type': 'application/json' });//content type ariyan
//             res.end(data);
//         });
//     }
   
// });

// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => console.log(`Server is running on ${PORT}`));





const express = require('express');
const app = express();

// Middleware to parse JSON data in requests
app.use(express.json());

// Sample data
// let users = [
//   { id: 1, firstName: "John", lastName: "Doe" },
//   { id: 2, firstName: "Jane", lastName: "Smith" }
// ];

// GET method to retrieve all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST method to create a new user
app.post("/hi", (req,res)=>{
  var obj = {
      firstName:"dc",
      lastName:"dvf"
  }
  res.send(obj);
})

// DELETE method to delete a user by ID
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.sendStatus(204); // No content, successful deletion
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// PUT method to update a user by ID
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { firstName, lastName } = req.body;
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], firstName, lastName };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const mongoose = require('mongoose');
// const userRouter = require('./routes/user');
// const productRouter = require('./routes/products');
// const studentRouter= require('./routes/Student')
// const app = express();
// const PORT = 5000;

// const studentModel = require('./models/students')

// // Connect to the MongoDB database
// mongoose.connect('mongodb://127.0.0.1:27017/class', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to the database');
//     })
//     .catch((error) => {
//         console.error('Error connecting to the database:', error);
//     });


// // Middleware to parse JSON requests
// app.use(express.json());

// // Middleware function to log requests
// app.use((req, res, next) => {
//     console.log(`Request received: ${req.method} ${req.url}`);
//     next();
// });

// // Routes
// app.use('/users', userRouter);
// app.use('/product', productRouter);
// app.use('/student',studentRouter);

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error('Error:', err.stack);
//     res.status(500).send('Something went wrong!');
// });





// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


