const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    studentId :Number,
    firstName : String,
    lastName :String,
    age: Number
})

const studentModel = mongoose.model('student',studentSchema)
module.exports = studentModel;