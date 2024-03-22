// const express = require('express');

// const mongoose = require('mongoose');
// const studentModel = require('../models/students');
// const create = require('../controllers/student');

// const router = express.Router()

// router.get('/',function(req,res,next){
//     res.send('respond with resource');
// })

// // router.get('/add', function(req,res,next){
// // let newStudent = new studentModel({
// //     studentId :100,
// //     firstName : 'freena',
// //     lastName :'francis',
// //     age: 22
// // })
// // newStudent.save(function(err,newStudent){
// //     if(err){
// //         res.send(err);
// //     }else{
// //         res.send({message:'student created', studentObj:newStudent})
// //     }
// // })
// // })

// router.get('/add',create)

// router.get('/add', async (req, res, next) => {
//     try {
//         const newStudent = new studentModel({
//             studentId: 100,
//             firstName: 'freena',
//             lastName: 'francis',
//             age: 22
//         });

//         // Save the student using await to wait for the operation to complete
//         const savedStudent = await newStudent.save();

//         res.send({ message: 'Student created', studentObj: savedStudent });
//     } catch (error) {
//         res.status(500).send({ error: 'Error creating student', details: error.message });
//     }
// });

// router.post('/add', async (req, res, next) => {
//     try {
//         const newStudent = new studentModel({
//             studentId: req.body.studentId,
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             age: req.body.age
//         });

//         // Save the student using await to wait for the operation to complete
//         const savedStudent = await newStudent.save();

//         res.send({ message: 'Student created', studentObj: savedStudent });
//     } catch (error) {
//         res.status(500).send({ error: 'Error creating student', details: error.message });
//     }
// });

// router.get('/list', async (req, res, next) => {
//     try {
//         const students = await studentModel.find();

//         res.status(200).send({ status: 200, students: students });
//     } catch (error) {
//         res.status(500).send({ error: 'Error fetching students', details: error.message });
//     }
// });


// router.get('/searchByFirstName', async (req, res, next) => {
//     try {
//         const firstName = req.query.firstName;
//         const students = await studentModel.find({ firstName: firstName });
//         res.status(200).send(students);
//     } catch (error) {
//         res.status(500).send({ error: 'Error fetching students', details: error.message });
//     }
// });

// router.get('/searchByID', async (req, res, next) => {
//     try {
//         const idQuery = req.query.id;
//         const student = await studentModel.findById(idQuery);
//         if (!student) {
//             return res.status(404).send({ error: 'Student not found' });
//         }
//         res.status(200).send(student);
//     } catch (error) {
//         res.status(500).send({ error: 'Error fetching student', details: error.message });
//     }
// });

// // router.put('/update',async(req,res,next)=>{
// //     const department = await req.query.department;
// //     studentModel.update({age:30,department:department},function(err,response){
// //         if(err)
// //         res.send(err);
// //     elseres.send({status:200,students:response})
// //     })
// // })

// router.put('/update', async (req, res) => {
//     const department = req.query.department;

//     try {
//         // Assuming you want to update all students in the given department to age 30
//         const response = await studentModel.updateMany({ department }, { age: 30 });

//         if (response.nModified === 0) {
//             return res.status(404).send('No matching students found.');
//         }

//         res.status(200).send('Students updated successfully.');
//     } catch (error) {
//         res.status(500).send(`Error updating students: ${error.message}`);
//     }
// });

// // router.put('/updateUser', async (req, res) => {
// //     const id = req.query.userId;
// //     const updatedFirstName = req.body.firstName; // Assuming you send the updated first name in the request body

// //     try {
// //         const response = await studentModel.findByIdAndUpdate(id, { firstName: updatedFirstName });

// //         if (!response) {
// //             return res.status(404).send('Student not found.');
// //         }

// //         res.status(200).send('Student updated successfully.');
// //     } catch (error) {
// //         res.status(500).send(`Error updating student: ${error.message}`);
// //     }
// // });


// router.put('/updateUser',async(req,res,next)=>{
//     const id = await req.query.userId;
//     studentModel.findByIdAndUpdate(id,function(err,response){
//         if(err)
//         res.send(err);
//     elseres.send({status:200,students:response})
//     })
// })



// module.exports = router;





const express = require('express');
const router = express.Router();
const studentModel = require('../models/students');
const createStudent = require('../controllers/student');

router.get('/', (req, res) => {
  res.send('Respond with resource');
});

router.get('/add', createStudent);

router.post('/add', async (req, res) => {
  try {
    const { studentId, firstName, lastName, age } = req.body;
    const newStudent = new studentModel({ studentId, firstName, lastName, age });
    const savedStudent = await newStudent.save();
    res.send({ message: 'Student created', studentObj: savedStudent });
  } catch (error) {
    res.status(500).send({ error: 'Error creating student', details: error.message });
  }
});

router.get('/list', async (req, res) => {
  try {
    const students = await studentModel.find();
    res.status(200).send({ status: 200, students });
  } catch (error) {
    res.status(500).send({ error: 'Error fetching students', details: error.message });
  }
});

router.get('/searchByFirstName/:firstName', async (req, res) => {
  try {
    const firstName = req.params.firstName;
    const students = await studentModel.find({ firstName });
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching students', details: error.message });
  }
});

router.get('/searchByID/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findById(id);
    if (!student) {
      return res.status(404).send({ error: 'Student not found' });
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching student', details: error.message });
  }
});

router.put('/update', async (req, res) => {
  const department = req.body.department;
  try {
    const response = await studentModel.updateMany({ department }, { age: 30 });
    if (response.nModified === 0) {
      return res.status(404).send('No matching students found.');
    }
    res.status(200).send('Students updated successfully.');
  } catch (error) {
    res.status(500).send(`Error updating students: ${error.message}`);
  }
});

router.put('/updateUser/:userId', async (req, res) => {
  const id = req.params.userId;
  try {
    const response = await studentModel.findByIdAndUpdate(id, req.body);
    if (!response) {
      return res.status(404).send('Student not found.');
    }
    res.status(200).send('Student updated successfully.');
  } catch (error) {
    res.status(500).send(`Error updating student: ${error.message}`);
  }
});

module.exports = router;
