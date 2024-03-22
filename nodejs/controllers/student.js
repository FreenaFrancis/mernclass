const express = require('express');
const studentModel = require('./models/students')

const create =  async (req, res, next) => {
    try {
        const newStudent = new studentModel({
            studentId: 100,
            firstName: 'freena',
            lastName: 'francis',
            age: 22
        });
         // Save the student using await to wait for the operation to complete
         const savedStudent = await newStudent.save();

         res.send({ message: 'Student created', studentObj: savedStudent });
     } catch (error) {
         res.status(500).send({ error: 'Error creating student', details: error.message });
     }
 };

 module.exports= create;
 