const express = require('express')

const  router = express.Router()

router.get('/products',(req,res)=>{
    res.send("hrl")

})

module.exports = router