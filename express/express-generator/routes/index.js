var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

//let person={
 // name:'athira', age:20
//}
let age=18;
if(age>18)
console.log("the person is eligible to vote")

  res.render('index', { title: 'Express' age});
});

module.exports = router;
