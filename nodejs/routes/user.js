const express = require('express')

const router = express.Router()  // create an object 

// path will be  /users
router.get("/",(req,res)=>{
    res.send("get users")
});

router.get("/get-all",(req,res)=>{
    res.send("hello");
})

// path will be user/user-details
router.get("/user-details",(req,res)=>{
    res.send("get users details")
});

router.get("/user-details/:id",(req,res)=>{
    res.send("get users details"+req.params.id)
});

router.get("/search-by-location/:state/:city",(req,res)=>{
    res.send("get users details"+req.params.state + req.params.city)
});

router.post("/search-by-location",(req,res)=>{
    res.json(req.body)
})
router.get("/user-details/:id",(req,res)=>{
    res.send("get users details"+req.params.id)
});

module.exports = router

